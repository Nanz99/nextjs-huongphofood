import data from '../../utils/data';
import PriceSize from '../PriceSize';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { CardContent, CardMedia, CardActionArea, Card, Button, Typography, Grid, Box, } from '@mui/material'
import Image from 'next/image'
function FoodBeLike() {
  return (
    <Box sx={{
      width: 1200,
      margin: '0 auto',
      bgcolor: '#fff',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: 1,
      padding: 2.4,
      mb: 4,
      border: '1px solid #cda922'

    }}>
      <Box sx={{
        flexDirection: { xs: 'column', md: 'row' },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 2,
            borderBottom: '1px solid #DEDEDE',
            marginBottom: 2.4,
      }

      }>
        <Typography variant="h2" color="#333" sx={{
          fontSize: 28,
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
        }}>
          <Image src="/images/icons/fire.png" height="36" width="36" className="logo__title" alt="" />
          <span className="title__large">
            MÓN ĐƯỢC YÊU THÍCH
          </span>
        </Typography>
        <Button variant="text" sx={{
          color: "#fff",
        }} endIcon={<ArrowRightAltIcon />}>Xem Chi Tiết </Button>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {data.foods.filter(item => item.category === "mon-yeu-thich").map(food => {
            return (
              <Grid item xs={6} md={2.4} key={food.id}>
                <Card sx={{ maxWidth: 345, Height: 300 }}>
                  <CardActionArea >
                    <CardMedia
                      component="img"
                      height="145"
                      image={food.image}
                      alt="green iguana"

                    />
                    <CardContent sx={{
                      height: 160
                    }}>
                      <Typography gutterBottom variant="h6" component="div" sx={{
                        marginBottom: 2,
                        lineHeight: 1.2,
                      }}>
                        {food.name}
                      </Typography>
                      <PriceSize prices={food.prices} />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            )
          })
          }

        </Grid>
      </Box>
    </Box>

  )
}

export default FoodBeLike

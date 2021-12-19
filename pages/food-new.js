import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Layout from '../components/Layout'
import Image from 'next/image'
import { CardMedia,CardContent,CardActionArea,Card,Button,Grid, Box, Typography } from '@mui/material'

import NextLink from 'next/link'
import PriceSize from '../components/PriceSize'
import data from '../utils/data'

function foodnewpage() {
   return (
      <Layout>
         <Box sx={{
            width: 1200,
            margin: '0 auto'
         }}>
            <Breadcrumb title="Món mới" />
            <Box sx={{
               width: 1200,
               margin: '0 auto',
               bgcolor: '#cda922',
               borderRadius: '12px',
               overflow: 'hidden',
               boxShadow: 1,
               padding: 2.4,
               mb: 4

            }}>
               <Box sx={{
                  flexDirection: { xs: 'column', md: 'row' },
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: 2,
                  borderBottom: '1px solid #fff',
                  marginBottom: 2.4,
               }
               }>
                  <Typography variant="h2" color="white" sx={{
                     fontSize: 28,
                     fontWeight: 'bold',
                     display: 'flex',
                     alignItems: 'center',
                  }}>
                     <Image src="/images/icons/new.png" height="36" width="36" className="logo__title" alt="" />
                     <span className="title__large">
                        MÓN MỚI
                     </span>
                  </Typography>
                 
               </Box>
               <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                     {/* {data.foods.filter(item => item.category === "mon-moi").map(food => {
                        return (
                           <Grid item xs={6} md={3} key={food.id}>
                              <Card sx={{ maxWidth: 345, Height: 300 }}>
                                 <CardActionArea >
                                    <CardMedia
                                       component="img"
                                       height="184"
                                       image={food.image}
                                       alt="green iguana"

                                    />
                                    <CardContent sx={{
                                       height: 140
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
                     } */}

                  </Grid>
               </Box>
            </Box>
         </Box>
      </Layout>

   )
}

export default foodnewpage
/** @format */

import React from "react";
import data from "../../utils/data";
import PriceSize from "../PriceSize";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  CardContent,
  CardMedia,
  CardActionArea,
  Card,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";

function FoodNew() {
  return (
    <Box
      sx={{
        width: 1200,
        margin: "0 auto",
        bgcolor: "#cda922",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: 1,
        padding: 2.4,
        mb: 4,
      }}
    >
      <Box
        sx={{
          flexDirection: { xs: "column", md: "row" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 2,
          borderBottom: "1px solid #fff",
          marginBottom: 2.4,
        }}
      >
        <Typography
          variant="h2"
          color="white"
          sx={{
            fontSize: 28,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src="/images/icons/new.png"
            height="36"
            width="36"
            className="logo__title"
            alt=""
          />
          <span className="title__large">MÓN MỚI</span>
        </Typography>
        <NextLink href="/food-new">
          <Button
            variant="text"
            sx={{
              color: "#fff",
            }}
            endIcon={<ArrowRightAltIcon />}
          >
            Xem Chi Tiết{" "}
          </Button>
        </NextLink>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {data.foods
            .filter((item) => item.category === "mon-moi")
            .map((food) => {
              return (
                <Grid item xs={6} md={3} key={food.id}>
                  <Card sx={{ maxWidth: 345, Height: 300 }}>
                    <NextLink href={`/product/${food.slug}`} passHref>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="184"
                          image={food.image}
                          alt="green iguana"
                        />
                        {/* <Image src={food.image} height="184" width ="280" alt="green"/> */}
                        <CardContent
                          sx={{
                            height: 160,
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{
                              marginBottom: 2,
                              lineHeight: 1.2,
                            }}
                          >
                            {food.name}
                          </Typography>
                          <PriceSize prices={food.prices} />
                        </CardContent>
                      </CardActionArea>
                    </NextLink>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </Box>
  );
}

export default FoodNew;

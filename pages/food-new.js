/** @format */

import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/Layout";
import Image from "next/image";
import {
  Grid,
  CardMedia,
  CardContent,
  CardActionArea,
  Card,
  Button,
  Box,
  Typography,
  Container,
} from "@mui/material";

import NextLink from "next/link";
import PriceSize from "../components/PriceSize";
import data from "../utils/data";

function foodnewpage() {
  return (
    <Layout>
      <Breadcrumb title="Món mới" />

      <Container fixed sx={{
         mb: '100px'
      }}>
        <Grid container spacing={4}>
          <Grid item md={8}>
            <Box
              sx={{
                flexDirection: { xs: "column", md: "row" },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: 2,
                marginBottom: 2.4,
              }}
            >
              <Typography
                variant="h2"
                color="#000"
                sx={{
                  fontSize: 28,
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/icons/new-2.png"
                  height="36"
                  width="36"
                  className="logo__title"
                  alt=""
                />
                <span className="title__large">MÓN MỚI</span>
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {data.foods
                  .filter((item) => item.category === "mon-moi")
                  .map((food) => {
                    return (
                      <Grid item xs={6} md={3} key={food.id}>
                        <Card sx={{ maxWidth: 345, Height: 300 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="126"
                              image={food.image}
                              alt="green iguana"
                            />
                            <CardContent
                              sx={{
                                height: 153,
                              }}
                            >
                              <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                                sx={{
                                  marginBottom: 2,
                                  lineHeight: 1.2,
                                  fontSize: '18px'
                                }}
                              >
                                {food.name}
                              </Typography>
                              <PriceSize prices={food.prices} />
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    );
                  })}
              </Grid>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Card
              sx={{
                padding: 2,
              }}
            >
              <Typography
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  height="32"
                  width="32"
                  src="/images/icons/shopping-cart-2.png"
                  alt="cart"
                />
                <Typography
                  component="h1"
                  variant="000"
                  sx={{
                    ml: 2,
                  }}
                >
                  Gio Hang
                </Typography>
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default foodnewpage;

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
  Stack,
  Box,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import NextLink from "next/link";
import PriceSize from "../components/PriceSize";
import data from "../utils/data";

function foodnewpage() {
  return (
    <Layout>
      <Breadcrumb title="Món mới" />

      <Container
        fixed
        sx={{
          mb: "100px",
          padding: "0 !important",
        }}
      >
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
                          <NextLink href={`/product/${food.slug}`} passHref>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                height="126"
                                image={food.image}
                                alt="green iguana"
                              />
                              <CardContent
                                sx={{
                                  height: 170,
                                }}
                              >
                                <Typography
                                  gutterBottom
                                  component="div"
                                  sx={{
                                    // marginBottom: 2,
                                    lineHeight: "25,2px",
                                    fontSize: "18px",
                                    mb: "10px",
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
                  padding: "10px",
                  borderBottom: "1px solid #DEDEDE",
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
                  Giỏ Hàng
                </Typography>
              </Typography>
              <Grid
                container
                spacing={1}
                sx={{ padding: "20px 0", borderBottom: "1px solid #DEDEDE" }}
              >
                <Grid item md={8}>
                  <Grid container spacing={1}>
                    <Grid item md={4}>
                      <Image
                        src="/images/mon-an/mon-an-3.jpg"
                        alt=""
                        height={50}
                        width={76}
                        layout="responsive"
                        style={{ borderRadius: "8px", overflow: "hidden" }}
                      />
                    </Grid>
                    <Grid item md={8}>
                      <Typography component="div">
                        <Typography component="h5">
                          Cá chép hấp hồng kong
                        </Typography>
                        <Typography
                          component="div"
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <Image
                            src="/images/icons/priceS.png "
                            alt=""
                            height={18}
                            width={18}
                          />{" "}
                          <Typography component="span" sx={{ ml: "5px" }}>
                            x3{" "}
                          </Typography>
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={4}>
                  <Typography component="div">
                    <Typography component="h5">10.126.000 đ</Typography>
                    <Stack
                      direction="row"
                      justifyContent="flex-end"
                      spacing={1}
                    >
                      <IconButton aria-label="edit">
                        <EditOutlinedIcon sx={{ color: "#CDA922" }} />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                sx={{ padding: "20px 0", borderBottom: "1px solid #DEDEDE" }}
              >
                <Grid item md={8}>
                  <Grid container spacing={1}>
                    <Grid item md={4}>
                      <Image
                        src="/images/mon-an/mon-an-4.jpg"
                        alt=""
                        height={50}
                        width={76}
                        layout="responsive"
                        style={{ borderRadius: "8px", overflow: "hidden" }}
                      />
                    </Grid>
                    <Grid item md={8}>
                      <Typography component="div">
                        <Typography component="h5">
                        Chả mực hạ long
                        </Typography>
                        <Typography
                          component="div"
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <Image
                            src="/images/icons/priceS.png "
                            alt=""
                            height={18}
                            width={18}
                          />{" "}
                          <Typography component="span" sx={{ ml: "5px" }}>
                            x3{" "}
                          </Typography>
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={4}>
                  <Typography component="div">
                    <Typography component="h5">10.126.000 đ</Typography>
                    <Stack
                      direction="row"
                      justifyContent="flex-end"
                      spacing={1}
                    >
                      <IconButton aria-label="edit">
                        <EditOutlinedIcon sx={{ color: "#CDA922" }} />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </Typography>
                </Grid>
              </Grid>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
                sx={{
                  padding:'20px 0'
                }}
              >
                <Typography component="h3"  sx={{fontSize:'16px', fontWeight:500}}>Tổng Tiền</Typography>
                <Typography component="h3" sx={{fontSize:'24px', fontWeight:'bold'}}>13.828.000 đ</Typography>
              </Stack>
              <Button fullWidth variant="contained" sx={{backgroundColor:'#CDA922', textTransform: "uppercase"}}>Đặt hàng</Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default foodnewpage;

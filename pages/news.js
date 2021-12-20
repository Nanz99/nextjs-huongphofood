/** @format */

import {
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import Layout from "../components/Layout";
import NextLink from "next/link";
import Breadcrumb from "../components/common/Breadcrumb";
import VideoList from "../components/VideoList";

function news() {
  return (
    <Layout title="News">
      <Container fixed sx={{ padding: "0 0 64px !important" }}>
        <Grid container spacing={4}>
          <Grid item md={3}>
            <List sx={{ mt: 4 }}>
              <ListItem
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "36px",
                  color: "#CDA922",
                }}
              >
                <NextLink href="/">Tin Ẩm Thực</NextLink>
              </ListItem>
              <ListItem
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "36px",
                }}
              >
                <NextLink href="/">Sự Kiện</NextLink>
              </ListItem>
              <ListItem
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "36px",
                }}
              >
                <NextLink href="/">Tin Khuyến Mãi</NextLink>
              </ListItem>
              <ListItem
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "36px",
                }}
              >
                <NextLink href="/">Tin Tuyển Dụng</NextLink>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={9}>
            <Breadcrumb title="Tin ẩm thực" />
            <Typography
              component="h3"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "42px",
                lineHeight: "63px",
                mb: "32px",
              }}
            >
              Tin Ẩm thực
            </Typography>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <NextLink href="/news/news-details">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="260"
                      image="/images/tin-tuc/new1.png"
                      alt="green iguana"
                      sx={{ borderRadius: "8px", overflow: "hidden" }}
                    />
                    <Typography component="div">
                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          lineHeight: "27px",
                          m: "12px 0",
                        }}
                      >
                        Donec porta id enim purus lorem consequat aliquet.
                      </Typography>

                      <Typography
                        component="p"
                        sx={{
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "21px",
                        }}
                      >
                        Donec porta id enim purus lorem consequat aliquet.
                      </Typography>
                    </Typography>
                  </CardActionArea>
                </NextLink>
              </Grid>
              <Grid item md={6}>
                <NextLink href="/news/news-details">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="260"
                      image="/images/tin-tuc/new2.png"
                      alt="green iguana"
                      sx={{ borderRadius: "8px", overflow: "hidden" }}
                    />
                    <Typography component="div">
                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          lineHeight: "27px",
                          m: "12px 0",
                        }}
                      >
                        Donec porta id enim purus lorem consequat aliquet.
                      </Typography>

                      <Typography
                        component="p"
                        sx={{
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "21px",
                        }}
                      >
                        Donec porta id enim purus lorem consequat aliquet.
                      </Typography>
                    </Typography>
                  </CardActionArea>
                </NextLink>
              </Grid>
              <Grid item md={6}>
                <NextLink href="/news/news-details">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="260"
                      image="/images/tin-tuc/new3.png"
                      alt="green iguana"
                      sx={{ borderRadius: "8px", overflow: "hidden" }}
                    />
                    <Typography component="div">
                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          lineHeight: "27px",
                          m: "12px 0",
                        }}
                      >
                        Donec porta id enim purus lorem consequat aliquet.
                      </Typography>

                      <Typography
                        component="p"
                        sx={{
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "21px",
                        }}
                      >
                        Donec porta id enim purus lorem consequat aliquet.
                      </Typography>
                    </Typography>
                  </CardActionArea>
                </NextLink>
              </Grid>
              <Grid item md={6}>
                <NextLink href="/news/news-details">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="260"
                      image="/images/tin-tuc/new4.png"
                      alt="green iguana"
                      sx={{ borderRadius: "8px", overflow: "hidden" }}
                    />
                    <Typography component="div">
                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          lineHeight: "27px",
                          m: "12px 0",
                        }}
                      >
                        Donec porta id enim purus lorem consequat aliquet.
                      </Typography>

                      <Typography
                        component="p"
                        sx={{
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "21px",
                        }}
                      >
                        Donec porta id enim purus lorem consequat aliquet.
                      </Typography>
                    </Typography>
                  </CardActionArea>
                </NextLink>
              </Grid>
              <Grid item md={6}>
                <NextLink href="/news/news-details">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="260"
                      image="/images/tin-tuc/new5.png"
                      alt="green iguana"
                      sx={{ borderRadius: "8px", overflow: "hidden" }}
                    />
                    <Typography component="div">
                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          lineHeight: "27px",
                          m: "12px 0",
                        }}
                      >
                        Donec porta id enim purus lorem consequat aliquet.
                      </Typography>

                      <Typography
                        component="p"
                        sx={{
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "21px",
                        }}
                      >
                        Donec porta id enim purus lorem consequat aliquet.
                      </Typography>
                    </Typography>
                  </CardActionArea>
                </NextLink>
              </Grid>
              <Grid item md={6}>
                <NextLink href="/news/news-details">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="260"
                      image="/images/tin-tuc/new6.png"
                      alt="green iguana"
                      sx={{ borderRadius: "8px", overflow: "hidden" }}
                    />
                    <Typography component="div">
                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          lineHeight: "27px",
                          m: "12px 0",
                        }}
                      >
                        Donec porta id enim purus lorem consequat aliquet.
                      </Typography>

                      <Typography
                        component="p"
                        sx={{
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "21px",
                        }}
                      >
                        Donec porta id enim purus lorem consequat aliquet.
                      </Typography>
                    </Typography>
                  </CardActionArea>
                </NextLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <VideoList />
    </Layout>
  );
}

export default news;

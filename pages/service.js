/** @format */
import data from "../utils/data";
import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Layout from "../components/Layout";

function Services() {
  return (
    <Layout title="Dịch Vụ Tiệc">
      <Typography
        component="div"
        sx={{
          backgroundImage: `url(/images/dich-vu/bg-service-page.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          backgroundSize: "cover",
          height: "230px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          component="div"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: "42px",
              lineHeight: "63px",
              textTransform: "uppercase",
              color: "#fff",
            }}
          >
            dịch vụ Tiệc
          </Typography>
        </Typography>
      </Typography>
      <Container fixed sx={{ padding: "64px 0 !important" }}>
        <Typography
          component="p"
          sx={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "#333",
            fontWeight: 400,
            width: 800,
            margin: "0px auto 48px",
          }}
        >
          Khách hàng đến với Hương Phố luôn cảm thấy thoải mái và an tâm trước
          sự đa dạng của món ăn, dịch vụ do nhà hàng cung cấp và đáp ứng được số
          lượng khách mời lớn. Theo sau đó là sự tận tình, tỉ mỉ của các nhân
          viên tư vấn luôn luôn sẵn sàng hỗ trợ và đưa ra các lời khuyên phù hợp
          nhất cho khách hàng.
        </Typography>
        <Typography
          sx={{
            margin: "0 auto",
            width: 1200,
          }}
        >
          <Grid container gap={2} sx={{ flexWrap: "nowrap" }}>
            {data.services.map((ser) => {
              return (
                <Grid
                  item
                  xs={6}
                  md={3}
                  sx={{
                    height: 440,
                    position: "relative",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                  className={`service__item bg__service${ser.id}`}
                  key={ser.name}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{
                      position: "absolute",
                      bottom: "20px",
                      left: "20px",
                      right: "20px",
                      zIndex: 10,
                    }}
                  >
                    <Typography
                      component="h3"
                      variant="h6"
                      sx={{
                        color: "#fff",
                        fontWight: 700,
                        fontSize: "20px",
                        lightHeight: "34px",
                      }}
                    >
                      {ser.name}
                    </Typography>
                    <Typography
                      component="p"
                      variant="body2"
                      sx={{
                        color: "#fff",
                        fontWight: 400,
                        fontSize: "14px",
                        lightHeight: "21px",
                        mb: 2,
                      }}
                    >
                      {ser.description}
                    </Typography>
                    <Button
                      sx={{
                        bgcolor: "transparent",
                        fontSize: "14px",
                        fontWeight: 400,
                        padding: "8px 12px",
                        border: "1px solid #cda922",
                        color: "#cda922",
                        borderRadius: "8px",
                      }}
                      variant="text"
                    >
                      Xem Chi Tiết
                    </Button>
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Typography>
      </Container>
    </Layout>
  );
}

export default Services;

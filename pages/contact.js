/** @format */

import {
  Card,
  Container,
  Grid,
  Typography,
  TextareaAutosize,
  Button,
} from "@mui/material";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/Layout";

function contact() {
  return (
    <Layout title="Liên Hệ">
      <Typography
        component="div"
        sx={{ backgroundColor: "#fff", paddingBottom: "64px" }}
      >
        <Container fixed sx={{ padding: "0 !important" }}>
          <Breadcrumb title="liên hệ" />
          <Typography
            component="div"
            sx={{
              fontSize: "42px",
              fontWeight: 700,
              lineHeight: "63px",
              textAlign: "center",
            }}
          >
            HP FOOD - HUONG PHO GROUP
          </Typography>
          <Typography
            component="p"
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              width: 690,
              margin: "0 auto",
              textAlign: "center",
              mb: "48px",
            }}
          >
            Chúng tôi luôn quan tâm đến trải nghiệm của khách hàng. Vì thế, nếu
            bạn có thông tin cần trao đổi hãy liên hệ với chúng tôi nhé!
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <Card
                sx={{
                  padding: "32px",
                  backgroundColor: "#FCFAF2",
                  height: "220px",
                }}
              >
                <Typography
                  component="h5"
                  sx={{ mb: "20px", color: "#CDA922" }}
                >
                  {" "}
                  <i className="material-icons" style={{ fontSize: "30px" }}>
                    place
                  </i>
                </Typography>
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    fontSize: "24px",
                    lineHeight: "36px",
                    mb: "12px",
                    fontFamily: "Be VietNam",
                  }}
                >
                  Địa chỉ
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "24px" }}
                >
                  A12 Phan Văn Trị, phường 7 Quận Gò Vấp Tp. Hồ Chí Minh
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card
                sx={{
                  padding: "32px",
                  backgroundColor: "#FCFAF2",
                  height: "220px",
                }}
              >
                <Typography
                  component="h5"
                  sx={{ mb: "20px", color: "#CDA922" }}
                >
                  {" "}
                  <i className="material-icons" style={{ fontSize: "30px" }}>
                    phone
                  </i>
                </Typography>
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    fontSize: "24px",
                    lineHeight: "36px",
                    mb: "12px",
                    fontFamily: "Be VietNam",
                  }}
                >
                  Liên lạc
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "24px" }}
                >
                  Tel: (028). 3989.6179
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "24px" }}
                >
                  Fax: (028). 3989.4610
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card
                sx={{
                  padding: "32px",
                  backgroundColor: "#FCFAF2",
                  height: "220px",
                }}
              >
                <Typography
                  component="h5"
                  sx={{ mb: "20px", color: "#CDA922" }}
                >
                  {" "}
                  <i className="material-icons" style={{ fontSize: "30px" }}>
                    email
                  </i>
                </Typography>
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    fontSize: "24px",
                    lineHeight: "36px",
                    mb: "12px",
                    fontFamily: "Be VietNam",
                  }}
                >
                  Địa chỉ email
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "24px" }}
                >
                  salehuongpho@gmail.com
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card
                sx={{
                  padding: "32px",
                  backgroundColor: "#FCFAF2",
                  height: "220px",
                }}
              >
                <Typography
                  component="h5"
                  sx={{ mb: "20px", color: "#CDA922" }}
                >
                  {" "}
                  <i
                    className="fab fa-facebook-f"
                    style={{ fontSize: "30px" }}
                  ></i>
                </Typography>
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    fontSize: "24px",
                    lineHeight: "36px",
                    mb: "12px",
                    fontFamily: "Be VietNam",
                  }}
                >
                  Facebook
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "24px" }}
                >
                  /nhahangtiecuoihuongpho
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Typography>
      <Typography component="div" sx={{ width: "100%", height: "500px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9663.057481877506!2d106.67837752652324!3d10.82982751955132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528f95cd1affd%3A0xaa8842de2eb8cc5c!2zTmjDoCBIw6BuZyBUaeG7h2MgQ8aw4bubaSBIxrDGoW5nIFBo4buR!5e0!3m2!1svi!2s!4v1639982493031!5m2!1svi!2s"
          width="600"
          height="450"
          allowFullscSreen="reponsive"
          style={{ border: 0, width: "100%", height: "100%" }}
          loading="lazy"
        ></iframe>
      </Typography>
      <Typography component="div">
        <Container
          fixed
          sx={{
            padding: "0 !important",
            width: "1200px",
            margin: "64px auto",
            padding: "32px 0",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <Typography
            component="h2"
            sx={{
              textAlign: "center",
              fontSize: "28px",
              fontWeight: 700,
              lineHeight: "42px",
              textTranform: "uppercase",
            }}
          >
            Để lại liên hệ
          </Typography>
          <Typography
            component="p"
            sx={{
              textAlign: "center",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              width: "416px",
              margin: "0 auto 40px",
            }}
          >
            Quý khách hàng vui lòng điền các thông tin bên dưới để HP FOOD có
            thể hỗ trợ tốt nhất
          </Typography>
          <Grid container spacing={2} sx={{ padding: "0 236px" }}>
            <Grid item md={6}>
              <label
                htmlFor="yourname"
                style={{
                  display: " block",
                  marginBottom: "8px",
                  color: "#333",
                }}
              >
                Tên của bạn <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                style={{
                  padding: "8px",
                  width: "100%",
                  height: "48px",
                  border: "1px solid #DEDEDE",
                  boxSizing: " border-box",
                  borderRadius: " 4px",
                }}
              />
            </Grid>
            <Grid item md={6}>
              <label
                htmlFor="yourname"
                style={{
                  display: " block",
                  marginBottom: "8px",
                  color: "#333",
                }}
              >
                Số điện thoại <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                style={{
                  padding: "8px",
                  width: "100%",
                  height: "48px",
                  border: "1px solid #DEDEDE",
                  boxSizing: " border-box",
                  borderRadius: " 4px",
                }}
              />
            </Grid>
            <Grid item md={6}>
              <label
                htmlFor="yourname"
                style={{
                  display: " block",
                  marginBottom: "8px",
                  color: "#333",
                }}
              >
                Email <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                style={{
                  padding: "8px",
                  width: "100%",
                  height: "48px",
                  border: "1px solid #DEDEDE",
                  boxSizing: " border-box",
                  borderRadius: " 4px",
                }}
              />
            </Grid>
            <Grid item md={6}>
              <label
                htmlFor="yourname"
                style={{
                  display: " block",
                  marginBottom: "8px",
                  color: "#333",
                }}
              >
                Tiêu đề
              </label>
              <input
                type="text"
                name=""
                id=""
                style={{
                  padding: "8px",
                  width: "100%",
                  height: "48px",
                  border: "1px solid #DEDEDE",
                  boxSizing: " border-box",
                  borderRadius: " 4px",
                }}
              />
            </Grid>
            <Grid item md={12}>
              <label
                htmlFor="yourname"
                style={{
                  display: " block",
                  marginBottom: "8px",
                  color: "#333",
                }}
              >
                Nội dung
              </label>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={6}
                placeholder=""
                style={{
                  width: "100%",
                  border: "1px solid #DEDEDE",
                  boxSizing: "border-box",
                  borderRadius: " 4px",
                  padding: "20px",
                }}
              />
            </Grid>
            <Grid item md={12} sx={{display: "flex", justifyContent:'center'}}>
              <Button
                variant="contained"
                sx={{ padding: "10px 110px", backgroundColor: "#CDA922" , textAlign: "center" }}
              >
                Gửi Thư
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Typography>
    </Layout>
  );
}

export default contact;

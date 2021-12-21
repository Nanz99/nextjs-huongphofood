/** @format */

import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import Layout from "../../components/Layout";
import Slider from "react-slick";
import Image from "next/image";
import useStyles from "../../utils/styles";

function ServiceDetails() {
  const classes = useStyles();
  var settings = {
    dots: false,
    infinite: true,
    padding: 10,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Layout title="Service Details">
      <Typography
        component="div"
        sx={{ backgroundColor: "#262626", padding: "10px 0 24px" }}
      >
        <Container>
          <Breadcrumb
            title="Service Details"
            service
            color1="#fff"
            color2="#CDA922"
            color3="#fff"
          />
          <Slider {...settings} className="video__list">
            <div className="video__item">
              <div className="video__image">
                <Image
                  width="221"
                  height="140"
                  src="/images/dich-vu/img-dv-1.png"
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
            <div className="video__item">
              <div className="video__image">
                <Image
                  width="221"
                  height="140"
                  src="/images/dich-vu/img-dv-2.png"
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
            <div className="video__item">
              <div className="video__image">
                <Image
                  width="221"
                  height="140"
                  src="/images/dich-vu/img-dv-3.png"
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
            <div className="video__item">
              <div className="video__image">
                <Image
                  width="221"
                  height="140"
                  src="/images/dich-vu/img-dv-4.png"
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
            <div className="video__item">
              <div className="video__image">
                <Image
                  width="221"
                  height="140"
                  src="/images/dich-vu/img-dv-1.png"
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
            <div className="video__item">
              <div className="video__image">
                <Image
                  width="221"
                  height="140"
                  src="/images/dich-vu/img-dv-2.png"
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
            <div className="video__item">
              <div className="video__image">
                <Image
                  width="221"
                  height="140"
                  src="/images/dich-vu/img-dv-3.png"
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
            <div className="video__item">
              <div className="video__image">
                <Image
                  width="221"
                  height="140"
                  src="/images/dich-vu/img-dv-4.png"
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
          </Slider>
        </Container>
      </Typography>

      <Container fixed >
        <Grid container spacing={2} sx={{ margin: "32px 0 64px",}}>
          <Grid item md={8}>
            <Typography
              component="div"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "32px",
                border: "1px solid #dedede",
              }}
            >
              <Typography
                component="h2"
                sx={{
                  fontSize: "42px",
                  fontWeight: "bold",
                  lineHeight: "63px",
                  textTransform: "uppercase",
                  mb: "16px",
                }}
              >
                Thiết kế tiệc cưới
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",

                  mb: "12px",
                }}
              >
                Nhà hàng tiệc cưới Hương Phố suốt hơn 14 năm qua đã luôn trở
                thành một trong những nhà hàng tiệc cưới lớn nhất tại quận Gò
                Vấp nói riêng cũng như tại TP.Hồ Chí Minh nói chung. Khách hàng
                đến với Hương Phố luôn cảm thấy thoải mái và an tâm trước sự đa
                dạng của món ăn, dịch vụ do nhà hàng cung cấp và đáp ứng được số
                lượng khách mời lớn. Theo sau đó là sự tận tình, tỉ mỉ của các
                nhân viên tư vấn luôn luôn sẵn sàng hỗ trợ và đưa ra các lời
                khuyên phù hợp nhất cho khách hàng.
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",

                  mb: "12px",
                }}
              >
                Với 21 sảnh hội nghị và tiệc cưới sang trọng cùng công suất lên
                tới 1000 khách mỗi tiệc, nhà hàng tiệc cưới Hương Phố là một lựa
                chọn xứng tầm cho những buổi tiệc cưới đầy dấu ấn trước sự chứng
                kiến của đông đủ gia đình, họ hàng và bè bạn của tất cả các cặp
                uyên ương.
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",

                  mb: "12px",
                }}
              >
                Được khách hàng đánh giá là nhà hàng tiệc cưới có món ăn hợp
                khẩu vị nhất, Hương Phố luôn đầu tư và đổi mới chất lượng món
                ăn, định lượng hợp lí. Với hơn 200 món ăn truyền thống và quốc
                tế, Hương Phố tự tin rằng có thể đáp ứng dược mọi nhu cầu ẩm
                thực của khách hàng. Cùng với đội ngũ nhân viên chuyên nghiệp,
                nhà hàng Hương Phố sẽ đồng hành cùng khách hàng để tổ chức những
                buổi lễ sang trọng và trọn vẹn nhất.
              </Typography>

              <Typography
                component="h4"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  lineHeight: "30px",
                  textTransform: "uppercase",
                  mt: "10px",
                  mb: "12px",
                }}
              >
                ƯU ĐIỂM CỦA HP FOOD:
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  mb: "12px",
                }}
              >
                Có HP FOOD, Quý khách không cần bất kỳ vật dụng nào: ly, chén,
                dĩa, bếp cồn, nồi lẩu, khăn trải bàn, khăn lạnh,… hay các dụng
                cụ chuyên dụng phù hợp với từng món ăn mà Quý khách đã đặt. HP
                FOOD đã được đào tạo phục vụ chuyên nghiệp, đã được giáo huấn kỹ
                lưỡng về đạo đức, tác phong, ngôn phong, sự thân thiện, năng
                động và trách nhiệm.
              </Typography>
              <Typography
                component="h4"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  lineHeight: "30px",
                  textTransform: "uppercase",
                  mt: "10px",
                  mb: "12px",
                }}
              >
                MỘT SỐ LƯU Ý:
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  mb: "12px",
                }}
              >
                Nhân viên HP FOOD có thể nhờ sự hỗ trợ của Quý khách khi cần
                thiết: bếp hâm nóng, lò vi sóng (nếu có)
              </Typography>
              <Typography component="p" className={classes.hp__text}>
                Nhân viên HP FOOD xin phép được từ chối:
              </Typography>
              <Typography component="p" className={classes.hp__text}>
                - Uống rượu bia hoặc ăn uống theo lời mời của Quý khách, kể cả
                hết thời gian phục vụ;
              </Typography>
              <Typography component="p" className={classes.hp__text}>
                - Chế biến món ăn khác theo yêu cầu riêng của Quý khách;
              </Typography>
              <Typography component="p" className={classes.hp__text}>
                - Đi mua thêm những việc ngoài đơn hàng Quý khách đã đặt;
              </Typography>
              <Typography component="p" className={classes.hp__text}>
                - Tham gia các hoạt động khác của Quý khách ngoài nhiệm vụ của
                HP FOOD.
              </Typography>
              <Typography component="p" className={classes.hp__text}>
                - Kết thúc tiệc, xin quý khách vui lòng ký biên bản nghiệm thu,
                kiểm tra mọi vật dụng mà nhân viên HP FOOD mang về, tránh nhầm
                lẫn.
              </Typography>
              <Typography component="p" className={classes.hp__text__bgyellow}>
                HP FOOD sẽ là người giao hàng, mang theo đầy đủ dụng cụ để bày
                trí món ăn, setup bàn ăn chuyên nghiệp như tại nhà hàng, phục vụ
                Quý khách trong lúc ăn, sau cùng là dọn dẹp sạch sẽ trả lại hiện
                trạng ban đầu.
              </Typography>
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography
              component="div"
              sx={{
                backgroundColor: "#fff",
                padding: "24px",
                border: "1px solid #dedede",
                borderRadius: "12px",
              }}
            >
              <Typography
                component="div"
                className={classes.flex__center}
                sx={{ pb: "20px", borderBottom: "1px solid #dedede" }}
              >
                <Image
                  src="/images/icons/send.png"
                  height={32}
                  width={32}
                  alt=""
                />
                <Typography
                  component="h2"
                  className={classes.title__medium}
                  sx={{ ml: "10px" }}
                >
                  {" "}
                  Liên hệ đặt tiệc
                </Typography>
              </Typography>

              <Typography
                component="p"
                className={classes.hp__text__small}
                sx={{ m: "20px 0" }}
              >
                Bạn vui lòng điền các thông tin dưới đây, HP FOOD sẽ liên hệ lại
                bạn sớm nhất có thể.
              </Typography>
              <Grid container spacing={2}>
                <Grid item md={12}>
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
                <Grid item md={12}>
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
                <Grid item md={12}>
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
                    Ngày Tổ Chức
                  </label>
                  <input
                    type="date"
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
                    Ngày Tổ Chức
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

                <Grid
                  item
                  md={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
						fullWidth
                    variant="contained"
                    sx={{
                     //  padding: "10px 110px",
                      backgroundColor: "#CDA922",
                      textAlign: "center",
                    }}
                  >
                    Gửi tới HP FOOD
                  </Button>
                </Grid>
              </Grid>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default ServiceDetails;

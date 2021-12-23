/** @format */

import { Card, Container, Grid, Stack, Typography,Button } from "@mui/material";
import Image from "next/image";
import Layout from "../components/Layout";

function CartSuccess() {
  return (
    <Layout title="Cart Success">
      <Typography component="div" sx={{ backgroundColor: "#fff" }}>
        <Container fixed sx={{ padding: "64px 0 64px !important" }}>
          <Typography
            component="h3"
            sx={{
              fontSize: "28px",
              fontWeight: "bold",
              lineHeight: "42px",
              textAlign: "center",
              mb: "10px",
            }}
          >
            Cám ơn bạn đã đặt hàng tại HP FOOD
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "24px",
              width: 400,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            Đơn hàng của bạn đã được ghi nhận, chúng tôi sẽ liên hệ trong thời
            gian sớm nhất.
          </Typography>
          <Card
            sx={{
              padding: "24px",
              background: "#F5F5F5",
              borderRadius: "12px",
              m: "40px 0 32px",
            }}
          >
            <Typography
              component="h3"
              sx={{ pb: "20px", borderBottom: "1px solid #DEDEDE" }}
            >
              Mã đơn hàng: #27071999621
            </Typography>
            <Grid container spacing={4} sx={{ mt: "0" }}>
              <Grid item md={4}>
                <Typography
                  component="h5"
                  sx={{
                    color: "#111",
                    fontSize: "16px",
                    fontWeight: "bold",
                    lineHeight: "24px",
                    mb: "24px",
                  }}
                >
                  Thông tin giao hàng
                </Typography>
                <Typography component="div">
                  <Typography component="div" sx={{ mb: "16px" }}>
                    <Typography
                      component="h6"
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "21px",
                        color: "#666",
                      }}
                    >
                      Tên của bạn
                    </Typography>
                    <Typography
                      component="h4"
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "24px",
                      }}
                    >
                      Nguyễn Hoàng Lâm Long
                    </Typography>
                  </Typography>
                  <Typography component="div" sx={{ mb: "16px" }}>
                    <Typography
                      component="h6"
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "21px",
                        color: "#666",
                      }}
                    >
                      Số điện thoại
                    </Typography>
                    <Typography
                      component="h4"
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "24px",
                      }}
                    >
                      0909600591
                    </Typography>
                  </Typography>
                  <Typography component="div" sx={{ mb: "16px" }}>
                    <Typography
                      component="h6"
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "21px",
                        color: "#666",
                      }}
                    >
                      Email
                    </Typography>
                    <Typography
                      component="h4"
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "24px",
                      }}
                    >
                      nhllong123@gmail.com
                    </Typography>
                  </Typography>
                  <Typography component="div" sx={{ mb: "16px" }}>
                    <Typography
                      component="h6"
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "21px",
                        color: "#666",
                      }}
                    >
                      Địa chỉ giao hàng
                    </Typography>
                    <Typography
                      component="h4"
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "24px",
                      }}
                    >
                      123 Phan Văn Trị, Phường 7, Quận Gò Vấp, Tp. Hồ Chí Minh
                    </Typography>
                  </Typography>
                </Typography>
              </Grid>
              <Grid item md={8}>
              <Typography
                  component="h5"
                  sx={{
                    color: "#111",
                    fontSize: "16px",
                    fontWeight: "bold",
                    lineHeight: "24px",
                    mb: "10px",
                  }}
                >
                  Thông tin đơn hàng
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                  alignItems="flex-start"
                  sx={{ p: "12px 0", borderBottom: "1px solid #dedede" }}
                >
                  <Stack direction="row" spacing={2}>
                    <Image
                      src="images/mon-an/mon-an-1.jpg"
                      height={50}
                      width={76}
                      alt=""
                    />
                    <Typography component="div">
                      <Typography component="p" sx={{}}>
                        Cá chép hấp hồng kong
                      </Typography>
                      <Stack
                        direction="row"
                        justifyContent="flex-start
                          "
                        alignItems="center"
                        spacing={1}
                      >
                        <Image
                          height={18}
                          width={18}
                          src="/images/icons/m18x18.png"
                          alt=""
                        />
                        <Typography component="h6" sx={{ fontSize: "14px" }}>
                          x3
                        </Typography>
                      </Stack>
                    </Typography>
                  </Stack>
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      lineHeight: "23px",
                    }}
                  >
                    10.126.000 đ
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                  alignItems="flex-start"
                  sx={{ p: "12px 0", borderBottom: "1px solid #dedede" }}
                >
                  <Stack direction="row" spacing={2}>
                    <Image
                      src="images/mon-an/mon-an-1.jpg"
                      height={50}
                      width={76}
                      alt=""
                    />
                    <Typography component="div">
                      <Typography component="p" sx={{}}>
                        Cá chép hấp hồng kong
                      </Typography>
                      <Stack
                        direction="row"
                        justifyContent="flex-start
                          "
                        alignItems="center"
                        spacing={1}
                      >
                        <Image
                          height={18}
                          width={18}
                          src="/images/icons/m18x18.png"
                          alt=""
                        />
                        <Typography component="h6" sx={{ fontSize: "14px" }}>
                          x3
                        </Typography>
                      </Stack>
                    </Typography>
                  </Stack>
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      lineHeight: "23px",
                    }}
                  >
                    10.126.000 đ
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                  alignItems="flex-start"
                  sx={{ p: "12px 0", borderBottom: "1px solid #dedede" }}
                >
                  <Stack direction="row" spacing={2}>
                    <Image
                      src="images/mon-an/mon-an-1.jpg"
                      height={50}
                      width={76}
                      alt=""
                    />
                    <Typography component="div">
                      <Typography component="p" sx={{}}>
                        Cá chép hấp hồng kong
                      </Typography>
                      <Stack
                        direction="row"
                        justifyContent="flex-start
                          "
                        alignItems="center"
                        spacing={1}
                      >
                        <Image
                          height={18}
                          width={18}
                          src="/images/icons/m18x18.png"
                          alt=""
                        />
                        <Typography component="h6" sx={{ fontSize: "14px" }}>
                          x3
                        </Typography>
                      </Stack>
                    </Typography>
                  </Stack>
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      lineHeight: "23px",
                    }}
                  >
                    10.126.000 đ
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                  alignItems="flex-start"
                  sx={{ p: "12px 0", borderBottom: "1px solid #dedede" }}
                >
                  <Stack direction="row" spacing={2}>
                    <Image
                      src="images/mon-an/mon-an-1.jpg"
                      height={50}
                      width={76}
                      alt=""
                    />
                    <Typography component="div">
                      <Typography component="p" sx={{}}>
                        Cá chép hấp hồng kong
                      </Typography>
                      <Stack
                        direction="row"
                        justifyContent="flex-start
                          "
                        alignItems="center"
                        spacing={1}
                      >
                        <Image
                          height={18}
                          width={18}
                          src="/images/icons/m18x18.png"
                          alt=""
                        />
                        <Typography component="h6" sx={{ fontSize: "14px" }}>
                          x3
                        </Typography>
                      </Stack>
                    </Typography>
                  </Stack>
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      lineHeight: "23px",
                    }}
                  >
                    10.126.000 đ
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                  alignItems="flex-start"
                  sx={{ p: "12px 0", borderBottom: "1px solid #dedede" }}
                >
                  <Stack direction="row" spacing={2}>
                    <Image
                      src="images/mon-an/mon-an-1.jpg"
                      height={50}
                      width={76}
                      alt=""
                    />
                    <Typography component="div">
                      <Typography component="p" sx={{}}>
                        Cá chép hấp hồng kong
                      </Typography>
                      <Stack
                        direction="row"
                        justifyContent="flex-start
                          "
                        alignItems="center"
                        spacing={1}
                      >
                        <Image
                          height={18}
                          width={18}
                          src="/images/icons/m18x18.png"
                          alt=""
                        />
                        <Typography component="h6" sx={{ fontSize: "14px" }}>
                          x3
                        </Typography>
                      </Stack>
                    </Typography>
                  </Stack>
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      lineHeight: "23px",
                    }}
                  >
                    10.126.000 đ
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                  alignItems="flex-start"
                  sx={{ p: "12px 0", borderBottom: "1px solid #dedede" }}
                >
                  <Stack direction="row" spacing={2}>
                    <Image
                      src="images/mon-an/mon-an-1.jpg"
                      height={50}
                      width={76}
                      alt=""
                    />
                    <Typography component="div">
                      <Typography component="p" sx={{}}>
                        Cá chép hấp hồng kong
                      </Typography>
                      <Stack
                        direction="row"
                        justifyContent="flex-start
                          "
                        alignItems="center"
                        spacing={1}
                      >
                        <Image
                          height={18}
                          width={18}
                          src="/images/icons/m18x18.png"
                          alt=""
                        />
                        <Typography component="h6" sx={{ fontSize: "14px" }}>
                          x3
                        </Typography>
                      </Stack>
                    </Typography>
                  </Stack>
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      lineHeight: "23px",
                    }}
                  >
                    10.126.000 đ
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                  alignItems="flex-start"
                  sx={{ p: "12px 0", borderBottom: "1px solid #dedede" }}
                >
                  <Stack direction="row" spacing={2}>
                    <Image
                      src="images/mon-an/mon-an-1.jpg"
                      height={50}
                      width={76}
                      alt=""
                    />
                    <Typography component="div">
                      <Typography component="p" sx={{}}>
                        Cá chép hấp hồng kong
                      </Typography>
                      <Stack
                        direction="row"
                        justifyContent="flex-start
                          "
                        alignItems="center"
                        spacing={1}
                      >
                        <Image
                          height={18}
                          width={18}
                          src="/images/icons/m18x18.png"
                          alt=""
                        />
                        <Typography component="h6" sx={{ fontSize: "14px" }}>
                          x3
                        </Typography>
                      </Stack>
                    </Typography>
                  </Stack>
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      lineHeight: "23px",
                    }}
                  >
                    10.126.000 đ
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                  alignItems="flex-start"
                  sx={{ p: "12px 0", borderBottom: "1px solid #dedede" }}
                >
                  <Stack direction="row" spacing={2}>
                    <Image
                      src="images/mon-an/mon-an-1.jpg"
                      height={50}
                      width={76}
                      alt=""
                    />
                    <Typography component="div">
                      <Typography component="p" sx={{}}>
                        Cá chép hấp hồng kong
                      </Typography>
                      <Stack
                        direction="row"
                        justifyContent="flex-start
                          "
                        alignItems="center"
                        spacing={1}
                      >
                        <Image
                          height={18}
                          width={18}
                          src="/images/icons/m18x18.png"
                          alt=""
                        />
                        <Typography component="h6" sx={{ fontSize: "14px" }}>
                          x3
                        </Typography>
                      </Stack>
                    </Typography>
                  </Stack>
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      lineHeight: "23px",
                    }}
                  >
                    10.126.000 đ
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={4}
                  justifyContent="flex-end"
                  alignItems="center"
                  p="12px 0"
                  
                >
                  <Typography component="h5" sx={{
                      fontWeight: 500,
                      fontSize: "16px",
                      lineheight: "23px",
                     
                    }}>Tổng tiền</Typography>
                  <Typography
                    component="h2"
                    sx={{
                      fontWeight: 700,
                      fontSize: "24px",
                      lineheight: "34px",
                     
                    }}
                  >
                    13.828.000 đ
                  </Typography>
                </Stack>
              </Grid>
            </Grid>

          </Card>
          
          <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>
<Button
                  
                  variant="contained"
                  sx={{
                    backgroundColor: "#CDA922",
                    textTransform: "uppercase",
                    padding:'8px 112px'
                  }}
                >
                Tiếp tục đặt món
                </Button>
</Stack>
        </Container>
      </Typography>
    </Layout>
  );
}

export default CartSuccess;

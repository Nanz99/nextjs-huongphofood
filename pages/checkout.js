/** @format */
import Image from "next/image";
import {
  Container,
  Typography,
  Grid,
  Card,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
  Stack,
  Button,
  ButtonGroup,
} from "@mui/material";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/Layout";
import NextLink from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ModalConfig from "../components/common/ModalConfig";

function CheckoutPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Layout title="Checkout">
      <Typography component="div" sx={{ backgroundColor: "#fff" }}>
        <Container fixed sx={{ padding: "0 0 64px !important" }}>
          <Breadcrumb
            title="Thông tin liên hệ đặt hàng"
            cart
            color2="#CDA922"
          />
          <Typography
            component="h1"
            sx={{
              fontWeight: "bold",
              fontSize: "42px",
              lineHeight: "63px",
              textTransform: "uppercase",
              margin: "32px 0",
            }}
          >
            Thông tin liên hệ đặt món
          </Typography>
          <Grid container spacing={3}>
            <Grid item md={8}>
              <Card sx={{ padding: "32px", border: "1px solid #dedede" }}>
                <Typography
                  component="h4"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "28px",
                    lineHeight: "42px",
                    textTransform: "uppercase",
                    mb: "20px",
                  }}
                >
                  Thông tin khách hàng
                </Typography>
                <Grid container spacing={2}>
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
                </Grid>
                <Typography
                  component="h4"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "28px",
                    lineHeight: "42px",
                    textTransform: "uppercase",
                    m: "32px 0 20px",
                  }}
                >
                  Địa chỉ giao hàng
                </Typography>
                <Grid container spacing={2}>
                  <Grid item md={12}>
                    <FormControl fullWidth>
                      <label
                        htmlFor="yourname"
                        style={{
                          display: " block",
                          marginBottom: "8px",
                          color: "#333",
                        }}
                      >
                        Tỉnh/ Thành phố <span style={{ color: "red" }}>*</span>
                      </label>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value=""
                        sx={{ height: "48px" }}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item md={6}>
                    <FormControl fullWidth>
                      <label
                        htmlFor="yourname"
                        style={{
                          display: " block",
                          marginBottom: "8px",
                          color: "#333",
                        }}
                      >
                        Quận/ Huyện<span style={{ color: "red" }}>*</span>
                      </label>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value=""
                        sx={{ height: "48px" }}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item md={6}>
                    <FormControl fullWidth>
                      <label
                        htmlFor="yourname"
                        style={{
                          display: " block",
                          marginBottom: "8px",
                          color: "#333",
                        }}
                      >
                        Phường/ Xã <span style={{ color: "red" }}>*</span>
                      </label>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value=""
                        sx={{ height: "48px" }}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
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
                      Địa chỉ cụ thể <span style={{ color: "red" }}>*</span>
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
                      Ghi chú
                    </label>
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={4}
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
                  <Grid item md={12}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      spacing={2}
                    >
                      <NextLink href="/cart" passHref>
                        <Button
                          startIcon={<ArrowBackIcon />}
                          sx={{ color: "#CDA922" }}
                        >
                          Quay về giỏ hàng
                        </Button>
                      </NextLink>
                      <NextLink href="/checkout">
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#CDA922",
                            padding: "10px 146px",
                          }}
                          onClick={handleOpen}
                        >
                          Đặt hàng
                        </Button>
                      </NextLink>
                    </Stack>
                  </Grid>
                </Grid>
              </Card>
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
                    </Typography>
                  </Grid>
                </Grid>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={1}
                  sx={{
                    padding: "20px 0",
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{ fontSize: "16px", fontWeight: 500 }}
                  >
                    Tổng Tiền
                  </Typography>
                  <Typography
                    component="h3"
                    sx={{ fontSize: "24px", fontWeight: "bold" }}
                  >
                    13.828.000 đ
                  </Typography>
                </Stack>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#CDA922",
                    textTransform: "uppercase",
                  }}
                >
                  Đặt hàng
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Container>

        <ModalConfig open={open} handleClose={handleClose}>
          <Typography component="div" sx={{ textAlign: "center" }}>
            <Typography
              component="h2"
              sx={{ fontWeight: "bold", fontSize: "28px", lineHeight: "42px" }}
            >
              Xác nhận đặt hàng
            </Typography>
            <Typography
              component="p"
              sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "24px" }}
            >
              Bạn có chắc chắn muốn đặt hàng với các thông tin đã nhập?
            </Typography>
            <ButtonGroup disableElevation variant="contained">
              <NextLink href="/checkout">
                <Button
                  sx={{
                    m: "10px",
                    borderRadius: "8px !important",
                    overlow: "hiden",
                    background: "#fff",
                    color: "#CDA922",
                    border: "1px solid #CDA922 !important",
                    padding: "8px 60px",
                  }}
                >
                  Quay lại
                </Button>
              </NextLink>
              <NextLink href="/cart-success">
                <Button
                  sx={{
                    m: "10px",
                    borderRadius: "8px !important",
                    color: "#fff",
                    padding: "8px 60px",
                    background: "#CDA922",
                    border: "1px solid #CDA922 !important",
                  }}
                >
                  Xác nhận
                </Button>
              </NextLink>
            </ButtonGroup>
          </Typography>
        </ModalConfig>
      </Typography>
    </Layout>
  );
}

export default CheckoutPage;

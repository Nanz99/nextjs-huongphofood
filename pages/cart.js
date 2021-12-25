/** @format */

import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/Layout";
import useStyles from "../utils/styles";
import NextLink from "next/link";
import { formatPrice } from "./../utils/helper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function createData(image, name, giaDonVi, soLuong, tongTien) {
  return { image, name, giaDonVi, soLuong, tongTien };
}

const rows = [
  createData(
    "/images/mon-an/mon-an-3.jpg",
    "Cá chép hấp hồng kong",
    10126000,
    2,
    20126000
  ),
  createData(
    "/images/mon-an/mon-an-3.jpg",
    "Cá chép hấp hồng kong",
    10126000,
    2,
    20126000
  ),
  createData(
    "/images/mon-an/mon-an-3.jpg",
    "Cá chép hấp hồng kong",
    10126000,
    2,
    20126000
  ),
];
function cart() {
  //   const classes = useStyles();
  return (
    <Layout title="Giỏ Hàng">
      <Typography component="div" sx={{ backgroundColor: "#fff" }}>
        <Container fixed sx={{ padding: "0 0 64px !important" }}>
          <Breadcrumb title="Giỏ hàng" />
          <Typography
            component="h1"
            sx={{
              m: "32px 0",
              fontSize: "42px",
              lineHeight: "63px",
              fontWeight: "bold",
            }}
          >
            Giỏ hàng
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow
                  sx={{
                    backgroundColor: "#FCFAF2",
                    borderBottom: "2px solid #CDA922 !important",
                  }}
                >
                  <TableCell>Sản Phẩm</TableCell>
                  <TableCell align="center">Giá đơn vị</TableCell>
                  <TableCell align="center">Số lượng</TableCell>
                  <TableCell align="center">Tổng</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Grid container spacing={2}>
                        <Grid item md={3}>
                          <Image
                            src={row.image}
                            height={57}
                            width={86}
                            layout="responsive"
                            alt=""
                          />
                        </Grid>
                        <Grid item md={9}>
                          <Typography
                            component="h3"
                            sx={{
                              fontSize: "18px",
                              lineHeight: "26px",
                              fontWeight: 500,
                            }}
                          >
                            {row.name}
                          </Typography>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        component="div"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src="/images/icons/priceS.png"
                          height={32}
                          width={32}
                          alt=""
                        />
                        <Typography component="h5" sx={{ ml: "10px" }}>
                          {" "}
                          {formatPrice(row.giaDonVi)}
                        </Typography>
                      </Typography>
                    </TableCell>
                    <TableCell align="center">{row.soLuong}</TableCell>
                    <TableCell align="center">
                      {formatPrice(row.tongTien)}
                    </TableCell>
                    <TableCell align="center">
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
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow sx={{ background: "#CDA9220F" }}>
                  <TableCell rowSpan={4} />
                  <TableCell align="center" colSpan={2}>
                    Tổng đơn:{" "}
                  </TableCell>
                  <TableCell align="center">
                    <Typography>{formatPrice(13828000)}</Typography>
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={2}
            sx={{ marginTop: "32px" }}
          >
            <NextLink href="/food-new" passHref>
              <Button startIcon={<ArrowBackIcon />} sx={{ color: "#CDA922" }}>
                Tiếp Tục Mua Hàng
              </Button>
            </NextLink>
            <NextLink href="/checkout">
              <Button
                variant="contained"
                sx={{ backgroundColor: "#CDA922", padding: "10px 146px" }}
              >
                Đặt hàng
              </Button>
            </NextLink>
          </Stack>
        </Container>
      </Typography>
    </Layout>
  );
}

export default cart;

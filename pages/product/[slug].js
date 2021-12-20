/** @format */

import React from "react";
import { useRouter } from "next/router";
import data from "../../utils/data";
import {
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  Button,
  IconButton,
  Tabs,
  Tab,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Layout from "../../components/Layout";
import Breadcrumb from "../../components/common/Breadcrumb";
import Image from "next/image";
import { formatPrice } from "./../../utils/helper";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import PropTypes from "prop-types";
import FoodAppetizer from "../../components/Food/FoodAppetizer";
import FoodBeLike from "../../components/Food/FoodBeLike";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

//Table
function createData(nguyenlieu, soluong, donvi, mota) {
  return { nguyenlieu, soluong, donvi, mota };
}

const rows = [
  createData(
    "Thịt bào ngư",
    100,
    "gr",
    "Egestas donec venenatis lacus, aliquam id semper augue"
  ),
  createData(
    "Cải xanh",
    100,
    "gr",
    "Sed est scelerisque auctor ultrices mauris eu eu"
  ),
  createData(
    "Dầu hào",
    160,
    "gr",
    "Lacus elit lectus nullam at cum magna pretium"
  ),
];

function FoodDetails() {
  const router = useRouter();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { slug } = router.query;
  const food = data.foods.find((a) => a.slug === slug);
  if (!food)
    return <Typography component="h3"> Khong co mon an nao</Typography>;
  return (
    <div>
      <Layout title={food.name}>
        <Container fixed sx={{ padding: "0 !important" }}>
          <Breadcrumb title={food.name} food />
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Image
                src={food.image}
                alt={food.name}
                height="374"
                width="564"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                component="div"
                variant="h3"
                sx={{
                  fontSize: "28px",
                  lineHeight: "42px",
                }}
              >
                {food.name}
              </Typography>
              <Typography component="p" variant="body1">
                {food.description}
              </Typography>
              <List>
                {food.prices.map((p) => (
                  <ListItem
                    key={p.id}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingBottom: "5px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <Typography
                      component="div"
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={p.sizeImg}
                        alt="anh size"
                        height="24"
                        width="24"
                      />
                      <Typography
                        component="p"
                        sx={{ ml: "15px", fontSize: "20px" }}
                      >
                        {formatPrice(p.price)}
                      </Typography>
                    </Typography>
                    <Typography
                      component="div"
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "3px",
                        borderRadius: "8px",
                        backgroundColor: "white",
                        border: "1px solid #ddd",
                      }}
                    >
                      <IconButton aria-label="minus">
                        <RemoveCircleOutlineOutlinedIcon />
                      </IconButton>
                      <Typography
                        component="span"
                        variant="h6"
                        sx={{ padding: "0 20px" }}
                      >
                        0
                      </Typography>
                      <IconButton aria-label="add">
                        <AddCircleOutlineOutlinedIcon />
                      </IconButton>
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>

          {/* Thong tin san pham */}
          <Typography
            component="div"
            sx={{
              padding: "32px",
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              mt: "64px",
              mb: "32px",
              border: "1px solid #ddd",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: "28px",
                lineHeight: "42px",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Thông tin sản phẩm
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  backgroundColor: "#FAFAFA",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Mô tả sản phẩm" {...a11yProps(0)} />
                  <Tab label="Nguyên liệu" {...a11yProps(1)} />
                  {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Typography
                  component="div"
                  sx={{
                    width: "800px",
                    margin: "0 auto",
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontSize: "16px",
                      lineHeight: "22px",
                      fontWeight: 400,
                      mb: "32px",
                    }}
                  >
                    Bào ngư Hàn Quốc là món hải sản cao cấp, ngon và bổ dưỡng,
                    chế biến không khó, nhưng phải có gia vị phù hợp đi kèm thì
                    mới dậy mùi và ngon hơn. Bào ngư sốt dầu hào là món ăn có
                    tính bổ âm, tăng khí, bổ thận, tăng cường sinh lực cho nam
                    giới và chống suy nhược cơ thể.
                  </Typography>
                  <Image src={food.image} height={530} width={800} alt="" />
                  <Typography
                    component="p"
                    sx={{
                      fontSize: "16px",
                      lineHeight: "22px",
                      fontWeight: 400,
                      mb: "32px",
                      mt: "32px",
                    }}
                  >
                    Món bào ngư sốt dầu hào với thịt bào ngư Hàn Quốc mềm mềm
                    dai giòn vị ngọt chế biến cùng sốt dầu hào đậm đà hương vị
                    kiểu Trung Hoa, hương thơm quyến rũ, vị thanh ngọt, bổ dưỡng
                    và tốt cho sức khỏe của tất cả mọi lứa tuổi.
                  </Typography>
                  <Image
                    src="/images/mon-an/lẩu.jpg"
                    height={530}
                    width={800}
                    alt="adc"
                  />
                </Typography>
              </TabPanel>
              <TabPanel value={value} index={1} sx={{ padding: '0 !important'}}>
                <TableContainer component={Paper} sx={{ padding: '0 !important'}}>
                  <Table sx={{ minWidth: 650, padding: '0 !important' }} aria-label="simple table">
                    <TableHead>
                      <TableRow sx={{ background: "#CDA9220F", fontWeight: 'bold' }}>
                        <TableCell sx={{fontWeight: 'bold'}}>Tên nguyên liệu</TableCell>
                        <TableCell sx={{fontWeight: 'bold'}}>Số lượng</TableCell>
                        <TableCell sx={{fontWeight: 'bold'}}>Đơn vị</TableCell>
                        <TableCell sx={{fontWeight: 'bold'}}>Mô tả</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.nguyenlieu}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell>{row.nguyenlieu}</TableCell>
                          <TableCell>{row.soluong}</TableCell>
                          <TableCell>{row.donvi}</TableCell>
                          <TableCell>{row.mota}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </TabPanel>
            </Box>
          </Typography>
        </Container>
        <FoodAppetizer />
        <FoodBeLike />
      </Layout>
    </div>
  );
}

export default FoodDetails;

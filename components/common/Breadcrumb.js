/** @format */

import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";

function Breadcrumb({ title, food, service,cart, color1, color2,color3 }) {
  return (
    <div role="presentation">
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        color={color1}
        sx={{
          width: 1200,
          margin: "0 auto",
          padding: "24px 0",
        }}
      >
        <Link underline="hover" color="#CDA922" href="/">
          Trang chủ
        </Link>
        {food && (
          <Link underline="hover" color={color2} href="/food-new">
            Món mới
          </Link>
        )}
        {service && (
          <Link underline="hover" color={color2} href="/service">
          	Dịch vụ tiệc
          </Link>
        )}
        {cart && (
          <Link underline="hover" color={color2} href="/service">
          	Giỏ hàng
          </Link>
        )}
        /<Typography color={color3}>{title}</Typography>
      </Breadcrumbs>
    </div>
  );
}

export default Breadcrumb;

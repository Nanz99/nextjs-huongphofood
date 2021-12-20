/** @format */

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import NextLink from "next/link";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Image from "next/image";
import { Link, List, ListItem } from "@mui/material";

const pages = ["Trang chủ", "Món ăn", "Dịch vụ tiệc", "Tin Tức", "Liên Hệ"];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 2,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    background: "#cda922",
  },
}));

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NextLink href="/">
            <a href="">
              <Image
                src="/images/logo.png"
                width={150}
                height={62}
                alt="logo header"
                className="logo"
              />
            </a>
          </NextLink>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <NextLink href="/">
                  <Typography textAlign="center">Trang Chủ</Typography>
                </NextLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NextLink href="/">
                  <Typography textAlign="center">Món ăn</Typography>
                </NextLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NextLink href="/">
                  <Typography textAlign="center">Dịch vụ Tiệc</Typography>
                </NextLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NextLink href="/news">
                  <Typography textAlign="center">Tin tức</Typography>
                </NextLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NextLink href="/">
                  <Typography textAlign="center">Liên hệ</Typography>
                </NextLink>
              </MenuItem>
            </Menu>
          </Box>

          {/* <Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
					>
						LOGOâ
					</Typography> */}
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } , alignItems: 'center', justifyContent: 'flex-end', width: '100%'}}>
            <List>
              <ListItem sx={{ display: "inline", textTransform: "uppercase" }}>
                <NextLink href="/">Trang Chủ</NextLink>
              </ListItem>
              <ListItem sx={{ display: "inline", textTransform: "uppercase" }}>
                <NextLink href="/">Món ngon</NextLink>
              </ListItem>
              <ListItem sx={{ display: "inline", textTransform: "uppercase" }}>
                <NextLink href="/service">Dịch vụ tiệc</NextLink>
              </ListItem>
              <ListItem sx={{ display: "inline", textTransform: "uppercase" }}>
                <NextLink href="/news">Tin Tức</NextLink>
              </ListItem>
              <ListItem sx={{ display: "inline", textTransform: "uppercase" }}>
                <NextLink href="/contact">Liên Hệ</NextLink>
              </ListItem>
            </List>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;

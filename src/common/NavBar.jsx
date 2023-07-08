import React from "react";
import {
  AppBar,
  Badge,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  useTheme,
} from "@mui/material";
import { ShoppingCart, Menu as MenuIcon } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* small device mene dropdown */}

          {/* menu icon */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="medium"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* menu dropdown*/}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {/* noclick go to page + close menu */}
              {/* view menu */}
              <MenuItem>
                <NavLink to={"/view-menu"} onClick={handleCloseNavMenu}>
                  <Link
                    to={"/view-menu"}
                    style={{
                      textDecoration: "none",
                      color: theme.palette.secondary.main,
                    }}
                  >
                    View Menu
                  </Link>
                </NavLink>
              </MenuItem>

              {/* order at table */}
              <MenuItem>
                <NavLink to={"/order-at-table"} onClick={handleCloseNavMenu}>
                  <Link
                    to={"/order-at-table"}
                    style={{
                      textDecoration: "none",
                      color: theme.palette.secondary.main,
                    }}
                  >
                    Order At Table
                  </Link>
                </NavLink>
              </MenuItem>

              {/* order online */}
              <MenuItem>
                <NavLink
                  to={"/order-online"}
                  onClick={handleCloseNavMenu}
                  style={({ isActive, isPending }) => {
                    return {
                      textDecoration: "none",
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? theme.palette.primary.main : "inherit",
                    };
                  }}
                >
                  <Link
                    to={"/order-online"}
                    style={{
                      textDecoration: "none",
                      // color: "#fff",
                    }}
                  >
                    Order Online
                  </Link>
                </NavLink>
              </MenuItem>
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>

          {/* large device nav links */}
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
            style={{}}
          >
            <Box
              sx={{
                my: 2,
                display: "block",
              }}
            >
              <NavLink
                to={"/view-menu"}
                onClick={handleCloseNavMenu}
                style={({ isActive, isPending }) => {
                  return {
                    margin: "0px 1.5em",
                    textDecoration: "none",
                    borderBottom: isActive ? "2px solid #FFA800" : "",
                  };
                }}
              >
                <Link
                  to={"/view-menu"}
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  View Menu
                </Link>
              </NavLink>
              <NavLink
                to={"/order-at-table"}
                onClick={handleCloseNavMenu}
                style={({ isActive, isPending }) => {
                  return {
                    margin: "0px 1.5em",
                    textDecoration: "none",
                    borderBottom: isActive ? "2px solid #FFA800" : "",
                  };
                }}
              >
                <Link
                  to={"/order-at-table"}
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  Order At Table
                </Link>
              </NavLink>
              <NavLink
                to={"/order-online"}
                // className={({ isActive, isPending }) =>
                //   isActive ? "active" : isPending ? "pending" : ""
                // }
                onClick={handleCloseNavMenu}
                style={({ isActive, isPending }) => {
                  return {
                    margin: "0px 1.5em",
                    textDecoration: "none",
                    borderBottom: isActive ? "2px solid #FFA800" : "",
                  };
                }}
              >
                <Link
                  to={"/order-online"}
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  Order Online
                </Link>
              </NavLink>
            </Box>
          </Box>

          {/* cart */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Shopping Cart">
              <Link to={"/shopping-cart"}>
                <IconButton sx={{ color: "#fff" }}>
                  <Badge badgeContent={3} color="primary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

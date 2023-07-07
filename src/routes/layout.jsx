import { Box, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../common/NavBar";

const theme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      main: "#FFA800",
    },
    secondary: {
      main: "#282626",
      dark: "#131212",
    },
  },
});
export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavBar />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}

import { Box, Typography } from "@mui/material";

export default function Index() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">
        This is a the Home Page.
        {/* <br />
      Check out{" "}
      <a href="https://reactrouter.com">the docs at reactrouter.com</a>. */}
      </Typography>
    </Box>
  );
}

import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box className="error-page">
      <Typography variant="h4">Oops!</Typography>
      <Typography variant="subtitle1">
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="subtitle2">
        {error.statusText || error.message}
      </Typography>
    </Box>
  );
}

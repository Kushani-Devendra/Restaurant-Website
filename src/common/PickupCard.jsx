import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

export default function PickupCard() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: 5,
        p: 3,
        backgroundColor: theme.palette.grey[100],
        borderRadius: 3,
      }}
    >
      <Typography variant="h6">Pickup you order at our store.</Typography>
    </Box>
  );
}

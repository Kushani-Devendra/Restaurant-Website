import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

export default function PickupCard() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: { xs: 3, md: 5 },
        p: 3,
        backgroundColor: theme.palette.grey[100],
        borderRadius: 3,
      }}
    >
      <Typography variant="h6" sx={{ fontSize: { xs: "16px", md: "20px" } }}>
        Pickup you order at our store
      </Typography>
    </Box>
  );
}

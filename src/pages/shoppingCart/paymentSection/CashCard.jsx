import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

export default function CashCard() {
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
        Pay cash on delivery
      </Typography>
    </Box>
  );
}

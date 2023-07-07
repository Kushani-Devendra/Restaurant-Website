import { LocalOffer } from "@mui/icons-material";
import {
  Box,
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

export default function DeliveryCard() {
  const theme = useTheme();

  return (
    <Stack spacing={2} sx={{ mt: 5, width: "100%" }}>
      {/* delivery time */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 3,
          backgroundColor: theme.palette.grey[100],
          borderRadius: 3,
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ color: theme.palette.error.dark }}>
            Standard Delivery
          </Typography>
          <Typography variant="subtitle1">Receive by 1 - 2 hours</Typography>
        </Box>
        <Typography variant="h6">$ 00.00</Typography>
      </Box>

      {/* promotion */}
      <Box
        sx={{
          p: 3,
          textAlign: "left",
          backgroundColor: theme.palette.grey[100],
          borderRadius: 3,
        }}
      >
        <Typography variant="h6">Hot Food Promotion</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <LocalOffer /> Use points
          </Typography>
          <FormGroup>
            <FormControlLabel
              value="yes"
              control={<Switch />}
              label="Loyalty Program Required"
              labelPlacement="start"
            />
          </FormGroup>
        </Box>
      </Box>

      {/* order summary */}
      <Box
        sx={{
          p: 3,
          textAlign: "left",
          backgroundColor: theme.palette.grey[100],
          borderRadius: 3,
        }}
      >
        <Typography variant="h6">Order Summary</Typography>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle1">Food Total</Typography>
          <Typography variant="subtitle1">$00.00</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle1">Add-ons Total</Typography>
          <Typography variant="subtitle1">$00.00</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle1">Delivery Fee</Typography>
          <Typography variant="subtitle1">$00.00</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle1">Total Payment</Typography>
          <Typography variant="subtitle1">$00.00</Typography>
        </Box>
      </Box>

      {/* total payment */}
      <Box
        sx={{
          p: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: theme.palette.grey[100],
          borderRadius: 3,
          color: theme.palette.primary.main,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 500 }}>
          Total Payment
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 500 }}>
          $ 00.00
        </Typography>
      </Box>
    </Stack>
  );
}

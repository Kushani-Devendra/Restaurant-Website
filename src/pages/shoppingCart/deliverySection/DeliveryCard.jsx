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
    <Stack spacing={2} sx={{ mt: { xs: 3, md: 5 }, width: "100%" }}>
      {/* delivery time */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          p: { xs: 1.5, md: 3 },
          backgroundColor: theme.palette.grey[100],
          borderRadius: 3,
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              color: theme.palette.error.dark,
            }}
          >
            Standard Delivery
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "14px", md: "16px" } }}
          >
            Receive by 1 - 2 hours
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ fontSize: { xs: "16px", md: "20px" } }}>
          $ 00.00
        </Typography>
      </Box>

      {/* promotion */}
      <Box
        sx={{
          p: { xs: 1.5, md: 3 },
          textAlign: "left",
          backgroundColor: theme.palette.grey[100],
          borderRadius: 3,
        }}
      >
        <Typography variant="h6" sx={{ fontSize: { xs: "16px", md: "20px" } }}>
          Hot Food Promotion
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
            <LocalOffer fontSize="small" /> Use points
          </Typography>
          <FormGroup>
            <FormControlLabel
              value="yes"
              control={<Switch />}
              label="Loyalty Program Required"
              labelPlacement="start"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: { xs: "13px", md: "16px" },
                },
              }}
            />
          </FormGroup>
        </Box>
      </Box>

      {/* order summary */}
      <Box
        sx={{
          p: { xs: 1.5, md: 3 },
          textAlign: "left",
          backgroundColor: theme.palette.grey[100],
          borderRadius: 3,
        }}
      >
        <Typography variant="h6" sx={{ fontSize: { xs: "16px", md: "20px" } }}>
          Order Summary
        </Typography>
        <Box
          sx={{
            mt: { xs: 1, md: 2 },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "14px", md: "16px" } }}
          >
            Food Total
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "14px", md: "16px" } }}
          >
            $00.00
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "14px", md: "16px" } }}
          >
            Add-ons Total
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "14px", md: "16px" } }}
          >
            $00.00
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "14px", md: "16px" } }}
          >
            Delivery Fee
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "14px", md: "16px" } }}
          >
            $00.00
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "14px", md: "16px" } }}
          >
            Total Payment
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "14px", md: "16px" } }}
          >
            $00.00
          </Typography>
        </Box>
      </Box>

      {/* total payment */}
      <Box
        sx={{
          p: { xs: 1.5, md: 3 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: theme.palette.grey[100],
          borderRadius: 3,
          color: theme.palette.primary.main,
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: { xs: "20px", md: "24px" }, fontWeight: 500 }}
        >
          Total Payment
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontSize: { xs: "20px", md: "24px" }, fontWeight: 500 }}
        >
          $ 00.00
        </Typography>
      </Box>
    </Stack>
  );
}

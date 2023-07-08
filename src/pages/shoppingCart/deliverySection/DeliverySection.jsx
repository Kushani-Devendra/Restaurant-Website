import { LocalOffer } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import DeliveryCard from "./DeliveryCard";
import PickupCard from "./PickupCard";

export default function DeliverySection({ handleShowPaymentSection }) {
  const theme = useTheme();

  const [showDelivery, setShowDelivery] = useState(true);
  const [showPickup, setShowPickup] = useState(false);

  function handleShowPickup() {
    if (showDelivery) {
      setShowDelivery(false);
    }
    setShowPickup(true);
  }

  function handleShowDelivery() {
    if (showPickup) {
      setShowPickup(false);
    }
    setShowDelivery(true);
  }

  return (
    <Box sx={{ mt: { xs: 3, md: 8 }, textAlign: "center" }}>
      <Typography variant="subtitle1">How to recieve your order?</Typography>
      <Box>
        {/* buttons */}
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button
            variant={showDelivery ? "contained" : "outlined"}
            color={showDelivery ? "primary" : "secondary"}
            onClick={handleShowDelivery}
            sx={{
              width: "100%",
              textTransform: "none",
              color: showDelivery && "#fff",
            }}
          >
            Delivery
          </Button>
          <Button
            variant={showPickup ? "contained" : "outlined"}
            color={showPickup ? "primary" : "secondary"}
            onClick={handleShowPickup}
            sx={{
              width: "100%",
              textTransform: "none",
              color: showPickup && "#fff",
            }}
          >
            Pickup
          </Button>
        </Box>

        {/* delivery card */}
        {showDelivery ? <DeliveryCard /> : <PickupCard />}
      </Box>

      {/* order button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleShowPaymentSection}
        sx={{
          mt: 3,
          width: { xs: "100%", md: "200px" },
          textTransform: "none",
          fontSize: { xs: "18px", md: "22px" },
          color: "#fff",
        }}
      >
        Order Now
      </Button>
    </Box>
  );
}

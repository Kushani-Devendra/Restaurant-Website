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
import BankCard from "./BankCard";
import CashCard from "./CashCard";

export default function PaymentSection({ showPaymentSection }) {
  const theme = useTheme();

  const [showBankCard, setshowBankCard] = useState(true);
  const [showCardCard, setshowCardCard] = useState(false);

  function handleshowCardCard() {
    if (showBankCard) {
      setshowBankCard(false);
    }
    setshowCardCard(true);
  }

  function handleshowBankCard() {
    if (showCardCard) {
      setshowCardCard(false);
    }
    setshowBankCard(true);
  }

  return (
    <Box sx={{ mt: 8, textAlign: "center" }}>
      {showPaymentSection && (
        <Button variant="contained" type="button" sx={{ mb: 8, color: "#fff" }}>
          Order Again
        </Button>
      )}

      <Typography variant="subtitle1">How to pay your order?</Typography>
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
            type="button"
            variant={showBankCard ? "contained" : "outlined"}
            color={showBankCard ? "primary" : "secondary"}
            onClick={handleshowBankCard}
            sx={{
              width: "100%",
              textTransform: "none",
              color: showBankCard && "#fff",
            }}
          >
            Card
          </Button>
          <Button
            type="button"
            variant={showCardCard ? "contained" : "outlined"}
            color={showCardCard ? "primary" : "secondary"}
            onClick={handleshowCardCard}
            sx={{
              width: "100%",
              textTransform: "none",
              color: showCardCard && "#fff",
            }}
          >
            Cash
          </Button>
        </Box>

        {/* Card card */}
        {showBankCard ? <BankCard /> : <CashCard />}
      </Box>

      {/* order button
      <Button
        variant="contained"
        color="primary"
        onClick={handleShowPaymentSection}
        sx={{
          mt: 3,
          px: 3,
          textTransform: "none",
          fontSize: "22px",
          color: "#fff",
        }}
      >
        Order Now
      </Button> */}
    </Box>
  );
}

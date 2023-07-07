import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { burgerList } from "../data/burgerData";
import CartItem from "../common/CartItem";
import DeliverySection from "../common/DeliverySection";
import PaymentSection from "../common/PaymentSection";

export default function ShoppingCart() {
  const [showDeliverySection, setShowDeliverySection] = useState(true);
  const [showPaymentSection, setShowPaymentSection] = useState(false);

  function handleShowDeliverySection() {
    if (showPaymentSection) {
      setShowPaymentSection(false);
    }
    setShowDeliverySection(true);
  }

  function handleShowPaymentSection() {
    if (showDeliverySection) {
      setShowDeliverySection(false);
    }
    setShowPaymentSection(true);
  }

  return (
    <Box
      sx={{
        px: { xs: "25px", md: "100px", lg: "200px" },
        py: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={2}>
        {burgerList.map(
          (burger) =>
            burger.quantity > 0 && (
              <Grid item key={burger.id} sx={{ width: "100%" }}>
                <CartItem
                  // burgerData={...burgerList}
                  image={burger.image}
                  name={burger.name}
                  price={burger.price}
                  addons={burger.addons}
                  quantity={burger.quantity}
                />
              </Grid>
            )
        )}
      </Grid>

      {showDeliverySection ? (
        <DeliverySection handleShowPaymentSection={handleShowPaymentSection} />
      ) : (
        <PaymentSection showPaymentSection={showPaymentSection} />
      )}
      {/*  delivery option */}
    </Box>
  );
}

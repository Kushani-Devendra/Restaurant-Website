import { Container } from "@mui/material";
import React from "react";
import CartItem from "../components/CartItem";

export default function ShoppingCart() {
  return (
    <Container sx={{ py: 5, display: "flex", justifyContent: "center" }}>
      <CartItem />
    </Container>
  );
}

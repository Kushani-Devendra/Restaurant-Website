import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { burgerList } from "../data/burgerData";
import CartItem from "../common/CartItem";
import DeliveryMethod from "../common/DeliveryMethod";

export default function ShoppingCart() {
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

      {/*  delivery option */}
      <DeliveryMethod />
    </Box>
  );
}

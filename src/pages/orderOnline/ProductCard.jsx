import { Favorite } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import burger1 from "../../assets/images/burger_1.jpg";
import ProductCardDialog from "./ProductCardDialog";

export default function ProductCard({ image, name, price, popular }) {
  const theme = useTheme();
  //   favourite button
  const [isFavourite, setIsFavourite] = React.useState(true);
  const [isFavouriteColor, setIsFavouriteColor] = React.useState("#fff");
  const handleIsFavourite = () => {
    if (isFavourite) {
      setIsFavouriteColor("#DE3636");
    } else {
      setIsFavouriteColor("#fff");
    }
    setIsFavourite(!isFavourite);

    console.log(isFavourite);
  };

  //   dialog box
  const [open, setOpen] = React.useState(false);
  const handleOpenDialog = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          position: "relative",
          // maxWidth: 345,
          borderRadius: 2,
          height: { xs: "250px", md: "360px" },
        }}
      >
        <CardActionArea onClick={handleOpenDialog}>
          <CardMedia
            component="img"
            alt={name}
            image={burger1}
            sx={{ height: { xs: "180px", md: "290px" } }}
          />
          <CardContent
            sx={{
              height: { xs: "70px", md: "70px" },
              display: { xs: "block", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: theme.palette.secondary.main,
              color: "#fff",
              textAlign: { xs: "left", md: "none" },
            }}
          >
            <Typography sx={{ fontSize: { xs: "12px", md: "16px" } }}>
              {name}
            </Typography>
            <Typography>$ {price}</Typography>
          </CardContent>
        </CardActionArea>
        {/* wishlist button */}
        <IconButton
          id="favBtn"
          onClick={handleIsFavourite}
          sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
            color: isFavouriteColor,
          }}
        >
          <Favorite />
        </IconButton>

        {/* popular badge */}
        <Box
          sx={{
            position: "absolute",
            top: "25px",
            right: "-25px",
            width: "8em",
            height: "1em",
            display: !popular ? "none" : "",
            borderBottom: "22px solid #C52B2B",
            // borderLeft: "25px solid transparent",
            // borderRight: "25px solid transparent",
            transform: "rotate(45deg)",
            color: "#fff",
          }}
        >
          <Typography fontSize="small">Popular</Typography>
        </Box>
      </Card>

      {/* popup dialog */}
      <ProductCardDialog open={open} handleCloseDialog={handleCloseDialog} />
    </>
  );
}

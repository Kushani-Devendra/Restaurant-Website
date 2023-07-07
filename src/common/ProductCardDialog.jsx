import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  List,
  ListItem,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { Close, ShoppingCart } from "@mui/icons-material";
import burger2 from "../assets/images/burger_2.jpg";
import SelectAddons from "./SelectAddons";
import SelectQuantity from "./SelectQuantity";

// dialog box
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(4),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(4),
  },
  "& .MuiDialog-paper": {
    maxWidth: "1200px",
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 3 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ProductCardDialog({ open, handleCloseDialog, props }) {
  const theme = useTheme();

  return (
    <BootstrapDialog
      onClose={handleCloseDialog}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle onClose={handleCloseDialog}></BootstrapDialogTitle>
      <DialogContent>
        <Grid container spacing={3} sx={{ flexDirection: "row" }}>
          {/* image */}
          <Grid item xs={12} md={3}>
            <CardMedia
              component="img"
              src={burger2}
              sx={{
                width: "100%",
                height: { xs: "270px", md: "290px" },
                borderRadius: 2,
              }}
            />
          </Grid>

          {/* description */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "24px", md: "28px" }, fontWeight: 500 }}
            >
              Cheese Burger
            </Typography>
            <Typography sx={{ mt: 1, display: { xs: "block", md: "none" } }}>
              Price/{" "}
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  color: theme.palette.primary.main,
                }}
              >
                $20.42
              </span>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mt: { xs: 1, md: 3 },
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              deleniti dolores dicta veritatis aliquam! A iure atque cum et quod
              porro error laudantium omnis ipsa dolores, facere, blanditiis
              tempore!
            </Typography>

            {/* ingedients */}
            <List sx={{ mt: { xs: 0, md: 1 } }}>
              <ListItem
                sx={{
                  pl: 0,
                  pb: { xs: 0, md: 1 },
                  fontSize: { xs: "14px", md: "16px" },
                }}
              >
                Chicken
              </ListItem>
              <ListItem
                sx={{
                  pl: 0,
                  pb: { xs: 0, md: 1 },
                  fontSize: { xs: "14px", md: "16px" },
                }}
              >
                Cheese
              </ListItem>
              <ListItem
                sx={{
                  pl: 0,
                  pb: { xs: 0, md: 1 },
                  fontSize: { xs: "14px", md: "16px" },
                }}
              >
                Tomato
              </ListItem>
              <ListItem
                sx={{
                  pl: 0,
                  pb: { xs: 0, md: 1 },
                  fontSize: { xs: "14px", md: "16px" },
                }}
              >
                Mayonase
              </ListItem>
            </List>

            {/* addons */}
            <Typography
              sx={{
                mt: { xs: 1, md: 1 },
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
              Addons
            </Typography>
            <SelectAddons />

            {/* quantity */}
            <Typography
              sx={{
                mt: { xs: 1, md: 2 },
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
              Quantity
            </Typography>
            <SelectQuantity />
          </Grid>

          {/* price */}
          <Grid item md={2} sx={{ display: { xs: "none", md: "block" } }}>
            <Typography>
              Price/{" "}
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  color: theme.palette.primary.main,
                }}
              >
                $20.42
              </span>
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          type="submit"
          variant="contained"
          endIcon={<ShoppingCart />}
          autoFocus
          onClick={handleCloseDialog}
          sx={{
            width: { xs: "100%", md: "400px" },
            textTransform: "none",
            color: "#fff",
          }}
        >
          Add to cart
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}

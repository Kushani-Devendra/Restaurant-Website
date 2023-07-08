import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import burger1 from "../../assets/images/burger_1.jpg";

import { Close } from "@mui/icons-material";
import { NumberFormatBase } from "react-number-format";
import { addonList } from "../../data/addonList";
import { useTheme } from "@emotion/react";

// multiple select
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const addons = addonList;

function getStyles(addons, addonName, theme) {
  return {
    fontWeight:
      addonName.indexOf(addons) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

// quantity
function NumericFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormatBase
      {...other}
      getInputRef={inputRef}
      allowNegative={false}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isNumericString
    />
  );
}

export default function CartItem({ image, name, price, addons, quantity }) {
  const theme = useTheme();
  const [addonName, setAddonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setAddonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <Card
      sx={{
        position: "relative",
        p: 1,
        height: { xs: "100px", md: "130px" },
        border: "1px solid #d9d9d9",
      }}
    >
      <Grid container direction="row" spacing={2} sx={{ alignItems: "center" }}>
        {/* image */}
        <Grid item xs={3} sm={2} md={1.5}>
          <CardMedia
            component="img"
            image={burger1}
            alt={name}
            sx={{
              // width: { xs: "100px", md: "120px" },
              height: { xs: "80px", sm: "82px", md: "113px" },
            }}
          />
        </Grid>

        {/* title + price */}
        <Grid item xs={2.5} md={3}>
          {/* name */}
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "13px", md: "18px" }, fontWeight: 400 }}
          >
            {name}
          </Typography>

          {/* price */}
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "13px", md: "16px", fontWeight: 300 } }}
          >
            ${price}
          </Typography>
        </Grid>

        {/* addons */}
        <Grid item xs={3.5} md={3.5}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
                fontSize: "16px",
              }}
            >
              Addons
            </Typography>
            <FormControl sx={{ width: "150px", ml: { xs: 0, md: 2 } }}>
              <Select
                id="demo-multiple-name"
                multiple
                displayEmpty
                value={addonName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>Select addons</em>;
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
                size="small"
                sx={{ fontSize: { xs: "14px", md: "16px" } }}
              >
                <MenuItem
                  disabled
                  value=""
                  sx={{ fontSize: { xs: "14px", md: "16px" } }}
                >
                  <em>Select addons</em>
                </MenuItem>
                {addons.map((addon) => (
                  <MenuItem
                    key={addon}
                    value={addon}
                    style={getStyles(addon, addonName, theme)}
                    sx={{ fontSize: { xs: "14px", md: "16px" } }}
                  >
                    {addon}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>

        {/* quantity */}
        <Grid item xs={2.5} md={3.5}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                display: { xs: "none", md: "block" },
                fontSize: "16px",
              }}
            >
              Quantity
            </Typography>
            <TextField
              //   label="react-number-format"
              value={quantity}
              //   onChange={handleChange}
              name="numberformat"
              id="formatted-numberformat-input"
              InputProps={{
                inputComponent: NumericFormatCustom,
              }}
              size="small"
              sx={{
                mt: -1.4,
                ml: { xs: 0, md: 2 },
                width: "150px",
                height: "30px",
                fontSize: "14px",
              }}
            />
          </Box>
        </Grid>
      </Grid>

      <IconButton sx={{ position: "absolute", top: 0, right: 0 }}>
        <Close fontSize="small" />
      </IconButton>
    </Card>
  );
}

import React from "react";
import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  useTheme,
} from "@mui/material";
import { burgerList } from "../data/burgerData";
import { addonList } from "../data/addonList";

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

export default function SelectAddons() {
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
    <FormControl sx={{ m: 1, width: 256 }}>
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
        sx={{ ml: -1, fontSize: { xs: "14px", md: "16px" } }}
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
  );
}

import React from "react";
import { TextField } from "@mui/material";
import { NumberFormatBase } from "react-number-format";

// quantity
function QuantityFormat(props) {
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

export default function SelectQuantity({ quantity }) {
  return (
    <TextField
      //   label="react-number-format"
      value={quantity}
      //   onChange={handleChange}
      name="quantityFormat"
      id="quantity"
      InputProps={{
        inputComponent: QuantityFormat,
      }}
      size="small"
      sx={{
        width: 256,
        mt: 1,
        height: { xs: "20px" },
        fontSize: { xs: "10px" },
      }}
    />
  );
}

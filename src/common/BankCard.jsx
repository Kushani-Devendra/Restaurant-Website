import { CreditCard, Label, LocalOffer } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  Switch,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { NumberFormatBase } from "react-number-format";
import { Form } from "react-router-dom";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";

// card no
function CardNumberFormat(props) {
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
      minLength={16}
      maxLength={16}
      pattern="[0-9]{4} [0-9]{4} [0-9]{4}"
    />
  );
}

// cvv no
function CCVFormat(props) {
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
      minLength={3}
      maxLength={3}
    />
  );
}

export default function BankCard() {
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={2}
      sx={{
        mt: 5,
        // display: "flex",
        alignItems: "start",
        textAlign: "start",
      }}
    >
      {/* order details */}
      <Grid item xs={12} md={6}>
        <Stack spacing={2}>
          {/* promotion */}
          <Box
            sx={{
              p: 3,
              textAlign: "left",
              backgroundColor: theme.palette.grey[100],
              borderRadius: 3,
            }}
          >
            <Typography variant="h6">Hot Food Promotion</Typography>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <LocalOffer /> Use points
              </Typography>
              <FormGroup>
                <FormControlLabel
                  value="yes"
                  control={<Switch />}
                  label="Loyalty Program Required"
                  labelPlacement="start"
                />
              </FormGroup>
            </Box>
          </Box>

          {/* order summary */}
          <Box
            sx={{
              p: 3,
              textAlign: "left",
              backgroundColor: theme.palette.grey[100],
              borderRadius: 3,
            }}
          >
            <Typography variant="h6">Order Summary</Typography>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="subtitle1">Food Total</Typography>
              <Typography variant="subtitle1">$00.00</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="subtitle1">Add-ons Total</Typography>
              <Typography variant="subtitle1">$00.00</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="subtitle1">Delivery Fee</Typography>
              <Typography variant="subtitle1">$00.00</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="subtitle1">Total Payment</Typography>
              <Typography variant="subtitle1">$00.00</Typography>
            </Box>
          </Box>

          {/* total payment */}
          <Box
            sx={{
              p: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: theme.palette.grey[100],
              borderRadius: 3,
              color: theme.palette.primary.main,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 500 }}>
              Total Payment
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 500 }}>
              $ 00.00
            </Typography>
          </Box>
        </Stack>
      </Grid>

      {/* card details */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            p: 3,
            // textAlign: "left",
            backgroundColor: theme.palette.grey[100],
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{ mt: 2, display: "flex", alignItems: "center", gap: 1 }}
          >
            <CreditCard /> Payment
          </Typography>
          <Divider sx={{ mt: 1 }} />

          {/* form */}
          <Form
            method="post"
            // onSubmit={}
            style={{ marginTop: "25px" }}
          >
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Card Number</Typography>
                <TextField
                  name="cardFormat"
                  id="cardInput"
                  placeholder="xxxx xxxx xxxx xxxx"
                  InputProps={{
                    inputComponent: CardNumberFormat,
                  }}
                  size="small"
                  fullWidth
                  sx={{
                    mt: 1,
                    mb: { xs: 0, md: 1 },
                    fontSize: "14px",
                  }}
                />
              </Grid>
              <Grid item xs={6} sx>
                <Typography variant="subtitle1">Card Number</Typography>
                {/* date picker */}
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  // style={{ width: "100px" }}
                >
                  <DemoContainer
                    components={["DateField"]}
                    sx={{
                      width: "100%",
                      overflow: "hidden",
                      "& .MuiInputBase-input": { py: 1 },
                      "& .MuiTextField-root": {
                        minWidth: "100% !important",
                      },
                    }}
                  >
                    <DateField
                      defaultValue={dayjs("04/17")}
                      format="MM/YY"
                      // fullWidth
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="subtitle1">CCV</Typography>
                <TextField
                  name="ccvFormat"
                  id="ccvInput"
                  placeholder="123"
                  InputProps={{
                    inputComponent: CCVFormat,
                  }}
                  size="small"
                  fullWidth
                  sx={{
                    mt: 1,
                    fontSize: "14px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox sx={{ color: theme.palette.grey[500] }} />
                    }
                    label="Save card details"
                    sx={{ color: theme.palette.grey[500] }}
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 2,
                    width: "100%",
                    textTransform: "none",
                    color: "#fff",
                  }}
                >
                  Pay $00.00
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    mt: 1,
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "22px",
                    color: theme.palette.grey[500],
                  }}
                >
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </Typography>
              </Grid>
            </Grid>
          </Form>
        </Box>
      </Grid>
    </Grid>
  );
}

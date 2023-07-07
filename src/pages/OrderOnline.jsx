import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import {
  BakeryDining,
  Favorite,
  Icecream,
  LocalDrink,
  LunchDining,
  Spa,
  Star,
  TakeoutDining,
  WineBar,
} from "@mui/icons-material";
import {
  Form,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import burger1 from "./burger_1.jpg";
import burger2 from "../assets/images/burger_2.jpg";
import burger3 from "../assets/images/burger_3.jpg";
import burger4 from "../assets/images/burger_4.jpg";
import burger5 from "../assets/images/burger_5.jpg";
import burger6 from "../assets/images/burger_6.jpg";
import burger7 from "../assets/images/burger_7.jpg";
import burger8 from "../assets/images/burger_8.jpg";
import burger9 from "../assets/images/burger_9.jpg";
import burger10 from "../assets/images/burger_10.jpg";
import ProductCard from "../common/ProductCard";
import { burgerList } from "../data/burgerData";

function LinkTab(props) {
  return (
    <Tab
      sx={{
        height: "90px",
        color: "#fff",
        fontWeight: 400,
        textTransform: "none",
        "&.Mui-selected": { backgroundColor: "#FFA800", color: "#fff" },
      }}
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: { xs: "1em 1em", md: "2em 3em" } }}>{children}</Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function allyProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// search bar
// export async function loader({ request }) {
//   const url = new URL(request.url);
//   const q = url.searchParams.get("q");
// const contacts = await getContacts(q);
//   return { q };
// }

export default function OrderOnline() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // search bar
  // const { q } = useLoaderData();
  // const navigation = useNavigation();
  // const submit = useSubmit();

  // const searching =
  //   navigation.location &&
  //   new URLSearchParams(navigation.location.search).has("q");

  // useEffect(() => {
  //   document.getElementById("q").value = q;
  // }, [q]);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {/* tabs */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: theme.palette.secondary.dark,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          variant="scrollable"
          scrollButtons={false}
          // centered
          indicatorColor="none"
          sx={{
            height: "90px",
            backgroundColor: theme.palette.secondary.dark,
          }}
        >
          <LinkTab
            icon={<Star />}
            label="Favourite"
            href="/"
            {...allyProps(0)}
          />
          <LinkTab
            icon={<LunchDining />}
            label="Burgurs"
            href="/"
            {...allyProps(1)}
          />
          <LinkTab
            icon={<BakeryDining />}
            label="Sandwitches"
            href="/"
            {...allyProps(2)}
          />
          <LinkTab icon={<Spa />} label="Salads" href="/" {...allyProps(3)} />
          <LinkTab icon={<WineBar />} label="Wine" href="/" {...allyProps(4)} />
          <LinkTab
            icon={<LocalDrink />}
            label="Drinks"
            href="/"
            {...allyProps(5)}
          />
          <LinkTab
            icon={<Icecream />}
            label="Desserts"
            href="/"
            {...allyProps(6)}
          />
          <LinkTab
            icon={<TakeoutDining />}
            label="Fast Food"
            href="/"
            {...allyProps(7)}
          />
        </Tabs>
      </Box>

      {/* tab panels */}
      <Box>
        <TabPanel value={value} index={0}>
          No content available
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* burgur panel */}
          <Box textAlign="center">
            <Form
              id="search-form"
              role="search"
              style={{ display: "flex", justifyContent: "center", gap: 10 }}
            >
              <TextField
                id="q"
                size="small"
                // className={searching ? "loading" : ""}
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                // defaultValue={q}
                // onChange={(event) => {
                //   const isFirstSearch = q == null;
                //   submit(event.currentTarget.form, {
                //     replace: !isFirstSearch,
                //   });
                // }}
              />
              {/* <div id="search-spinner" aria-hidden hidden={!searching} />
              <div className="sr-only" aria-live="polite"></div> */}
              <Button
                type="button"
                variant="contained"
                size="small"
                sx={{
                  px: 3,
                  textTransform: "none",
                  fontWeight: 400,
                  color: "#fff",
                }}
              >
                Search
              </Button>
            </Form>

            {/* burger list */}
            <Box
              sx={{
                display: "flex",
                mt: { xs: 2, md: 5 },
                justifyContent: "center",
              }}
            >
              <Grid
                container
                spacing={2}
                // sx={{ gap: { xs: "10%", md: "10%" } }}
              >
                {burgerList.map((burger) => (
                  <Grid item key={burger.id} xs={6} sm={4} md={4} lg={3}>
                    {/* card */}
                    <ProductCard
                      image={burger.image}
                      name={burger.name}
                      price={burger.price}
                      popular={burger.popular}
                      favourite={burger.favourite}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          No content available
        </TabPanel>
        <TabPanel value={value} index={3}>
          No content available
        </TabPanel>
        <TabPanel value={value} index={4}>
          No content available
        </TabPanel>
        <TabPanel value={value} index={5}>
          No content available
        </TabPanel>
        <TabPanel value={value} index={6}>
          No content available
        </TabPanel>
        <TabPanel value={value} index={7}>
          No content available
        </TabPanel>
      </Box>
    </Box>
  );
}

import React, { useEffect, useState } from "react";
import styles from "./formSelection.module.css";
import { Calendar } from "./Calendar";
import { Link } from "react-router-dom";
import { Checkbox } from "antd";
import RoomSelect from "./RoomSelect";
import { createTheme, Grid, Paper, Tab, Tabs, ThemeProvider } from "@mui/material";
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import SearchIcon from '@mui/icons-material/Search';
import FlightIcon from '@mui/icons-material/Flight';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { makeStyles } from '@mui/styles';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

const theme = createTheme({
  palette: {
    primary: {
      main: "#5392F9",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "65%",
    margin: "auto",
    backgroundColor: "#fff",
    transform: "translateY(-260px)",
    borderRadius: 9,
    boxShadow: "0 4px 10px #bbb",
    zIndex: 10,
    position: "relative",
    top: "16px",
    padding: "0 0px",
  },
  tab: {
    margin: "8px 0",
    fontSize: "14px",
    textShadow: "0.5px 0 1px #777",
  },
  margin: {
    width: "100%",
    margin: "10px 0",
    backgroundColor: "#fff",
    outline: "none",
  },
  input: {
    border: "none",
  },
  form: {
    width: "83%",
    height: window.innerWidth > 970 ? "300px" : "360px",
    margin: "auto",
    backgroundColor: "#F8F7F9",
    transform: "translateY(-260px)",
    borderRadius: 9,
    padding: "40px 50px",
  },
}));

export const FormSelection = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  // const [search, setSearch] = useState("");
  const [cities, setCities] = useState([]);
  const [focus, setFocus] = useState(false);
  const [debounce, setDebounce] = useState(false);

  // const { searchedCity, setSearchedCity } = useContext(AppContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  useEffect(() => {
    // axios.get("https://agoda-api.herokuapp.com/city").then(({ data }) => {
    //   setCities(data);
    // });
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundColor: focus ? "rgba(0,0,0,0.7)" : "transparent",
          display: focus ? "block" : "none",
        }}
        className={styles.main_container}
      ></div>
      <img
        className={styles.background_image}
        src="https://cdn6.agoda.net/images/MVC/default/background_image/illustrations/bg-agoda-homepage.png"
        alt=""
      />
      <ThemeProvider theme={theme}>
        <Paper theme={theme} square className={classes.root}>
          <div className={styles.newTag}>New!</div>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon label tabs example"
          >
            <Tab
              className={classes.tab}
              icon={<HomeWorkIcon />}
              label="Hotels & Homes"
            />
            <Tab
              className={classes.tab}
              icon={<ApartmentIcon />}
              label="Private Stays"
            />
            <Tab
              className={classes.tab}
              icon={<FlightTakeoffIcon />}
              label="Flight + Hotel"
            />
            <Tab
              className={classes.tab}
              icon={<FlightIcon />}
              label="Flights"
            />
            <Tab
              className={classes.tab}
              icon={<EventAvailableIcon />}
              label="Monthly Stays"
            />
          </Tabs>
        </Paper>
      </ThemeProvider>
      <Paper
        style={{
          backgroundColor: focus ? "#666" : "#F8F7F9",
          boxShadow: focus ? "none" : "0 4px 10px #888, 0 -4px 10px #888",
        }}
        square
        className={classes.form}
      >
        <Grid container>
          <Grid
            className={styles.formFirstLine}
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            <SearchIcon className={styles.searchIcon} />
            <input
              onFocus={() => {
                setFocus(true);
                setDebounce(true);
              }}
              onBlur={() => {
                setFocus(false);
                // setDebounce(false);
              }}
              type="search"
              // value={search}
              placeholder="Enter a destination"
            />
          </Grid>

          {/* debounce result */}

          <Paper
            style={{ display: debounce ? "block" : "none" }}
            className={styles.debounceRes}
          >
            <div className={styles.debounceTooltip}></div>
          </Paper>

          {/* debounce result end */}

          <Grid
            style={{ paddingBottom: window.innerWidth > 800 ? "0" : "10px" }}
            className={styles.formSecLine}
            container
            item
          >
            <Grid
              className={styles.calendar}
              item
              lg={7}
              md={7}
              sm={12}
              xs={12}
            >
              <Calendar setFocus={setFocus} />
            </Grid>
            <Grid
              className={styles.roomSelect}
              item
              lg={5}
              md={5}
              sm={12}
              xs={12}
            >
              <RoomSelect setFocus={setFocus} />
            </Grid>
          </Grid>

          <Grid
            style={{ width: "98%" }}
            className={styles.formThirdLine}
            container
            item
          >
            <Grid
              className={styles.checkbox_flightHotel}
              item
              lg={7}
              md={7}
              sm={12}
              xs={12}
            >
              <Checkbox>Save up to 25% on hotels</Checkbox>
              <div className={styles.checkboxTag}>Flight + Hotel</div>
            </Grid>
          </Grid>

          <Link
            className={styles.searchBtnLink}
            style={{ color: "#fff" }}
            to="/hotel"
          >
            <button className={styles.searchBtn}>SEARCH</button>
          </Link>
        </Grid>
      </Paper>
    </div>
  );
};

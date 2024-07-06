import React, { useEffect, useState } from "react";
import styles from "./formSelection.module.css";
import { Calendar } from "./Calendar";
import { Link } from "react-router-dom";
import { Checkbox } from "antd";
import RoomSelect from "./RoomSelect";
import {
  createTheme,
  Grid,
  Paper,
  Tab,
  Tabs,
  ThemeProvider,
} from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SearchIcon from "@mui/icons-material/Search";
import FlightIcon from "@mui/icons-material/Flight";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import TitlebarImageList from "./ImageDestination";
import TitlebarImageListForeign from "./ImageForeign";

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
const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};

const PopupBody = styled("div")(
  ({ theme }) => `
  width: 1000px;
  padding: 12px 16px;
  margin: 8px;
  border-radius: 8px;
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  box-shadow: ${
    theme.palette.mode === "dark"
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`
  };
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  z-index: 1;
`
);
export const FormSelection = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  // const [search, setSearch] = useState("");
  const [focus, setFocus] = useState(false);
  const [debounce, setDebounce] = useState(false);

  // const { searchedCity, setSearchedCity } = useContext(AppContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchor, setAnchor] = useState(null);

  const showPopup = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? "simple-popup" : undefined;

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
              style={{ margin: "auto" }}
              icon={<HomeWorkIcon />}
              label="Nhà & Căn hộ"
              value={1}
              onClick={(e) => {
                setValue(e.target.value);
              }}
            />
            <Tab
              className={classes.tab}
              style={{ margin: "auto" }}
              icon={<ApartmentIcon />}
              label="Khách sạn"
              value={2}
              onClick={(e) => {
                setValue(e.target.value);
              }}
            />
            <Tab
              className={classes.tab}
              style={{ margin: "auto" }}
              icon={<FlightTakeoffIcon />}
              label="Máy bay + K.sạn"
              value={3}
              onClick={(e) => {
                setValue(e.target.value);
              }}
            />
            <Tab
              className={classes.tab}
              style={{ margin: "auto" }}
              icon={<FlightIcon />}
              label="Chuyến bay"
              value={4}
              onClick={(e) => {
                setValue(e.target.value);
              }}
            />
            <Tab
              className={classes.tab}
              style={{ margin: "auto" }}
              icon={<EventAvailableIcon />}
              label="Hoạt động"
              value={5}
              onClick={(e) => {
                setValue(e.target.value);
              }}
            />
          </Tabs>
        </Paper>
      </ThemeProvider>
      <Paper
        style={{
          backgroundColor: focus ? "#666" : "#F8F7F9",
          boxShadow: focus ? "none" : "0 4px 10px #888, 0 -4px 10px #888",
          opacity: "0.9",
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
                setDebounce(false);
                setAnchor(null);
              }}
              onClick={showPopup}
              type="search"
              // value={search}
              placeholder="Nhập địa điểm du lịch hoặc tên khách sạn"
            />
          </Grid>

          <BasePopup id={id} open={open} anchor={anchor}>
            <Grid container>
              <PopupBody>
                <div className="row">
                  <div className="col-4">
                    Tìm kiếm gần đây
                    <div style={{ background: "#0072E5" }}>
                      Đà Lạt, Việt Nam
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <TitlebarImageList />
                  </div>
                  <div className="col-4">
                    <TitlebarImageListForeign />
                  </div>
                </div>
              </PopupBody>
            </Grid>
          </BasePopup>
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
              <Checkbox>Khuyến mãi lên đến 25% cho khách sạn</Checkbox>
              <div className={styles.checkboxTag}>Máy bay + K.sạn</div>
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

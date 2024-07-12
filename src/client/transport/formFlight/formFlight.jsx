import React, { useState } from "react";
import styles from "./formFlight.module.css";
import { styled } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import { Grid } from "@mui/material";
import {
  AddCircle,
  AddSharp,
  FlightLand,
  FlightTakeoff,
  RemoveSharp,
} from "@mui/icons-material";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import CloseIcon from "@mui/icons-material/Close";
import DateCalendarServerRequest from "./datePicker/datePicker";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const airports = [
  {
    name: "Sân bay tân sơn nhất",
    code: "SGN",
    location: "TP HCM, Việt Nam",
    state: "TP HCM",
  },
  {
    name: "Sân bay Nội Bài",
    code: "HAN",
    location: "Hà Nội, Việt Nam",
    state: "Hà Nội",
  },
  {
    name: "Sân bay Đà Nẵng",
    code: "DAD",
    location: "Đà Nẵng, Việt Nam",
    state: "Đà Nẵng",
  },
  {
    name: "Sân bay Cam Ranh",
    code: "CXR",
    location: "Khánh Hòa, Việt Nam",
    state: "Khánh Hòa",
  },
  {
    name: "Sân bay Phú Quốc",
    code: "PQC",
    location: "Phú Quốc, Việt Nam",
    state: "Phú Quốc",
  },
  // Add more airports as needed
];

const Counter = styled("div")`
  display: flex;
  align-items: center;
`;

const Count = styled("div")`
  margin: 0 10px;
`;
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
const PopupBodyAirport = styled("div")(
  ({ theme }) => `
    position: relative;
    width: 600px;
    padding: 12px 16px;
    margin: 20px 0px 0px 50px;
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    box-shadow: ${
      theme.palette.mode === "dark"
        ? `0px 4px 8px rgba(0, 0, 0, 0.7)`
        : `0px 4px 8px rgba(0, 0, 0, 0.1)`
    };
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    z-index: 1;
  
    &::before {
      position: absolute;
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent #fff transparent; /* Adjust border color */
    }
  `
);

const PopupBodyPerson = styled("div")(
  ({ theme }) => `
    position: relative;
    width: 300px;
    padding: 12px 16px 10px 16px;
    margin:10px 15px 10px -200px;
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    box-shadow: ${
      theme.palette.mode === "dark"
        ? `0px 4px 8px rgba(0, 0, 0, 0.7)`
        : `0px 4px 8px rgba(0, 0, 0, 0.1)`
    };
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    z-index: 1;
  
    &::before {
      position: absolute;
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent #fff transparent; /* Adjust border color */
    }
  `
);
const PopupBodyType = styled("div")(
  ({ theme }) => `
    position: relative;
    width: 250px;
    padding: 12px 16px 10px 16px;
    margin:10px 15px 10px -170px;
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    box-shadow: ${
      theme.palette.mode === "dark"
        ? `0px 4px 8px rgba(0, 0, 0, 0.7)`
        : `0px 4px 8px rgba(0, 0, 0, 0.1)`
    };
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    z-index: 1;
  
    &::before {
      position: absolute;
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent #fff transparent; /* Adjust border color */
    }
  `
);

const PopupBodyCalender = styled("div")(
  ({ theme }) => `
    position: relative;
    width: 340px;
    padding: 12px 16px 10px 16px;
    margin:10px 15px 10px 20px;
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};\
    opacity: 0.8;
    box-shadow: ${
      theme.palette.mode === "dark"
        ? `0px 4px 8px rgba(0, 0, 0, 0.7)`
        : `0px 4px 8px rgba(0, 0, 0, 0.1)`
    };
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    z-index: 1;
  
    &::before {
      position: absolute;
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent #fff transparent; /* Adjust border color */
    }
  `
);
const CountContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;
export function FormFlight() {
  const [isRotated, setIsRotated] = useState(false);
  const [anchorAirport, setAnchorAirport] = useState(null);
  const [anchorPerson, setAnchorPerson] = useState(false);
  const [anchorType, setAnchorType] = useState(false);
  const [anchorCalendar, setAnchorCalendar] = useState(false);
  const [popupType, setPopupType] = useState(null);
  const [isRotateType, setIsRotateType] = useState(false);
  const [isRotatePerson, setIsRotatePerson] = useState(false);
  const [peopleCount1, setPeopleCount1] = useState(1);
  const [peopleCount2, setPeopleCount2] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dateOfDeparture, setDateOfDeparture] = useState(
    dayjs().format("DD MMM YYYY")
  );
  const [isChecked, setIsChecked] = useState(false);
  const showPopup = (event, type) => {
    setAnchorAirport(anchorAirport ? null : event.currentTarget);
    setPopupType(type);
  };
  const handleClickItem = (index) => {
    setSelectedItem(index);
  };
  const openAirport = Boolean(anchorAirport);
  const openPerson = Boolean(anchorPerson);
  const openType = Boolean(anchorType);
  const openCalendar = Boolean(anchorCalendar);
  const id = openAirport ? "simple-popup" : undefined;
  const handleClick = () => {
    setIsRotated(!isRotated);
    swapDestination();
  };
  const handlePersonClick = (e) => {
    setIsRotatePerson(!isRotatePerson);
    setAnchorPerson(anchorPerson ? null : e.currentTarget);
  };
  const handleTypeClick = (e) => {
    setIsRotateType(!isRotateType);
    setAnchorType(anchorType ? null : e.currentTarget);
  };
  const handleCalenderClick = (e) => {
    setAnchorCalendar(anchorCalendar ? null : e.currentTarget);
  };
  const [noiDen, setNoiDen] = useState(airports[1]);
  const [noiDi, setNoiDi] = useState(airports[0]);
  const swapDestination = () => {
    setNoiDen(noiDi);
    setNoiDi(noiDen);
  };
  const handleAirportClick = (airport) => {
    if (popupType === "departure") {
      setNoiDi(airport);
    } else {
      setNoiDen(airport);
    }
    setAnchorAirport(null);
  };
  const decreasePeople1 = () => {
    if (peopleCount1 > 1) {
      setPeopleCount1(peopleCount1 - 1);
    }
  };
  const increasePeople1 = () => {
    setPeopleCount1(peopleCount1 + 1);
  };
  const decreasePeople2 = () => {
    if (peopleCount2 > 0) {
      setPeopleCount2(peopleCount2 - 1);
    }
  };
  const increasePeople2 = () => {
    setPeopleCount2(peopleCount2 + 1);
  };
  const handleDateOfDepartureChange = (newDate) => {
    setDateOfDeparture(newDate);
  };
  return (
    <>
      <div className="mt-8 px-5 flex items-center justify-between w-full">
        <div>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full mr-4">
            Một chiều / Khứ hồi
          </button>
        </div>
        <div className="flex">
          <div className="relative ml-4">
            <button className="bg-white/20 flex items-center text-white font-bold text-sm px-4 pl-3 rounded-lg border border-white text-left min-w-72 mr-2">
              <svg
                className="mr-1.5"
                width={17}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-id="IcSymbolGuestPassenger"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 13.5C12.3137 13.5 15 16.1863 15 19.5V21H3V19.5C3 16.1863 5.68629 13.5 9 13.5ZM9 10.5C11.0711 10.5 12.75 8.82107 12.75 6.75C12.75 4.67893 11.0711 3 9 3C6.92893 3 5.25 4.67893 5.25 6.75C5.25 8.82107 6.92893 10.5 9 10.5Z"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M15 3H15.75C17.8211 3 19.5 4.67893 19.5 6.75C19.5 8.82107 17.8211 10.5 15.75 10.5M16.5 13.5C18.9853 13.5 21 15.5147 21 18V21H19.5"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="custom-select">
                <select
                  id="countries"
                  className="bg-transparent text-gray-900 text-sm rounded-lg focus:ring-blue-500/0 focus:border-blue-400/0 focus:border-blue-500/0 block w-full py-1.5 pr-2.5 dark:placeholder-gray-400/0 dark:text-white"
                >
                  <option selected="">
                    {peopleCount1} Người lớn, {peopleCount2} Trẻ em
                  </option>
                </select>
                <BasePopup id={id} open={openPerson} anchor={anchorPerson}>
                  <Grid container>
                    <PopupBodyPerson>
                      <span className="fw-bolder">Số hành khách</span>
                      <CloseIcon
                        style={{ float: "right", cursor: "pointer" }}
                        onClick={handlePersonClick}
                      />
                      <CountContainer>
                        <br />
                        <AccessibilityIcon className="text-primary" />
                        <span className={styles.spanText}>Người lớn</span>
                        <RemoveSharp
                          className={styles.btnEvent}
                          onClick={decreasePeople1}
                        />
                        <Counter>
                          <Count style={{ fontWeight: "900" }}>
                            {peopleCount1}
                          </Count>
                        </Counter>
                        <AddSharp
                          className={styles.btnEvent}
                          onClick={increasePeople1}
                        />
                      </CountContainer>
                      <CountContainer>
                        <br />
                        <AccessibilityIcon className="text-primary" />
                        <span className={styles.spanText}>Trẻ em</span>
                        <RemoveSharp
                          className={styles.btnEvent}
                          onClick={decreasePeople2}
                        />
                        <Counter>
                          <Count style={{ fontWeight: "900" }}>
                            {peopleCount2}
                          </Count>
                        </Counter>
                        <AddSharp
                          className={styles.btnEvent}
                          onClick={increasePeople2}
                        />
                      </CountContainer>
                    </PopupBodyPerson>
                  </Grid>
                </BasePopup>
              </div>
              <span
                id="darkArrowDown"
                className="ml-auto"
                onClick={handlePersonClick}
              >
                <img
                  importance="low"
                  loading="lazy"
                  id="logoArrowDown"
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/3de2bccd750fe7e9a102505064b03a37.svg"
                  decoding="async"
                  width={19}
                  height={18}
                  style={{
                    objectFit: "fill",
                    objectPosition: "50% 50%",
                    marginLeft: "0.2em",
                  }}
                  className={`r-13hce6t  ${styles.rotateIcon} ${
                    isRotatePerson ? styles.rotated : ""
                  }`}
                />
              </span>
            </button>
          </div>
          <button className="bg-white/20 flex items-center text-white font-bold text-sm px-4 pl-3 rounded-lg border border-white text-left min-w-64">
            <svg
              className="mr-2"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-id="IcTransportSeatClass"
            >
              <path
                d="M6.99997 21H17M4.10496 3H4.76788C6.0927 3 7.26067 3.869 7.64136 5.13796L9.78617 12.2873C9.91307 12.7103 10.3024 13 10.744 13H16.4059C18.0152 13 19.7434 13.8444 20.5714 15.2244C21.3043 16.4459 20.4244 18 18.9999 18H7.21493C5.67368 18 4.38318 16.8321 4.22982 15.2985L3.10992 4.0995C3.05105 3.51082 3.51333 3 4.10496 3Z"
                stroke="#FFFFFF"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 10H17"
                stroke="#FFFFFF"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="custom-select">
              <select
                id="countries"
                className="bg-transparent text-gray-900 text-sm rounded-lg focus:ring-blue-500/0 focus:border-blue-400/0 focus:border-blue-500/0 block w-full py-1.5 pr-2.5 dark:placeholder-gray-400/0 dark:text-white"
              >
                <option selected="">Phổ thông</option>
                {/* <option value="US">Phổ thông đặc biệt</option>
                <option value="CA">Thương gia</option>
                <option value="FR">Hạng nhất</option> */}
              </select>
            </div>
            <BasePopup id={id} open={openType} anchor={anchorType}>
              <Grid container>
                <PopupBodyType>
                  <div className={styles.customSelect}>
                    {[
                      "Phổ thông",
                      "Phổ thông đặc biệt",
                      "Thương gia",
                      "Hạng nhất",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`${styles.item} ${
                          selectedItem === index ? styles.selected : ""
                        }`}
                        onClick={() => handleClickItem(index)}
                      >
                        <span className={styles.dot}></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </PopupBodyType>
              </Grid>
            </BasePopup>
            <span
              id="darkArrowDown"
              className="ml-auto"
              onClick={handleTypeClick}
            >
              <img
                importance="low"
                loading="lazy"
                id="logoArrowDown"
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/3de2bccd750fe7e9a102505064b03a37.svg"
                decoding="async"
                width={19}
                height={18}
                style={{
                  objectFit: "fill",
                  objectPosition: "50% 50%",
                  marginLeft: "0.2em",
                }}
                className={`r-13hce6t  ${styles.rotateIcon} ${
                  isRotateType ? styles.rotated : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      <div className="mt-8 px-7 flex items-center w-full">
        <div>
          <div className="flex mb-3">
            <h3 className="w-72 text-light">Từ</h3>
            <h3 className="text-light">Đến</h3>
          </div>
          <div className="border-2 border-gray-400 rounded-2xl mr-4 text-black flex">
            <span
              className="flex bg-white border-2 border-gray-400 rounded-l-2xl px-4 py-3.5 w-72 -mr-1.5"
              onClick={(e) => showPopup(e, "departure")}
            >
              {" "}
              <svg
                className="mr-2"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-id="IcFlightTakeOff"
              >
                <path
                  d="M3 21H21"
                  stroke="#0194f3"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 9L15.1924 7.93585C17.317 7.22767 19.6563 7.95843 21 9.75L7.44513 14.0629C5.86627 14.5653 4.1791 13.6926 3.67674 12.1137C3.66772 12.0854 3.65912 12.0569 3.65094 12.0283L3 9.75L5.25 10.875L9 9.75L4.5 3H5.25L12 9Z"
                  stroke="#0194f3"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <input
                className=""
                type="text"
                defaultValue={`${noiDi.state} (${noiDi.code})`}
                value={`${noiDi.state} (${noiDi.code})`}
                placeholder="Điểm đi"
                onClick={showPopup}
              />
            </span>
            <span
              className="bg-transparent flex items-center"
              onClick={handleClick}
            >
              <span
                className={`bg-white rounded-full p-1.5 border-2 -ml-5 absolute ${
                  styles.rotateIcon
                } ${isRotated ? styles.rotated : ""}`}
              >
                <img
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/331a92149a02dc615986206c588d6642.svg"
                  width={24}
                  height={24}
                />
              </span>
            </span>
            <span
              className="flex bg-white border-2 border-gray-400 rounded-r-2xl pl-6 py-3 w-72"
              onClick={(e) => showPopup(e, "destination")}
            >
              {" "}
              <svg
                className="mr-2"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-id="IcFlightLanding"
              >
                <path
                  d="M3 21H21"
                  stroke="#0194f3"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 15L7.1263 13.8439C4.79398 13.6495 3 11.6998 3 9.3594V7.5L4.5 10.5H9L7.5 3H8.1L12 10.5L17.3419 11.5684C18.7036 11.8407 19.8632 12.7265 20.4843 13.9685L21 15ZM16.5 17.625L16.875 17.25L17.25 17.625L16.875 18L16.5 17.625Z"
                  stroke="#0194f3"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <input
                type="text"
                defaultValue={`${noiDen.state} (${noiDen.code})`}
                value={`${noiDen.state} (${noiDen.code})`}
                placeholder="Điểm đến"
                onClick={showPopup}
              />
            </span>
          </div>
        </div>
        <BasePopup id={id} open={openAirport} anchor={anchorAirport}>
          <Grid container>
            <PopupBodyAirport>
              {airports.map((airport, index) => (
                <div
                  key={index}
                  className={styles.selected}
                  onClick={() => handleAirportClick(airport)}
                >
                  <div>
                    <FlightTakeoff />
                    <span className={styles.flightSpan}>{airport.name}</span>
                    <span>{airport.code}</span>
                  </div>
                  <div>
                    <span style={{ marginLeft: "40px" }}>
                      {airport.location}
                    </span>
                  </div>
                </div>
              ))}
            </PopupBodyAirport>
          </Grid>
        </BasePopup>
        <div className="pl-2 flex items-center w-full">
          <div>
            <div className="flex mb-3">
              <h3 className="w-72 mr-7 text-light">Ngày đi</h3>
              <h3 className="flex items-center text-light">
                <Checkbox
                  {...label}
                  className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent bg-white before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-blue-500 checked:bg-blue-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-blue-500"
                  onClick={() => setIsChecked(!isChecked)}
                />
                Khứ hồi{" "}
              </h3>
            </div>
            <div className="flex">
              <div className="flex items-center border-2 border-gray-400 rounded-2xl mr-4 text-black">
                <div className="relative py-1.5 w-72 bg-white border border-gray-300 rounded-l-2xl">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-id="IcSystemCalendar"
                    >
                      <path
                        d="M7 2V5M17 2V5M3 8H21M11.5 11.5H12.5V12.5H11.5V11.5ZM11.5 16.5H12.5V17.5H11.5V16.5ZM16.5 11.5H17.5V12.5H16.5V11.5ZM6.5 16.5H7.5V17.5H6.5V16.5ZM5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21Z"
                        stroke="#0194f3"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.5 11.5V12.5H6.5V11.5H7.5Z"
                        stroke="#0194F3"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    name="start"
                    type="text"
                    className="bg-white text-gray-900 text-sm rounded-l-2xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 placeholder-black"
                    placeholder={`${dateOfDeparture}`}
                    onClick={handleCalenderClick}
                  />
                </div>
                <div className="relative py-1.5 w-72 bg-white border border-gray-300 rounded-r-2xl">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-id="IcSystemCalendar"
                    >
                      <path
                        d="M7 2V5M17 2V5M3 8H21M11.5 11.5H12.5V12.5H11.5V11.5ZM11.5 16.5H12.5V17.5H11.5V16.5ZM16.5 11.5H17.5V12.5H16.5V11.5ZM6.5 16.5H7.5V17.5H6.5V16.5ZM5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21Z"
                        stroke={isChecked ? "#0194f3" : "#687176"}
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.5 11.5V12.5H6.5V11.5H7.5Z"
                        stroke={isChecked ? "#0194f3" : "#687176"}
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    name="end"
                    type="text"
                    className="bg-white text-gray-900 text-sm rounded-r-2xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 placeholder-black"
                    placeholder="31 Mar 2024"
                  />
                </div>
              </div>
              <Link
                to={"item"}
                className="bg-orange-500 border-4 border-gray-400/80 hover:bg-orange-700 text-white font-semibold py-3 px-3.5 rounded-2xl"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-id="IcSystemSearch"
                >
                  <path
                    d="M15 15L20.5 20.5M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                    stroke="#FFFFFF"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <BasePopup id={id} open={openCalendar} anchor={anchorCalendar}>
              <Grid container>
                <PopupBodyCalender>
                  <DateCalendarServerRequest
                    setDateOfDeparture={handleDateOfDepartureChange}
                  />
                </PopupBodyCalender>
              </Grid>
            </BasePopup>
          </div>
        </div>
      </div>
    </>
  );
}

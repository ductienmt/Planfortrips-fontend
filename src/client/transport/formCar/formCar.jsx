import React, { useState } from "react";
import styles from "./formCar.module.css";
import { styled } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import { Grid } from "@mui/material";
import {
  AddCircle,
  AddSharp,
  AirportShuttle,
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
const address = [
  {
    name: "Hà Nội",
    description:
      "Thủ đô của Việt Nam với nhiều di tích lịch sử và văn hóa, như Hồ Gươm, Lăng Chủ tịch Hồ Chí Minh, Văn Miếu - Quốc Tử Giám.",
  },
  {
    name: "Hạ Long",
    description:
      "Nổi tiếng với Vịnh Hạ Long, một trong bảy kỳ quan thiên nhiên mới của thế giới, với hàng nghìn hòn đảo đá vôi.",
  },
  {
    name: "Đà Nẵng",
    description:
      "Thành phố biển với nhiều điểm du lịch hấp dẫn như Bà Nà Hills, Ngũ Hành Sơn, Cầu Rồng, và bãi biển Mỹ Khê.",
  },
  {
    name: "Hội An",
    description:
      "Phố cổ Hội An là di sản văn hóa thế giới với kiến trúc cổ kính, đèn lồng rực rỡ, và ẩm thực đặc sắc.",
  },
  {
    name: "Huế",
    description:
      "Cố đô Huế nổi tiếng với các di sản văn hóa và lịch sử như Đại Nội, lăng tẩm các vua Nguyễn, chùa Thiên Mụ.",
  },
  {
    name: "Nha Trang",
    description:
      "Thành phố biển với các bãi biển đẹp, hòn đảo, và Vinpearl Land, cùng các hoạt động lặn biển, tắm bùn.",
  },
  {
    name: "Đà Lạt",
    description:
      "Thành phố ngàn hoa với khí hậu mát mẻ quanh năm, rừng thông, hồ Xuân Hương, thung lũng Tình Yêu.",
  },
  {
    name: "Phú Quốc",
    description:
      "Đảo ngọc với bãi biển trong xanh, cát trắng, rừng nguyên sinh, và nhiều khu nghỉ dưỡng cao cấp.",
  },
  {
    name: "Cần Thơ",
    description:
      "Thành phố trung tâm của đồng bằng sông Cửu Long với chợ nổi Cái Răng, bến Ninh Kiều, và các vườn cây trái.",
  },
  {
    name: "Sapa",
    description:
      "Thị trấn miền núi với cảnh quan hùng vĩ, ruộng bậc thang, và văn hóa đặc sắc của các dân tộc thiểu số.",
  },
];

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
export function FormCar() {
  const [isRotated, setIsRotated] = useState(false);
  const [anchorAirport, setAnchorAirport] = useState(null);
  const [anchorCalendar, setAnchorCalendar] = useState(false);
  const [popupType, setPopupType] = useState(null);
  const [dateOfDeparture, setDateOfDeparture] = useState(
    dayjs().format("DD MMM YYYY")
  );
  const [isChecked, setIsChecked] = useState(false);
  const showPopup = (event, type) => {
    setAnchorAirport(anchorAirport ? null : event.currentTarget);
    setPopupType(type);
  };
 
  const openAirport = Boolean(anchorAirport);
  const openCalendar = Boolean(anchorCalendar);
  const id = openAirport ? "simple-popup" : undefined;
  const handleClick = () => {
    setIsRotated(!isRotated);
    swapDestination();
  };
 
  const handleCalenderClick = (e) => {
    setAnchorCalendar(anchorCalendar ? null : e.currentTarget);
  };
  const [noiDen, setNoiDen] = useState(address[1]);
  const [noiDi, setNoiDi] = useState(address[0]);
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
  const handleDateOfDepartureChange = (newDate) => {
    setDateOfDeparture(newDate);
  };
  return (
    <>
      <div className="mt-8 px-7 flex items-center w-full" >
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
              <AirportShuttle className="text-primary" />
              <input
                className=""
                type="text"
                defaultValue={`${noiDi.name}`}
                value={`${noiDi.name}`}
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
              <AirportShuttle className="text-primary" />
              <input
                type="text"
                defaultValue={`${noiDen.name}`}
                value={`${noiDen.name}`}
                placeholder="Điểm đến"
                onClick={showPopup}
              />
            </span>
          </div>
        </div>
        <BasePopup id={id} open={openAirport} anchor={anchorAirport}>
          <Grid container>
            <PopupBodyAirport>
              {address.map((add, index) => (
                <div
                  key={index}
                  className={styles.selected}
                  onClick={() => handleAirportClick(add)}
                >
                  <div>
                    <span className={styles.flightSpan}>{add.name}</span>
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
                to={"car"}
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

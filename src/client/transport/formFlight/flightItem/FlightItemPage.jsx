/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from "./flightItemPage.module.css";
import Dashboardleft from "./Dashboardleft";
import { Box, Tab, Tabs } from "@mui/material";
import { FlightItem } from "./FlightItem";
import { BorderLeft, CalendarViewMonth } from "@mui/icons-material";

const generateDateRange = (startDate, endDate) => {
  const dates = [];
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    dates.push({
      date: new Date(currentDate),
      amount: (1000).toFixed(3), // Số tiền ngẫu nhiên từ 100 đến 1100
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
};
const flights = [
  [
    {
      airline: "VietJet Air",
      logo: "http://static.tripcdn.com/packages/flight/airline-logo/latest/airline_logo/3x/vj.webp",
      departure: {
        airport: "SGN - Tan Son Nhat",
        country: "Vietnam",
        time: "08:30",
      },
      arrival: {
        airport: "HAN - Noi Bai",
        country: "Vietnam",
        time: "11:30",
      },
      date: "2024-07-14",
      duration: "3h 00m",
      location:"TP HCM - Hà Nội"
    },
    {
      airline: "VietJet Air",
      logo: "http://static.tripcdn.com/packages/flight/airline-logo/latest/airline_logo/3x/vj.webp",
      departure: {
        airport: "HAN - Noi Bai",
        country: "Vietnam",
        time: "11:45",
      },
      arrival: {
        airport: "SGN - Tan Son Nhat",
        country: "Vietnam",
        time: "14:45",
      },
      date: "2024-07-14",
      duration: "3h 00m",
      location:"TP HCM - Hà Nội",
    },
  ],
  [
    {
      airline: "Vietnam Airlines",
      logo: "http://static.tripcdn.com/packages/flight/airline-logo/latest/airline_logo/3x/vn.webp",
      departure: {
        airport: "SGN - Tan Son Nhat",
        country: "Vietnam",
        time: "09:00",
      },
      arrival: {
        airport: "HAN - Noi Bai",
        country: "Vietnam",
        time: "12:00",
      },
      date: "2024-07-15",
      duration: "3h 00m",
      location:"TP HCM - Hà Nội"

    },
    {
      airline: "Vietnam Airlines",
      logo: "http://static.tripcdn.com/packages/flight/airline-logo/latest/airline_logo/3x/vn.webp",
      departure: {
        airport: "HAN - Noi Bai",
        country: "Vietnam",
        time: "15:00",
      },
      arrival: {
        airport: "SGN - Tan Son Nhat",
        country: "Vietnam",
        time: "18:00",
      },
      date: "2024-07-15",
      duration: "3h 00m",
      location:"TP HCM - Hà Nội"
    },
  ],
];

const FlightItemPage = () => {
  const [loading, setLoading] = useState(false);
  const handlechangecheck = () => {};
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const startDate = new Date(2024, 6, 15); // Lưu ý: Tháng 7 là tháng 6 (0-based index)
  const endDate = new Date(2024, 7, 15); // Lưu ý: Tháng 8 là tháng 7 (0-based index)
  const dateRange = generateDateRange(startDate, endDate);
  useEffect(() => {
    window.scrollTo(0, 0); // to scroll to the top of the page when the component mounts up.  // eslint-disable-next-line react-hooks/exhaustive-deps
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div style={{ marginTop: "110px" }}>
        <Box
          sx={{ maxWidth: { xs: 320, sm: 900 }, bgcolor: "#dfe4e8" }}
          className={styles.box}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {dateRange.map((item, index) => (
              <Tab
                key={index}
                label={
                  <div>
                    <div style={{ fontWeight: "bolder", color: "#000" }}>
                      {`${item.date.getDate()}/${item.date.getMonth() + 1}`}
                    </div>
                    <div style={{ fontSize: "0.8em", color: "#000" }}>
                      {`${item.amount}VND`}
                    </div>
                  </div>
                }
              />
            ))}
          </Tabs>
          <Box
            style={{
              width: "500px",
              borderLeft: "3px solid #fff",
              fontWeight: "bolder",
              color: "#000",
            }}
          >
            <div className="m-auto container w-75 fw-900">
              <CalendarViewMonth />
            </div>
            <div>Bảng giá vé rẻ</div>
          </Box>
        </Box>
        <Box className={styles.root}>
          <Box className={styles.root1}>
            <Dashboardleft handlechangecheck={handlechangecheck} />
          </Box>

          <div className={styles.hotelpaper}>
            <Box className={styles.root3}>
              {flights.map((flight, index) => (
                <FlightItem key={index} flight={flight} />
              ))}
            </Box>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default FlightItemPage;

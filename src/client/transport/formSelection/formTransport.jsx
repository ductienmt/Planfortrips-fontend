import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import { FormFlight } from "../formFlight/formFlight";
import { FormCar } from "../formCar/formCar";
import "./formTransport.css"; // Import the custom CSS file

export default function FormTransport() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        paddingTop: { xs: "60px", md: "120px" }, // Responsive paddingTop
        paddingBottom: { xs: "200px", md: "400px" }, // Responsive paddingBottom
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="transport tabs"
            centered
            sx={{ display: { xs: 'block', sm: 'flex' }, justifyContent: { sm: 'center' } }} // Responsive TabList
          >
            <Tab
              label="Đặt vé máy bay"
              value="1"
              icon={<FlightIcon className="icon-center" style={{ color: "#46a2da" }} />}
              className="custom-tab navBtn"
            />
            <Tab
              label="Đặt vé xe"
              value="2"
              icon={<DirectionsBusIcon className="icon-center" style={{ color: "rgb(32, 191, 85)" }} />}
              className="custom-tab navBtn"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <FormFlight />
        </TabPanel>
        <TabPanel value="2">
          <FormCar />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

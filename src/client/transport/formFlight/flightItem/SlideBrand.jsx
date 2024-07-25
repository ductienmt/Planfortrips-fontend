import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import { CategoryFlight } from "./CategoryFlight";

export function SlideBrand() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        maxWidth: { xs: 320, sm: 1000 },
        bgcolor: "#eeebeb",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label={<CategoryFlight />} />
        <Tab label={<CategoryFlight />} />
        <Tab label={<CategoryFlight />} />
        <Tab label={<CategoryFlight />} />
        <Tab label={<CategoryFlight />} />
        <Tab label={<CategoryFlight />} />
      </Tabs>
    </Box>
  );
}

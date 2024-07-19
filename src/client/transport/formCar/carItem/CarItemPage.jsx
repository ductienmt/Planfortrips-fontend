/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from "./carItemPage.module.css";
import Dashboardleft from "./Dashboardleft";
import { Box } from "@mui/material";
import { FlightItem } from "./CarItem";
const FlightItemPage = () => {
  const [loading, setLoading] = useState(false);
  const handlechangecheck = () => {};
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      setLoading(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
        <div style={{marginTop:'110px'}}>
          <Box className={styles.root}>
            <Box className={styles.root1}>
              <Dashboardleft handlechangecheck={handlechangecheck} />
            </Box>

            <div className={styles.hotelpaper}>
              <Box className={styles.root3}>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>

              </Box>
            </div>
          </Box>
        </div>
    </>
  );
};

export default FlightItemPage;

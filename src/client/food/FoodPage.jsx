/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from "./foodpage.module.css";
import Dashboardleft from "./Dashboardleft";
import { Box } from "@mui/material";
import { FoodItem } from "./FoodItem";
import {Loading} from "../../components/Loading/Loading"
const FoodPage = () => {
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
      {loading ? (
        <div style={{marginTop:'110px'}}>
          <Box className={styles.root}>
            <Box className={styles.root1}>
              <Dashboardleft handlechangecheck={handlechangecheck} />
            </Box>

            <div className={styles.hotelpaper}>
              <Box className={styles.root3}>
                <FoodItem/>
                <FoodItem/>
                <FoodItem/>
                <FoodItem/>
                <FoodItem/>
                <FoodItem/>
              </Box>
            </div>
          </Box>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default FoodPage;

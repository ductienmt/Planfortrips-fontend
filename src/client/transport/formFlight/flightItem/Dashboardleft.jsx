import React, { useState } from "react";
import styles from "./dashboardleft.module.css";
import {
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
// import Paper from "@material-ui/core/Paper";
function valuetext(value) {
  return `${value}d`;
}
const Dashboardleft = () => {
  const [value, setValue] = useState([0, 24]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const formatTime = (value) => {
    const hours = Math.floor(value);
    const minutes = Math.round((value - hours) * 60);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}`;
  };
  const [, setChecked] = React.useState(true);

  const handleChangecheck = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      {/* <Paper> */}
      <div className={styles.checkdiv}>
        <div className={styles.hov}>
          <p className={styles.checkdivtext}>Các hãng hàng không</p>
          <div className={styles.airlineRow}>
            <Checkbox
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <img
              src="http://static.tripcdn.com/packages/flight/airline-logo/latest/airline_logo/3x/vj.webp"
              className={styles.detailsIcon}
            />
            <span className={styles.detailsTextPrimary}>VietJet Air</span>
          </div>
          <div className={styles.airlineRow}>
            <Checkbox
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <img
              src="http://static.tripcdn.com/packages/flight/airline-logo/latest/airline_logo/3x/vn.webp"
              className={styles.detailsIcon}
            />
            <span className={styles.detailsTextPrimary}>Vietnam Airlines</span>
          </div>
        </div>
      </div>

      {/* </Paper> */}
      {/* <Paper> */}

      <div className={styles.checkdiv}>
        <div className={styles.hov}>
          <p className={styles.checkdivtext}>Thời gian</p>
          <span
            style={{
              fontSize: "14px",
              float: "left",
              padding: "10px 16px",
              background: "#f0f0f0",
              borderRadius: "8px",
            }}
          >
            {formatTime(value[0])}
          </span>
          <span
            style={{
              fontSize: "14px",
              float: "right",
              padding: "10px 6px",
              background: "#f0f0f0",
              borderRadius: "8px",
            }}
          >
            {formatTime(value[1])}
          </span>
        </div>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={formatTime}
          min={0}
          max={24}
          step={0.5}
        />
      </div>
      {/* </Paper> */}
      <div className={styles.checkdiv}>
        <div className={styles.hov}>
          <p className={styles.checkdivtext}>Hạng dịch vụ</p>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="phoThong"
              control={<Radio />}
              label="Phổ thông"
            />
            <FormControlLabel
              value="phoThongDb"
              control={<Radio />}
              label="Phổ thông đặc biệt"
            />
            <FormControlLabel
              value="thuongGia"
              control={<Radio />}
              label="Thương gia"
            />
             <FormControlLabel
              value="hangNhat"
              control={<Radio />}
              label="Hạng nhất"
            />
          </RadioGroup>
        </div>
      </div>

      {/* </Paper> */}
    </>
  );
};

export default Dashboardleft;

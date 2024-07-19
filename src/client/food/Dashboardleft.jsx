import React from "react";
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
const minDistance = 10;
function valuetext(value) {
  return `${value}VND`;
}
const Dashboardleft = () => {
  const [value1, setValue1] = React.useState([0, 1000000]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  const [, setChecked] = React.useState(true);

  const handleChangecheck = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      {/* <Paper> */}

      <div className={styles.checkdiv}>
        <div className={styles.mapdivhead}>
          <div className={styles.mapnarrow}>
            <img
              height="40px"
              src="https://cdn6.agoda.net/images/MAPS-1213/default/img-map-pin-red.svg"
              alt=""
            />
          </div>
          <div>
            <img
              height=""
              src="https://cdn6.agoda.net/images/MAPS-1213/default/bkg-map-entry.svg"
              alt=""
            />
          </div>

          <div className={styles.mapnarrowtext}>
            <p>Tìm kiếm trên bản đồ</p>
          </div>
        </div>
      </div>
      <div className={styles.checkdiv}>
        <div className={styles.hov}>
          <p className={styles.checkdivtext}>Sắp xếp</p>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="bestSeller"
              control={<Radio />}
              label="Được ưa chuộng nhất"
            />
            <FormControlLabel
              value="priceLow"
              control={<Radio />}
              label="Giá thấp nhất trước"
            />
            <FormControlLabel
              value="topRate"
              control={<Radio />}
              label="Xếp hạng cao nhất"
            />
          </RadioGroup>
        </div>
      </div>
      {/* </Paper> */}
      {/* <Paper> */}

      <div className={styles.checkdiv}>
        <div className={styles.hov}>
          <p className={styles.checkdivtext}>Giá</p>
          <span
            style={{fontSize:'14px',
              float: "left",
              padding: "10px 16px",
              background: "#f0f0f0",
              borderRadius: "8px",
            }}
          >
            {value1[0].toLocaleString()}VND
          </span>
          <span
            style={{fontSize:'14px',
              float: "right",
              padding: "10px 6px",
              background: "#f0f0f0",
              borderRadius: "8px",
            }}
          >
            {value1[1].toLocaleString()}VND
          </span>

          <Slider
            getAriaLabel={() => "Minimum distance"}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
            min={0}
            max={100000000}
            // marks={[
            //   { value: 0, label: "0 VND" },
            //   { value: 100000000, label: "100,000,000 VND" },
            // ]}
          />
        </div>
      </div>
      {/* </Paper> */}

      {/* <Paper> */}
      <div className={styles.checkdiv}>
        <div className={styles.hov}>
          <p className={styles.checkdivtext}>Đánh giá sao</p>

          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <StarRateIcon className="text-warning" />
            <StarRateIcon className="text-warning" />
            <StarRateIcon className="text-warning" />
            <StarRateIcon className="text-warning" />
            <StarRateIcon className="text-warning" />
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <StarRateIcon className="text-warning" />
            <StarRateIcon className="text-warning" />
            <StarRateIcon className="text-warning" />
            <StarRateIcon className="text-warning" />
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <StarRateIcon className="text-warning" />
            <StarRateIcon className="text-warning" />
            <StarRateIcon className="text-warning" />
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <StarRateIcon className="text-warning" />
            <StarRateIcon className="text-warning" />
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <StarRateIcon className="text-warning" />
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <span style={{ fontSize: "15px" }}>Không có đánh giá</span>
          </span>
        </div>
      </div>

      {/* </Paper> */}
    </>
  );
};

export default Dashboardleft;

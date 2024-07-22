import React, { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import { styled } from "@mui/system";
import {
  AddCircleOutlineOutlined,
  RemoveCircleOutline,
} from "@mui/icons-material";
import styles from "./roomSelect.module.css";

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

const PopupBody = styled("div")(
  ({ theme }) => `
  position: relative;
  width: 300px;
  padding: 12px 16px;
  margin-top: 30px;
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
    content: "";
    position: absolute;
    top: -19px; /* Adjust as needed */
    left: 10px; /* Adjust as needed */
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

const Counter = styled("div")`
  display: flex;
  align-items: center;
`;

const Count = styled("div")`
  margin: 0 10px;
`;

export default function InputPrice({ setFocus }) {
  const [anchor, setAnchor] = useState(null);
  const [rooms, setRooms] = useState(1);
  const [people, setPeople] = useState(1);

  const showPopup = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? "simple-popup" : undefined;

  const increaseRooms = () => {
    setRooms((prevRooms) => prevRooms + 1);
  };

  const decreaseRooms = () => {
    if (rooms > 1) {
      setRooms((prevRooms) => prevRooms - 1);
    }
  };

  const increasePeople = () => {
    setPeople((prevPeople) => prevPeople + 1);
  };

  const decreasePeople = () => {
    if (people > 1) {
      setPeople((prevPeople) => prevPeople - 1);
    }
  };

  return (
    <>
      <Grid
        className={styles.formFirstLine}
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        style={{ marginBottom: 5 }}
      >
        <AttachMoneyIcon className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Nhập ngân sách"
          min={1000}
          max={100000000}
        />
      </Grid>
      <BasePopup id={id} open={open} anchor={anchor}>
        <Grid container>
          <PopupBody>
            <CountContainer>
              <span>Phòng</span>
              <IconButton size="small" onClick={decreaseRooms}>
                <RemoveCircleOutline />
              </IconButton>
              <Counter>
                <Count style={{ fontWeight: "900" }}>{rooms}</Count>
              </Counter>
              <IconButton size="small" onClick={increaseRooms}>
                <AddCircleOutlineOutlined />
              </IconButton>
            </CountContainer>
            <CountContainer>
              <span style={{ marginRight: "3px" }}>Người </span>
              <IconButton size="small" onClick={decreasePeople}>
                <RemoveCircleOutline />
              </IconButton>
              <Counter>
                <Count style={{ fontWeight: "900" }}>{people}</Count>
              </Counter>
              <IconButton size="small" onClick={increasePeople}>
                <AddCircleOutlineOutlined />
              </IconButton>
            </CountContainer>
          </PopupBody>
        </Grid>
      </BasePopup>
    </>
  );
}

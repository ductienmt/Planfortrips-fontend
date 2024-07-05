import React, { useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import styles from "./detailFood.module.css";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { CalendarIcon } from "@mui/x-date-pickers";
const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 80,
  height: 120,
  padding: theme.spacing(1),
  ...theme.typography.body2,
  textAlign: "center",
  border: "2px solid #000",
  borderRadius: "5px",
  color: "#000",
  cursor: "pointer",
  "&:hover": {
    color: "#fff",
    borderColor: "#46a2da",
    backgroundColor: "#b8e2f4",
  },
}));
const PopupBody = styled('div')(
  ({ theme }) => `
  width: max-content;
  padding: 12px 16px;
  margin: 8px;
  border-radius: 8px;
  box-shadow: ${
    theme.palette.mode === 'dark'
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`
  };
  font-weight: 500;
  font-size: 0.875rem;
  z-index: 1;
`,
);
export function DetailFood() {
  const [anchor, setAnchor] = React.useState(null);

  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? 'simple-popup' : undefined;
  const showImage = (src) => {
    const fullscreenImage = document.getElementById("fullscreen-image");
    const fullscreenImageSrc = document.getElementById("fullscreen-image-src");

    fullscreenImageSrc.src = src;
    fullscreenImage.classList.add(styles.show);
  };

  const closeFullscreenImage = () => {
    const fullscreenImage = document.getElementById("fullscreen-image");
    fullscreenImage.classList.remove(styles.show);
  };

  return (
    <main className={styles.detail} style={{ marginTop: "50px" }}>
      <div className={styles.container}>
        <div className={styles.detailContent}>
          <div className={styles.detailImg}>
            <div className={styles.detailImgContent}>
              <div className={styles.detailImga}>
                <img
                  className={styles.detailImgBig}
                  src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/90/21/26.jpg"
                  alt=""
                />
              </div>
              <br />
              <ul className={styles.detailImgList}>
                {[
                  "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/90/21/26.jpg?s=800x",
                  "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/11/d5/bf/3c.jpg?s=800x",
                  "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/11/d0/e3/97.jpg?s=800x",
                  "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/11/d0/ff/1b.jpg?s=800x",
                  "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/12/e3/96/90.jpg?s=800x",
                  "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/13/17/a5/b2.jpg?s=800x",
                ].map((img, index) => (
                  <li key={index}>
                    <img
                      src={`${img}`}
                      alt=""
                      onClick={() => showImage(`${img}`)}
                    />
                  </li>
                ))}
              </ul>
              <div id="fullscreen-image" className={styles.fullscreenImage}>
                <img
                  id="fullscreen-image-src"
                  className={styles.fullscreenImageSrc}
                  src=""
                  alt=""
                />
                <span
                  className={styles.closeButton}
                  onClick={closeFullscreenImage}
                >
                  ×
                </span>
                <div className={styles.navigationButtons}>
                  <button
                    className={styles.navigationButton}
                    id="prev-button"
                    onClick={() => console.log("Show previous image")}
                  >
                    &lt;
                  </button>
                  <button
                    className={styles.navigationButton}
                    id="next-button"
                    onClick={() => console.log("Show next image")}
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.detailText}>
            <h2>Top Notch Street Food Motorbike Tour In Ho Chi Minh City</h2>
            <div className={styles.detailVote}>
              <StarRateIcon className="text-warning" />
              <span>5.0</span>
              <span>(50 đánh giá)</span>
            </div>
            <div className={styles.detailPrice}>
              <span>80.000 đ</span>
              <span>100.000 đ</span>
              <span className={styles.priceSale}>-50%</span>
            </div>
            <ul className={styles.detailBtn}>
              <li>
                <button>
                  <i className="fa-solid fa-cart-shopping" />
                  <span>Thêm vào giỏ hàng</span>
                </button>
              </li>
              <li>
                <button>Đặt ngay</button>
              </li>
            </ul>
            <hr />
            <div>
              <span className={styles.textspan}>Lựa chọn ngày đặt</span>
              <div className="mt-2">
                <Stack direction="row" spacing={2}>
                  <DemoPaper square>
                    <div className={styles.month}>Tháng 7</div>
                    <div className={styles.day}>5</div>
                    <div className={styles.weekday}>T6</div>
                  </DemoPaper>
                  <DemoPaper square>
                    <div className={styles.month}>Tháng 7</div>
                    <div className={styles.day}>6</div>
                    <div className={styles.weekday}>T6</div>
                  </DemoPaper>
                  <DemoPaper square>
                    <div className={styles.month}>Tháng 7</div>
                    <div className={styles.day}>7</div>
                    <div className={styles.weekday}>T6</div>
                  </DemoPaper>
                  <DemoPaper square>
                    <div className={styles.month}>Tháng 7</div>
                    <div className={styles.day}>8</div>
                    <div className={styles.weekday}>T6</div>
                  </DemoPaper>
                  <DemoPaper square>
                    <div className={styles.month}>Tháng 7</div>
                    <div className={styles.day}>9</div>
                    <div className={styles.weekday}>T6</div>
                  </DemoPaper>
                  <DemoPaper square>
                    <div className={styles.month}>Tháng 7</div>
                    <div className={styles.day}>10</div>
                    <div className={styles.weekday}>T6</div>
                  </DemoPaper>
                  <DemoPaper square>
                    <div onClick={handleClick}>
                    <CalendarIcon/>
                    <span className={styles.textspan}>Thêm ngày</span>
                    </div>
                  </DemoPaper>
                  <BasePopup id={id} open={open} anchor={anchor}>
                    <PopupBody>The content of the Popup.</PopupBody>
                  </BasePopup>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

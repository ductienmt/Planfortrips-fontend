import React, { useEffect, useRef, useState } from "react";
import styles from "./PassengerPage.module.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import PaidIcon from "@mui/icons-material/Paid";
import LuggageIcon from "@mui/icons-material/Luggage";
import WorkIcon from "@mui/icons-material/Work";
import { FormPassenger } from "./FormPassenger";
import { AddOutlined } from "@mui/icons-material";

export function PassengerPage({ handleComplete }) {
  const [passengers, setPassengers] = useState([1]);
  const [scrollY, setScrollY] = useState(0);
  const continueButtonRef = useRef(null);
  const cardRef = useRef(null);

  const addPassenger = () => {
    setPassengers([...passengers, passengers.length + 1]);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (continueButtonRef.current && cardRef.current) {
        const buttonRect = continueButtonRef.current.getBoundingClientRect();
        const cardRect = cardRef.current.getBoundingClientRect();

        if (buttonRect.top < cardRect.height) {
          cardRef.current.style.position = "absolute";
          cardRef.current.style.top = `${
            buttonRect.top + window.scrollY - cardRect.height - 400
          }px`;
        } else {
          cardRef.current.style.position = "fixed";
          cardRef.current.style.top = "0";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="row">
      <div className="col-6">
        <span className={styles.titleFlight}>Chuyến đi tới Hà Nội</span>
        <span className={styles.changeFlight}>
          Đổi Chuyến Bay <BorderColorIcon style={{ fontSize: "12px" }} />
        </span>
        <div className={styles.flightSection}>
          <div className={styles.outbound}>
            <span>Chiều đi </span>
            <span>T6, 19 TH7 | Thời gian bay 2g10p</span>
          </div>
          <div className={styles.flightDetails}>
            <div className={styles.timeLocation}>
              <span className={styles.time}>22:40</span>
              <span className={styles.location}>
                SGN TP. HỒ CHÍ MINH Cảng hàng không Quốc tế Tân Sơn Nhất T1
              </span>
            </div>
            <div className={styles.airlineInfo}>
              <div className={styles.airlineDetails}>
                <img
                  src="http://static.tripcdn.com/packages/flight/airline-logo/latest/airline_logo/3x/vj.webp"
                  alt="VietJet Air Logo"
                />
                <span className={styles.date}>
                  VietJet Air VJ162 Airbus A321 Hạng Phổ Thông
                </span>
              </div>
              <span className={styles.airlineDescription}>20 TH7</span>
            </div>
            <div className={styles.timeLocation}>
              <span className={styles.time}>00:50</span>
              <span className={styles.location}>
                HAN Hà Nội Sân bay quốc tế Nội Bài T1
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div
          ref={cardRef}
          className={styles.card}
          style={{
            position: "fixed",
            top: "0",
          }}
        >
          <div className={styles.header}>
            <span className={styles.icon}>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                  fillRule="evenodd"
                />
              </svg>
            </span>
            <p className={styles.alert}>Giá vé chi tiết</p>
          </div>
          <div className={styles.ticketInfo}>
            <span>Vé 1 người lớn</span>
            <span>4.000.000 VNĐ</span>
          </div>
          <div>
            <span className={styles.textInfo}>Hành lý</span>
            <div className={styles.ticketInfo}>
              <span className={styles.textLeft}>Vật dụng cá nhân</span>
              <span className={styles.textRight}>Miễn phí</span>
            </div>
            <div className={styles.ticketInfo}>
              <span className={styles.textLeft}>Hành lý xách tay</span>
              <span className={styles.textRight}>Miễn phí</span>
            </div>
            <div className={styles.ticketInfo}>
              <span className={styles.textLeft}>Hành lý ký gửi</span>
              <span className={styles.textRight}>Miễn phí</span>
            </div>
          </div>
          <hr />
          <div className={styles.ticketInfo}>
            <span style={{ fontWeight: "bolder" }} className={styles.textInfo}>
              Tổng:{" "}
            </span>
            <span style={{ color: "#" }}>4.000.000 VNĐ</span>
          </div>
        </div>
      </div>
      <div className={styles.ticket}>
        <div className="col-6">
          <div className={styles.ticketInfo}>
            <span className={styles.textInfo}>Vé của bạn</span>
            <span className={styles.details}>
              Phổ thông | <a href="">Chi tiết</a>
            </span>
          </div>
          <div className="row">
            <div className={styles.ticketI4}>
              <div className={styles.column}>
                <div className={styles.baggageInfo}>
                  <span className={styles.textInfo}>Hạng Mức Hành Lý</span>
                  <span>
                    <WorkIcon className="text-primary" /> Hành lý xách tay: 1
                    kiện
                  </span>
                  <span>
                    <LuggageIcon className="text-primary" /> Hành lý ký gửi: 20
                    kg
                  </span>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.baggageInfo}>
                  <span className={styles.textInfo}>Chính Sách</span>
                  <span>
                    <DoNotDisturbIcon /> Không được hoàn vé
                  </span>
                  <span>
                    <PaidIcon className="text-success" /> Phí thay đổi : Từ
                    3.000.000 VNĐ
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className={styles.textInfo}>Những ai sẽ đi?</span>
            {passengers.map((_, index) => (
              <FormPassenger key={index} index={index} />
            ))}
          </div>
          <button className={styles.submit} onClick={addPassenger}>
            Thêm người lớn khác <AddOutlined />
          </button>
        </div>
        <div className="col-6">
          <div className={styles.ticketI4}>
            <div className={styles.column}>
              <div className={styles.payment}>
                <span className={styles.textInfo}>Tổng</span>
                <span className={styles.price}>4.000.000 VNĐ</span>
              </div>
              <button
                ref={continueButtonRef}
                className={styles.submit}
                onClick={handleComplete}
              >
                Tiếp tục
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

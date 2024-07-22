import React, { useEffect, useRef, useState } from "react";
import styles from "./PaymentFlight.module.css";
import { AccessTime } from "@mui/icons-material";
import RepeatIcon from "@mui/icons-material/Repeat";
import LinearProgress from "@mui/material/LinearProgress";

export function PaymentFlight({ handleComplete }) {
  const [scrollY, setScrollY] = useState(0);
  const continueButtonRef = useRef(null);
  const cardRef = useRef(null);
  const [time, setTime] = useState(30 * 60); // 30 minutes in seconds
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [isProcessing, setIsProcessing] = useState(false); // Track if payment is in progress

  const progressRef = useRef(() => {});
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `00:${String(mins).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0); // to scroll to the top of the page when the component mounts up.  // eslint-disable-next-line react-hooks/exhaustive-deps

    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (continueButtonRef.current && cardRef.current) {
        const buttonRect = continueButtonRef.current.getBoundingClientRect();
        const cardRect = cardRef.current.getBoundingClientRect();

        if (buttonRect.top < cardRect.height) {
          cardRef.current.style.position = "absolute";
          cardRef.current.style.top = `${
            buttonRect.top + window.scrollY - cardRect.height - 200
          }px`;
        }
        if (window.innerWidth < 768 || buttonRect.top < cardRect.height) {
          cardRef.current.style.position = "relative";
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

  const submitPay = () => {
    setIsProcessing(true); // Set processing state to true
    progressRef.current = () => {
      if (progress >= 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress((prev) => Math.min(prev + diff, 100)); // Ensure progress does not exceed 100
        setBuffer((prev) => Math.min(prev + diff + diff2, 100)); // Ensure buffer does not exceed 100
      }
    };
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    // Simulate payment completion after a delay
    setTimeout(() => {
      clearInterval(timer);
      setIsProcessing(false); // Set processing state to false
      handleComplete();
    }, 5000); // Adjust the delay to match your use case
  };

  return (
    <div className="row">
      <div className="col-12 col-sm-6 col-md-6 col-lg-6">
        <div className={styles.form1}>
          <div className={styles.titleInfo}>
            <span
              style={{ fontSize: "18px", fontWeight: "bolder", color: "#000" }}
            >
              Chọn phương thức thanh toán
            </span>
          </div>
          <form className={styles.form}>
            <div className={styles.titleInfo}>
              <span className={styles.title}>Thẻ Tín Dụng/Thẻ Ghi Nợ</span>
              <span className={styles.remove}>
                Vui lòng đặt chỗ của bạn trong{" "}
                <span style={{ color: "#d56782" }}>{formatTime(time)}</span>
              </span>
            </div>
            <label>
              <input
                required
                placeholder=""
                type="text"
                className={styles.input}
              />
              <span>Số thẻ</span>
            </label>
            <label>
              <input
                required
                placeholder=""
                type="text"
                className={styles.input}
              />
              <span>Tên chủ thẻ</span>
            </label>

            <label className={styles.label}>
              <input
                required
                placeholder=""
                type="text"
                className={styles.input}
              />
              <span>Ngày hết hạn</span>
            </label>
            <label className={styles.label}>
              <input
                required
                placeholder=""
                type="text"
                className={styles.input}
              />
              <span>Mã CVV</span>
            </label>
          </form>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-6">
        <div
          ref={cardRef}
          className={styles.card}
          // style={{
          //   position: "fixed",
          //   top: "0",
          // }}
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
            <p className={styles.alert}>Thông tin đặt chỗ</p>
          </div>
          <div>
            <span className={styles.locationDetail}>
              TP.HỒ CHÍ MINH <RepeatIcon /> HÀ NỘI
            </span>
          </div>
          <div className={styles.ticketInfo}>
            <span className={styles.changeFlight}>Chiều đi</span>
            <span>
              T2, 19 TH7 <AccessTime /> 3h00p
            </span>
          </div>
          <div className={styles.details}>
            <div className={styles.row}>
              <div className={styles.flightInfo}>
                <p className={styles.flightLocation}>
                  Cảng hàng không quốc tế Tân Sơn Nhất
                </p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.flightDetails}>
                <div className={styles.flightLine}>
                  <span className={styles.flightTime}>22:00</span>
                  <span className={styles.dot}>•</span>
                  <div className={styles.line} />
                  <span className={styles.dot}>•</span>
                  <span className={styles.flightTime}>0:05</span>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.flightInfo}>
                <p className={styles.flightLocation}>
                  Cảng hàng không quốc tế Nội Bài
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ticketInfo}>
            <span className={styles.changeFlight}>Chiều về</span>
            <span>
              T5, 22 TH7 <AccessTime /> 3h00p
            </span>
          </div>
          <div className={styles.details}>
            <div className={styles.row}>
              <div className={styles.flightInfo}>
                <p className={styles.flightLocation}>
                  Cảng hàng không quốc tế Nội Bài
                </p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.flightDetails}>
                <div className={styles.flightLine}>
                  <span className={styles.flightTime}>22:00</span>
                  <span className={styles.dot}>•</span>
                  <div className={styles.line} />
                  <span className={styles.dot}>•</span>
                  <span className={styles.flightTime}>0:05</span>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.flightInfo}>
                <p className={styles.flightLocation}>
                  Cảng hàng không quốc tế Tân Sơn Nhất
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.ticketInfo}>
            <span
              style={{ fontWeight: "bolder", fontSize: "16px" }}
              className={styles.textInfo}
            >
              Tổng:{" "}
            </span>
            <span
              style={{ color: "#000", fontSize: "20px", fontWeight: "bolder" }}
            >
              4.000.000 VNĐ
            </span>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-6">
        <div className={styles.ticketI4}>
          <div className={styles.column}>
            <button
              ref={continueButtonRef}
              className={styles.submit}
              onClick={submitPay}
            >
              Thanh Toán 4.000.000 VNĐ bằng thẻ
            </button>
            {isProcessing && (
              <div className={styles.overlay}>
                <button className={styles.submit} style={{ width: "600px" }}>
                  <LinearProgress
                    variant="buffer"
                    value={progress}
                    valueBuffer={buffer}
                  />{" "}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

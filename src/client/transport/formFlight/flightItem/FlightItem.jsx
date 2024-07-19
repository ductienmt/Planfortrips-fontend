import { Link } from "react-router-dom";
import styles from "./flightItem.module.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { FlightClass, FlightSharp } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Skeleton, Stack } from "@mui/material";
import { SlideBrand } from "./SlideBrand";

export function FlightItem() {
  const [isLoading, setIsloading] = useState(true);
  const [isSelect, setIsSelect] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 1500);
  });
  const handleSelectFlight = () => {
    setIsSelect(!isSelect);
  };
  if (isLoading) {
    return (
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="rectangular" width={1000} height={80} />
        <Skeleton variant="rectangular" width={1000} height={40} />
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Skeleton variant="rounded" width={120} height={60} />
          <Skeleton variant="rounded" width={120} height={60} />
          <Skeleton variant="rounded" width={120} height={60} />
        </Stack>
        <Skeleton
          variant="rounded"
          width={160}
          height={60}
          style={{ marginLeft: "auto" }}
        />
      </Stack>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Khởi hành</h1>
          <p className={styles.headerText}>14/07/2024</p>
        </div>
        <div className={styles.economy}>
          <svg
            viewBox="0 0 64 64"
            pointerEvents="all"
            aria-hidden="true"
            className={styles.economyIcon}
            role="presentation"
          >
            <path d="M43.389 38.269L29.222 61.34a1.152 1.152 0 01-1.064.615H20.99a1.219 1.219 0 01-1.007-.5 1.324 1.324 0 01-.2-1.149L26.2 38.27H11.7l-3.947 6.919a1.209 1.209 0 01-1.092.644H1.285a1.234 1.234 0 01-.895-.392l-.057-.056a1.427 1.427 0 01-.308-1.036L1.789 32 .025 19.656a1.182 1.182 0 01.281-1.009 1.356 1.356 0 01.951-.448l5.4-.027a1.227 1.227 0 01.9.391.85.85 0 01.2.252L11.7 25.73h14.5L19.792 3.7a1.324 1.324 0 01.2-1.149A1.219 1.219 0 0121 2.045h7.168a1.152 1.152 0 011.064.615l14.162 23.071h8.959a17.287 17.287 0 017.839 1.791Q63.777 29.315 64 32q-.224 2.685-3.807 4.478a17.282 17.282 0 01-7.84 1.793h-9.016z" />
          </svg>
          <p className={styles.economyText}>Thương gia</p>
        </div>
        {/* <div className={styles.details}>
          <div className={styles.detailsItem}>
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/21/1513847571812-80957b213e4e33ff41e1e09d6836f521.png?tr=q-75"
              className={styles.detailsIcon}
            />
            <div className={styles.detailsText}>
              <span className={styles.detailsTextPrimary}>Hand baggage</span>
              <span className={styles.detailsTextSecondary}>7 kg</span>
            </div>
          </div>
          <div className={styles.detailsItem}>
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2022/12/20/1671513211496-9e5ffecfe113187325e1d18f3accc69d.png?tr=q-75"
              className={styles.detailsIcon}
            />
            <div className={styles.detailsText}>
              <span className={styles.detailsTextPrimary}>Check-in baggage</span>
              <span className={styles.detailsWeight}>30 kg</span>
            </div>
          </div>
        </div> */}
        <div className={styles.details}>
          <div className={styles.detailsText}>
            <img
              src="http://static.tripcdn.com/packages/flight/airline-logo/latest/airline_logo/3x/vj.webp"
              className={styles.detailsIcon}
            />
            <span className={styles.detailsTextPrimary}>VietJet Air</span>
          </div>
          <div className={styles.flightInfo}>
            <p className={styles.flightLocation}>SGN - Tan Son Nhat</p>
            <p className={styles.flightCountry}>Vietnam</p>
          </div>
          <div className={styles.flightDetails}>
            <span className={styles.flightDuration}>3h 00m</span>
            <div className={styles.flightLine}>
              <span className={styles.flightTime}>08:30</span>
              <span className={styles.dot}>•</span>
              <hr className={styles.line} />
              <span className={styles.dot}>•</span>
              <span className={styles.flightTime}>11:30</span>
            </div>
          </div>
          <div className={styles.flightInfo}>
            <p className={styles.flightLocation}>ICN - Incheon</p>
            <p className={styles.flightCountry}>South Korea</p>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.ticket}>
            {/* <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2019/07/10/1562742723573-53af24d1f25f304c4f657d98af57f132.png?tr=q-75"
              className={styles.ticketIcon}
            /> */}
            <div className={styles.ticketInfo}>
              {/* <span className={styles.ticketType}>Vé tiêu chuẩn</span>
              <p className={styles.ticketPrice}>5,000,000 VND</p>
              <span className={styles.ticketPriceNote}>1 passenger, taxes included</span> */}
            </div>
            {/* <button className={styles.bookButton}>Đặt ngay</button> */}
          </div>
          <div className={styles.flexibleTicket}>
            <FlightSharp
              className={styles.flexibleTicketIcon}
              style={{ fontSize: "50px", color: "#fff" }}
            />
            <div className={styles.flexibleTicketInfo}>
              <span className={styles.flexibleTicketType}>Vé tiêu chuẩn</span>
              <p className={styles.flexibleTicketPrice}>8,000,000 VND</p>
              {/* <span className={styles.flexibleTicketPriceNote}>1 passenger, taxes included</span> */}
            </div>
            <button
              className={styles.flexibleBookButton}
              onClick={handleSelectFlight}
              style={{
                backgroundColor: isSelect ? "" : "#99aed3",
                border: "2px solid #0283df",
              }}
            >
              {isSelect ? (
                <>
                  <span className="m-auto container">Chọn</span>
                  <span id="darkArrowDown">
                    <img
                      importance="low"
                      loading="lazy"
                      id="logoArrowDown"
                      src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/3de2bccd750fe7e9a102505064b03a37.svg"
                      decoding="async"
                      width={19}
                      height={18}
                      style={{
                        objectFit: "fill",
                        objectPosition: "50% 50%",
                        marginRight: "20px",
                      }}
                      className={`${styles.rotateIcon} ${
                        isSelect ? styles.rotated : ""
                      }`}
                    />
                  </span>
                </>
              ) : (
                <>
                  <span id="darkArrowDown">
                    <img
                      importance="low"
                      loading="lazy"
                      id="logoArrowDown"
                      src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/3de2bccd750fe7e9a102505064b03a37.svg"
                      decoding="async"
                      width={19}
                      height={18}
                      style={{
                        objectFit: "fill",
                        objectPosition: "50% 50%",
                        margin: "auto",
                      }}
                      className={`${styles.rotateIcon} ${
                        isSelect ? styles.rotated : ""
                      }`}
                    />
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      {!isSelect && <SlideBrand style={{
        transition: "transform 0.3s ease-in-out"
      }}/>}
    </div>
  );
}

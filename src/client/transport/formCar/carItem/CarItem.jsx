import { Link } from "react-router-dom";
import styles from "./carItem.module.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
export function FlightItem() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <svg
            viewBox="0 0 64 64"
            data-testid="tripDetails-bound-plane-icon"
            pointerEvents="all"
            aria-hidden="true"
            className={styles.headerIcon}
            role="presentation"
          >
            <path d="M43.389 38.269L29.222 61.34a1.152 1.152 0 01-1.064.615H20.99a1.219 1.219 0 01-1.007-.5 1.324 1.324 0 01-.2-1.149L26.2 38.27H11.7l-3.947 6.919a1.209 1.209 0 01-1.092.644H1.285a1.234 1.234 0 01-.895-.392l-.057-.056a1.427 1.427 0 01-.308-1.036L1.789 32 .025 19.656a1.182 1.182 0 01.281-1.009 1.356 1.356 0 01.951-.448l5.4-.027a1.227 1.227 0 01.9.391.85.85 0 01.2.252L11.7 25.73h14.5L19.792 3.7a1.324 1.324 0 01.2-1.149A1.219 1.219 0 0121 2.045h7.168a1.152 1.152 0 011.064.615l14.162 23.071h8.959a17.287 17.287 0 017.839 1.791Q63.777 29.315 64 32q-.224 2.685-3.807 4.478a17.282 17.282 0 01-7.84 1.793h-9.016z" />
          </svg>
          <h1 className={styles.headerTitle}>Dien Linh Limousine</h1>
          <p className={styles.headerText}>limousine 36 giường</p>
        </div>
        {/* <div className={styles.economy}>
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
        </div> */}
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
          <div className={styles.flightInfo}>
            <span className={styles.flightTime}>08:30</span>
            <p className={styles.flightLocation}>VP Tân Bình</p>
            {/* <p className={styles.flightCountry}>Vietnam</p> */}
          </div>
          <svg
            viewBox="0 0 32 32"
            className={styles.detailsIcon}
            aria-hidden="true"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeMiterlimit="10"
            >
              <path d="M2 16h28M22 6l10 10-10 10" />
            </g>
          </svg>
          <div className={styles.flightInfo}>
            <span className={styles.flightTime}>11:30</span>
            <p className={styles.flightLocation}>VP Đà Lạt - Phạm Hồng Thái</p>
            {/* <p className={styles.flightCountry}>South Korea</p> */}
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
            <DirectionsCarIcon className={styles.flexibleTicketIcon} style={{fontSize:'50px',color:'#fff'}}/>
            <div className={styles.flexibleTicketInfo}>
              <span className={styles.flexibleTicketType}>Vé tiêu chuẩn</span>
              <p className={styles.flexibleTicketPrice}>8,000,000 VND</p>
              {/* <span className={styles.flexibleTicketPriceNote}>1 passenger, taxes included</span> */}
            </div>
            <button className={styles.flexibleBookButton}>Đặt ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
}

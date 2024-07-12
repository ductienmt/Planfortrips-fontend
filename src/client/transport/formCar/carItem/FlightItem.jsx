import { Link } from "react-router-dom";
import styles from "./flightItem.module.css";
import StarRateIcon from '@mui/icons-material/StarRate';
export function FlightItem() {
  return (
    <div className={styles.card} style={{marginBottom: '10px'}}>
     <Link to={"./detail"}>
     <div className={styles.cardimage}>
        <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/90/21/26.jpg?s=800x" 
        alt="" />
      </div>
      <p className={styles.cardtitle}>Top Notch Street Food Motorbike Tour In Ho Chi Minh City
      </p></Link>
      <p className={styles.cardbody}>
      <StarRateIcon className="text-warning"/>
      <strong>5.0 </strong> <span>100 đánh giá</span> 
      </p>
      <p className={styles.footer}>
        <strike>100.000 D</strike> <span className={styles.byname} style={{color:'#B22222'}}>80.000 Đ</span>
      </p>
    </div>
  );
}

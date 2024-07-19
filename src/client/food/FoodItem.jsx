import { Link } from "react-router-dom";
<<<<<<< HEAD
import styles from "./FoodItem.module.css";
import StarRateIcon from "@mui/icons-material/StarRate";
=======
import styles from "./foodItem.module.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useEffect, useState } from "react";
import { Skeleton, Stack } from "@mui/material";
>>>>>>> 08658e7 (flight page)
export function FoodItem() {
  const [isLoading, setIsloading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsloading(false);
    },1500)
  })
  if (isLoading) {
    return (
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="rectangular" width={210} height={120} />

        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton
          variant="rounded"
          width={80}
          height={60}
          style={{ float: "right"}}
        />
      </Stack>
    );
  }
  return (
    <div className={styles.card} style={{ marginBottom: "10px" }}>
      <Link to={"./detail"}>
        <div className={styles.cardimage}>
          <img
            src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/90/21/26.jpg?s=800x"
            alt=""
          />
        </div>
        <p className={styles.cardtitle}>
          Top Notch Street Food Motorbike Tour In Ho Chi Minh City
        </p>
      </Link>
      <p className={styles.cardbody}>
        <StarRateIcon className="text-warning" />
        <strong>5.0 </strong> <span>100 đánh giá</span>
      </p>
      <p className={styles.footer}>
<<<<<<< HEAD
        <strike>100.000 D</strike>{" "}
        <span className={styles.byname} style={{ color: "#B22222" }}>
          80.000 Đ
=======
        <strike>100.000 VND</strike>{" "}
        <span className={styles.byname} style={{ color: "#B22222" }}>
          80.000 VND
>>>>>>> 08658e7 (flight page)
        </span>
      </p>
    </div>
  );
}

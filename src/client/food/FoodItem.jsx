import { Link } from "react-router-dom";
import styles from "./FoodItem.module.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useEffect, useState } from "react";
import { Skeleton, Stack } from "@mui/material";

export function FoodItem() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={210} height={120} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={80} height={60} style={{ float: "right" }} />
      </Stack>
    );
  }

  return (
    <div className={styles.card} style={{ marginBottom: "10px" }}>
      <Link to="./detail">
        <div className={styles.cardImage}>
          <img
            src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/90/21/26.jpg?s=800x"
            alt="Street Food Tour"
          />
        </div>
        <p className={styles.cardTitle}>
          Top Notch Street Food Motorbike Tour In Ho Chi Minh City
        </p>
      </Link>
      <p className={styles.cardBody}>
        <StarRateIcon className="text-warning" />
        <strong>5.0 </strong> <span>100 đánh giá</span>
      </p>
      <p className={styles.footer}>
        <strike>100.000 VND</strike>{" "}
        <span className={styles.byName} style={{ color: "#B22222" }}>
          80.000 VND
        </span>
      </p>
    </div>
  );
}

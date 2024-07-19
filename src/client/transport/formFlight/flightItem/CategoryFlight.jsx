import { Card } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./CategoryFlight.module.css";
import LuggageIcon from "@mui/icons-material/Luggage";
import BlockIcon from "@mui/icons-material/Block";
import { Link } from "react-router-dom";
import { Skeleton, Stack } from "@mui/material";

export function CategoryFlight() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={300} height={80} />
        <Skeleton variant="rectangular" width={300} height={40} />
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
    <Card className={styles.card}>
      <div aria-label="Hạng phổ thông" className={styles.cardTitle}>
        Hạng phổ thông
      </div>
      <div className={styles.cardBody}>
        <div className={styles.infoSection}>
          <span className={styles.sectionTitle}>Hành lý</span>
          <div className={styles.sectionContent}>
            <LuggageIcon style={{ color: "#0283df" }} /> Hành lý xách tay: 1 kiện
          </div>
        </div>
        <div className={styles.infoSection}>
          <span className={styles.sectionTitle}>Quy định giá vé</span>
          <div className={styles.sectionContent}>
            <BlockIcon /> Không được hoàn vé
          </div>
          <div className={styles.sectionContent}>
            <BlockIcon /> Không được đổi
          </div>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.price}>4.000.000 VNĐ</div>
        <Link to="passenger" className={styles.button}>
          Đặt vé
        </Link>
      </div>
    </Card>
  );
}

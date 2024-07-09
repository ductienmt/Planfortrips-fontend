import React from "react";
import styles from "./destination.module.css";
import { Container, Grid, Typography } from "@mui/material";

export const DestinationCarousels = () => {
  return (
    <>
      <Typography
        style={{ textAlign: "center", marginBottom: 40 }}
        variant="h5"
      >
        Những chỗ nghỉ nổi bật được đề xuất cho quý khách
      </Typography>
      <Container maxWidth="lg">
        <Grid className={styles.rentalGrid} container>
          <Grid item lg={3} md={4} sm={6} xs={12} >
            <div className={styles.rentalTypes}style={{background:'#fff'}}>
              <img
                className={styles.rentalImg}
                src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg"
                alt=""
              />
              <p>Căn hộ</p>
            </div>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <div className={styles.rentalTypes}style={{background:'#fff'}}>
              <img
                className={styles.rentalImg}
                src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-house.jpg"
                alt=""
              />
              <p>Vacation Rentals</p>
            </div>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <div className={styles.rentalTypes}style={{background:'#fff'}}>
              <img
                className={styles.rentalImg}
                src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-villa.jpg"
                alt=""
              />
              <p>Biệt thự riêng</p>
            </div>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <div className={styles.rentalTypes}style={{background:'#fff'}}>
              <img
                className={styles.rentalImg}
                src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-bungalow.jpg"
                alt=""
              />
              <p>Bungalows</p>
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* Overheard from travellers */}

      <Typography
        style={{ textAlign: "center", marginBottom: 40 }}
        variant="h5"
      >
        Tiếng lành đồn xa
      </Typography>

      <Container maxWidth="lg">
        <Grid className={styles.rentalGrid} container>
          <Grid item lg={4} md={6} sm={12} xs={12} >
            <div className={styles.reviews} style={{background:'#fff'}}>
              <h1>Khách sạn Sydney</h1>
              <p>ở Úc</p>
              <h2>
              Giá phòng Executive hướng thành phố trên Agoda rất phải chăng. Đúng là một món hời!
              </h2>
              <p>- Bellarmine đến từ Philippines</p>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <div className={styles.reviews} style={{background:'#fff'}}>
              <h1>Khách sạn Granvia Kyoto</h1>
              <p>ở Nhật Bản</p>
              <h2>
              Gia đình chúng tôi vừa đi tàu tốc hành qua các thành phố ở Nhật Bản cùng nhiều hành lý
              </h2>
              <p>- Diane đến từ Hoa Kỳ</p>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <div className={styles.reviews} style={{background:'#fff'}}>
              <h1>Khách sạn Heritage</h1>
              <p>ở Philippines</p>
              <h2>
              Tôi săn được giá đặc biệt giờ chót với Agoda. Phòng ốc rộng rãi, giường ngủ thoải mái và ấm cúng.
              </h2>
              <p>- Henry đến từ Úc</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

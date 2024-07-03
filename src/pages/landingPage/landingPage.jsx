import React from "react";
import styles from "./landingPage.module.css";
import { DestinationCarousels } from "../../components/landing/DestinationCarousels/DestinationCarousels";
import { Container, Grid } from "@mui/material";
import { FormSelection } from "../../components/landing/FormSelection/FormSelection";

export const LandingPage = () => {
  return (
    <>
      <FormSelection />

      <Container maxWidth="lg">
        <Grid container>
          <div className={styles.advertImg}>
            <Grid
              item
              className={styles.advertGrid}
              xl={6}
              lg={6}
              md={12}
              sm={12}
            >
              <img
                src="https://cdn6.agoda.net/images/WebCampaign/wcPD2021H2/en-us/home_banner.png"
                alt=""
              />
            </Grid>
            <Grid
              item
              className={styles.advertGrid}
              xl={6}
              lg={6}
              md={12}
              sm={12}
            >
              <img
                src="https://cdn6.agoda.net/images/WebCampaign/wcSP20210824EUv2/en-us.png"
                alt=""
              />
            </Grid>
          </div>
        </Grid>
      </Container>

      <DestinationCarousels />
    </>
  );
};

import React from "react";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.mainloadingDiv}>
      <div className={styles.loadingDiv}>
        <img
          src="https://cdn6.agoda.net/images/brand/agoji-parachute.gif"
          alt="gif1"
        />
        <h3>ĐẢM BẢO GIÁ TỐT NHẤT</h3>
        <h5>Chúng tôi sẽ khớp bất kỳ mức giá nào trên web hoặc hoàn lại khoản chênh lệch</h5>
      </div>
    </div>
  );
}

export { Loading };

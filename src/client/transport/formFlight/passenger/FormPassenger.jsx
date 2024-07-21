import React, { useState } from "react";
import styles from "./FormPassenger.module.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { DatePicker } from "antd";
import { AddOutlined } from "@mui/icons-material";

export function FormPassenger({index}) {
  const [startDate, setStartDate] = useState(null);

  return (
    <form className={styles.form}>
      <div className={styles.titleInfo}>
        <p className={styles.title}>Hành Khách {index + 1} ( Vé người lớn )</p>
        <span className={styles.remove}>
          Xóa <DeleteOutlineIcon />
        </span>
      </div>
      <label>
        <input required placeholder="" type="text" className={styles.input} />
        <span>Họ</span>
      </label>
      <label>
        <input required placeholder="" type="text" className={styles.input} />
        <span>Tên Đệm và Tên</span>
      </label>
      <label>
        <DatePicker
          value={startDate}
          onChange={(date) => setStartDate(date)}
          format="DD/MM/YYYY"
          placeholder=""
          className={styles.input}
        />
        <span>Date of Birth</span>
      </label>
      <label>
        <select required className={styles.input}>
          <option value="" disabled hidden>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <span>Gender</span>
      </label>
      <label>
        <select required className={styles.input}>
          <option value="" disabled hidden>Select Country</option>
          <option value="vietnam">Vietnam</option>
          <option value="usa">United States</option>
          <option value="uk">United Kingdom</option>
        </select>
        <span>Country</span>
      </label>
    </form>
  );
}

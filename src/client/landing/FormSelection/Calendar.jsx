import React, { useState } from "react";
import { DatePicker, ConfigProvider } from "antd";
import viVN from 'antd/es/locale/vi_VN'; // Import locale tiếng Việt
import styles from "./calendar.module.css";
import moment from "moment";

const { RangePicker } = DatePicker;

export const Calendar = ({ setFocus }) => {
  const [dates, setDates] = useState([]);
  const [hackValue, setHackValue] = useState();
  const [value, setValue] = useState();

  const disabledDate = (current) => {
    if (!dates || dates.length === 0) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], "days") > 29;
    const tooEarly = dates[1] && dates[1].diff(current, "days") > 29;
    return tooEarly || tooLate;
  };

  const onOpenChange = (open) => {
    if (open) {
      setHackValue([]);
      setDates([]);
    } else {
      setHackValue(undefined);
    }
  };

  return (
    <ConfigProvider locale={viVN}>
      <RangePicker
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={styles.calendar}
        value={hackValue || value}
        disabledDate={disabledDate}
        onCalendarChange={(val) => setDates(val)}
        onChange={(val) => setValue(val)}
        onOpenChange={onOpenChange}
        placeholder={['Ngày bắt đầu', 'Ngày kết thúc']}
        format="DD/MM/YYYY" // Cập nhật định dạng ngày tháng
        showToday
      />
    </ConfigProvider>
  );
};

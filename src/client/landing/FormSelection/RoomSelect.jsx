import { Select } from "antd";
import styles from "./roomSelect.module.css";
import PeopleIcon from '@mui/icons-material/People';
const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

export default function RoomSelect({ setFocus }) {
  return (
    <div className={styles.select_the_room}>
      <PeopleIcon className={styles.peopleIcon} />
      <Select
        className={styles.roomSelect}
        popupClassName={styles.roomSelectOptions}
        size="large"
        showSearch
        variant="unstyled"
        placeholder="Phòng"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value={1}>Đơn</Option>
        <Option value={2}>Đôi</Option>
      </Select>
    </div>
  );
}

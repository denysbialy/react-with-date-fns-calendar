import { format } from "date-fns";
import styles from "../style.module.scss"

const ShowCurrentDay = ({ selectedCurrentDate }) => {
  return (
    <div className={styles.showDay}>
      <div>{format(new Date(selectedCurrentDate), "EEEE")}</div>
      <div className={styles.fontSize}>{format(new Date(selectedCurrentDate), "d")}</div>
    </div>
  );
};

export default ShowCurrentDay;

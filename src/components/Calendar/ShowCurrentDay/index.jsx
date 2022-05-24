import { format } from "date-fns";
import { useContext } from "react";
import { DateContext } from "../../../context";
import styles from "../style.module.scss";

const ShowCurrentDay = () => {
  const [selectedCurrentDate] = useContext(DateContext);
  return (
    <div className={styles.showDay}>
      <div>{format(new Date(selectedCurrentDate), "EEEE")}</div>
      <div className={styles.fontSize}>{format(selectedCurrentDate, "d")}</div>
    </div>
  );
};

export default ShowCurrentDay;

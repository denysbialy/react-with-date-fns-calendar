import { format, startOfWeek, addDays } from "date-fns";
import { useContext } from "react";
import { DateContext } from "../../../context";
import styles from "../style.module.scss";

const WeekDaysNames = () => {
  const [currentDateOfThisMonth] = useContext(DateContext);

  const weekStartDate = startOfWeek(currentDateOfThisMonth);

  const weekDays = new Array(7).fill(null).map((_, index) => (
    <td className={`${styles.day} ${styles.weekNames}`} key={index}>
      {format(addDays(weekStartDate, index), "EEEEE")}
    </td>
  ));
  return (
    <thead>
      <tr className={styles.weekContainer}>{weekDays}</tr>
    </thead>
  );
};

export default WeekDaysNames;

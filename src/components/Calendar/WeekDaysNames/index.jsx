import { format, startOfWeek, addDays } from "date-fns";
import styles from "../style.module.scss";

const WeekDaysNames = ({ currentDateOfThisMonth }) => {
  const weekStartDate = startOfWeek(currentDateOfThisMonth);
  const weekDays = [];
  for (let day = 0; day < 7; day++) {
    weekDays.push(
      <td className={`${styles.day} ${styles.weekNames}`}key={day}>
        {format(addDays(weekStartDate, day), "EEEEE")}
      </td>
    );
  }
  return (
    <thead>
      <tr className={styles.weekContainer}>{weekDays}</tr>
    </thead>
  );
};

export default WeekDaysNames;

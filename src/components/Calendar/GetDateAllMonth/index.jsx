import {
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
} from "date-fns";
import styles from "../style.module.scss";
import CreateDatesOfWeek from "../CreateDatesOfWeek";

const GetDateAllMonth = ({ selectedCurrentDate, currentDateOfThisMonth, setSelectedCurrentDate }) => {
  const startOfTheSelectedMonth = startOfMonth(currentDateOfThisMonth);
  const endOfTheSelectedMonth = endOfMonth(currentDateOfThisMonth);
  const startDate = startOfWeek(startOfTheSelectedMonth);
  const endDate = endOfWeek(endOfTheSelectedMonth);

  let currentDate = startDate;

  const allWeeks = [];

  while (currentDate <= endDate) {
    allWeeks.push(
      <CreateDatesOfWeek
        date={currentDate}
        selectedCurrentDate={selectedCurrentDate}
        currentDateOfThisMonth={currentDateOfThisMonth}
        setSelectedCurrentDate={setSelectedCurrentDate}
        key={currentDate}
      />
    );
    currentDate = addDays(currentDate, 7);
  }

  return (
    <tbody>
      <tr className={styles.weekContainer}>{allWeeks}</tr>
    </tbody>
  );
};

export default GetDateAllMonth;

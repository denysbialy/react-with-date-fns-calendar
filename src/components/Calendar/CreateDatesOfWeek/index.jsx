import { format, addDays, isSameMonth, isSameDay } from "date-fns";
import styles from "../style.module.scss";
import cx from "classnames";
const CreateDatesOfWeek = ({
  date,
  selectedCurrentDate,
  currentDateOfThisMonth,
  setSelectedCurrentDate,
}) => {
  // `${styles.day} 
  // ${
    //   isSameMonth(currentDate, currentDateOfThisMonth)
    //     ? ""
    //     : styles.anotherMonth
    // } 
    // ${
      //   isSameDay(currentDate, selectedCurrentDate)
      //     ? styles.thisCurrentDay
      //     : ""
      // }`
      let currentDate = date;
      const week = [];
      for (let i = 0; i < 7; i++) {
        const cloneDate = currentDate;
        const styleList = cx(
          styles.day,
          { [styles.thisCurrentDay]: isSameMonth(currentDate, currentDateOfThisMonth) },
          { [styles.anotherMonth]: !isSameDay(currentDate, selectedCurrentDate) }
        );
    week.push(
      <td
        key={currentDate}
        className={styleList}
        onClick={() => {
          setSelectedCurrentDate(cloneDate);
        }}
      >
        {format(currentDate, "d")}
      </td>
    );
    currentDate = addDays(currentDate, 1);
  }
  return <>{week}</>;
};

export default CreateDatesOfWeek;

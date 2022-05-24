import { format, addDays, isSameMonth, isSameDay } from "date-fns";
import styles from "../style.module.scss";
import cx from "classnames";

import { useContext } from "react";
import { DateContext } from "../../../context";

const Day = ({ date, index }) => {
  const [selectedCurrentDate, setSelectedCurrentDate, currentDateOfThisMonth] =
    useContext(DateContext);

  const styless = cx(styles.day, {
    [styles.anotherMonth]: !isSameMonth(
      addDays(date, index),
      currentDateOfThisMonth
    ),
    [styles.thisCurrentDay]: isSameDay(
      addDays(date, index),
      selectedCurrentDate
    ),
  });

  return (
    <td
      className={styless}
      onClick={() => {
        setSelectedCurrentDate(addDays(date, index));
      }}
    >
      {format(addDays(date, index), "d")}
    </td>
  );
};

export default Day;

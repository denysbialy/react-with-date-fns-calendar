import React, { useState } from "react";
import styles from "./style.module.scss";
import Header from "./Header";
import WeekDaysNames from "./WeekDaysNames";
import GetDateAllMonth from "./GetDateAllMonth";
import ShowCurrentDay from "./ShowCurrentDay";

const Calendar = () => {
  const [selectedCurrentDate, setSelectedCurrentDate] = useState(new Date());
  const currentDateOfThisMonth = new Date();

  return (
    <main className={styles.container}>
      <div>
        <ShowCurrentDay selectedCurrentDate={selectedCurrentDate} />
      </div>
      <div className={styles.sizes}>
        <Header currentDateOfThisMonth={currentDateOfThisMonth} />
        <table>
          <WeekDaysNames currentDateOfThisMonth={currentDateOfThisMonth} />
          <GetDateAllMonth
            selectedCurrentDate={selectedCurrentDate}
            currentDateOfThisMonth={currentDateOfThisMonth}
            setSelectedCurrentDate={setSelectedCurrentDate}
          />
        </table>
      </div>
    </main>
  );
};

export default Calendar;

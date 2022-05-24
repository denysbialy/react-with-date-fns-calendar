import React, { useState } from "react";
import styles from "./style.module.scss";
import Header from "./Header";
import WeekDaysNames from "./WeekDaysNames";
import Month from "./Month";
import ShowCurrentDay from "./ShowCurrentDay";
import { DateContext } from "../../context";

const Calendar = () => {
  const [selectedCurrentDate, setSelectedCurrentDate] = useState(new Date());
  const [currentDateOfThisMonth] = useState(new Date());

  return (
    <DateContext.Provider
      value={[
        selectedCurrentDate,
        setSelectedCurrentDate,
        currentDateOfThisMonth,
      ]}
    >
      <main className={styles.container}>
        <div>
          <ShowCurrentDay />
        </div>
        <div className={styles.sizes}>
          <Header />
          <table>
            <WeekDaysNames />
            <Month />
          </table>
        </div>
      </main>
    </DateContext.Provider>
  );
};

export default Calendar;

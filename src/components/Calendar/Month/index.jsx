import { startOfWeek, startOfMonth, getWeekOfMonth, addWeeks } from "date-fns";
import { useContext } from "react";
import { DateContext } from "../../../context";

import Week from "../Week";

const Month = () => {
  const [selectedCurrentDate, setSelectedCurrentDate, currentDateOfThisMonth] =
    useContext(DateContext);
  const startDate = startOfWeek(startOfMonth(currentDateOfThisMonth));
  const weeksNumber = getWeekOfMonth(currentDateOfThisMonth, {
    weekStartsOn: 1,
  });

  const weeks = new Array(weeksNumber)
    .fill(null)
    .map((_, index) => (
      <Week
        date={addWeeks(startDate, index)}
        key={addWeeks(startDate, index)}
      />
    ));
  return <tbody>{weeks}</tbody>;
};

export default Month;

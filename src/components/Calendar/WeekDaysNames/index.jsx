import { format, startOfWeek, addDays } from "date-fns";
import "../style.scss";

const WeekDaysNames = ({ currentDateOfThisMonth }) => {
  const weekStartDate = startOfWeek(currentDateOfThisMonth);
  const weekDays = [];
  for (let day = 0; day < 7; day++) {
    weekDays.push(
      <td className="day weekNames" key={day}>
        {format(addDays(weekStartDate, day), "EEEEE")}
      </td>
    );
  }
  return (
    <thead>
      <tr className="weekContainer">{weekDays}</tr>
    </thead>
  );
};

export default WeekDaysNames;

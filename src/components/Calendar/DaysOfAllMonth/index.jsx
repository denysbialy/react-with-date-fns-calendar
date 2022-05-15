import { format, addDays, isSameMonth, isSameDay } from "date-fns";
import "../style.scss";

const CreateDatesOfWeek = ({
  date,
  selectedCurrentDate,
  currentDateOfThisMonth,
  setSelectedCurrentDate,
}) => {
  let currentDate = date;
  const week = [];
  for (let i = 0; i < 7; i++) {
    const cloneDate = currentDate;
    week.push(
      <td
        key={currentDate}
        className={`day 
        ${isSameMonth(currentDate, currentDateOfThisMonth) ? "" : "anotherMonth"} 
        ${isSameDay(currentDate, selectedCurrentDate)? "thisCurrentDay radiusDay": ""}`}
        onClick={() => {setSelectedCurrentDate(cloneDate);}}
        >
        {format(currentDate, "d")}
      </td>
    );
    currentDate = addDays(currentDate, 1);
  }
  return <>{week}</>;
};

export default CreateDatesOfWeek;

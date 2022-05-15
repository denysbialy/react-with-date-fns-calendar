import { format } from "date-fns";

const ShowCurrentDay = ({ selectedCurrentDate }) => {
  return (
    <div className="showDay">
      <div>{format(new Date(selectedCurrentDate), "EEEE")}</div>
      <div className="fontSize">{format(new Date(selectedCurrentDate), "d")}</div>
    </div>
  );
};

export default ShowCurrentDay;

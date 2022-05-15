import { format } from "date-fns";
import "../style.scss"

const Header = ({currentDateOfThisMonth}) => {
  return <h2 className="header">{format(currentDateOfThisMonth, "MMMM yyyy")}</h2>;
};

export default Header;

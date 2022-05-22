import { format } from "date-fns";
import styles from "../style.module.scss"

const Header = ({currentDateOfThisMonth}) => {
  return <h2 className={styles.header}>{format(currentDateOfThisMonth, "MMMM yyyy")}</h2>;
};

export default Header;

import { format } from "date-fns";
import { useContext } from "react";
import { DateContext } from "../../../context";
import styles from "../style.module.scss";

const Header = () => {
  const [currentDateOfThisMonth] = useContext(DateContext);
  return (
    <h2 className={styles.header}>
      {format(currentDateOfThisMonth, "MMMM yyyy")}
    </h2>
  );
};

export default Header;

import styles from "../style.module.scss";
import Day from "../Days";

const Week = ({ date }) => {
  const day = new Array(7)
    .fill(null)
    .map((_, index) => <Day date={date} index={index} key={index} />);
  return <tr className={styles.weekContainer}>{day}</tr>;
};

export default Week;

import styles from "./CostDate.module.css";
function CostDate({ date }) {
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className={styles.costDate}>
      <div className={styles.costDate}>{month}</div>
      <div className={styles.costDateYear}>{year}</div>
      <div className={styles.costDateDay}>{day}</div>
    </div>
  );
}

export default CostDate;

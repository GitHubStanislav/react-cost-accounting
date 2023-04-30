import styles from "./CostItem.module.css";
function CostItem({ date, description, amount }) {
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className={styles.costItem}>
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className={styles.costItem__description}>
        <h2>{description}</h2>
        <div className={styles.costItem__price}>{amount}</div>
      </div>
    </div>
  );
}

export default CostItem;

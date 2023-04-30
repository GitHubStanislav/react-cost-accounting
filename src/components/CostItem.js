import styles from "./CostItem.module.css";
function CostItem({ date, description, amount }) {
  return (
    <div className={styles.costItem}>
      <div>{date}</div>
      <div className={styles.costItem__description}>
        <h2>{description}</h2>
        <div className={styles.costItem__price}>{amount}</div>
      </div>
    </div>
  );
}

export default CostItem;

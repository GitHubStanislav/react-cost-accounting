import styles from "./CostItem.module.css";
function CostItem() {
  const costDate = new Date();
  return (
    <div className={styles.costItem}>
      <div>{costDate.toLocaleString()}</div>
      <div className={styles.costItem__description}>
        <h2>Холодильник</h2>
        <div className={styles.costItem__price}>$999.99</div>
      </div>
    </div>
  );
}

export default CostItem;

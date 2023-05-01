import styles from "./CostItem.module.css";
import CostDate from "./CostDate";
import { useState } from "react";

function CostItem({ date, description, amount }) {
  const [description, setDescription] = useState(description);
  return (
    <div className={styles.costItem}>
      <CostDate date={date} />
      <div className={styles.costItem__description}>
        <h2>{description}</h2>
        <div className={styles.costItem__price}>{amount}$</div>
      </div>
    </div>
  );
}

export default CostItem;

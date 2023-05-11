import React, { useContext } from "react";
import { CostContext } from "../App";
import styles from "./CostItem.module.css";
import CostDate from "./CostDate";
import { AiTwotoneDelete } from "react-icons/ai";

function CostItem({ id, date, description, amount }) {
  const deleteCost = useContext(CostContext);
  const handleDeleteClick = () => {
    deleteCost(id);
  };
  return (
    <li>
      <div className={styles.costItem}>
        <CostDate date={date} />
        <div className={styles.costItem__description}>
          <h2>{description}</h2>

          <div className={styles.costItem__price}>{amount}$</div>
          <AiTwotoneDelete
            className={styles.iconDelete}
            onClick={handleDeleteClick}
          />
        </div>
      </div>
    </li>
  );
}

export default CostItem;

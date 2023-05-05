import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CostForm from "./CostForm";
import styles from "./NewCost.module.css";

function NewCost({ onAddCost }) {
  const [isFormVisible, setFormVisible] = useState(false);
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: uuidv4(),
    };
    onAddCost(costData);
    setFormVisible(false);
  };
  const inputCostDataHandler = () => {
    setFormVisible(true);
  };
  const cancelCostHandler = () => {
    setFormVisible(false);
  };
  return (
    <div className={styles.newCost}>
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Додати нову витрату</button>
      )}
      {isFormVisible && (
        <CostForm
          onCancel={cancelCostHandler}
          onSaveCostData={saveCostDataHandler}
        />
      )}
    </div>
  );
}

export default NewCost;

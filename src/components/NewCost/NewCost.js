import CostForm from "./CostForm";
import styles from "./NewCost.module.css";

function NewCost({ onAddCost }) {
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    onAddCost(costData);
  };
  return (
    <div className={styles.newCost}>
      <CostForm onSaveCostData={saveCostDataHandler} />
    </div>
  );
}

export default NewCost;

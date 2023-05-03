import CostForm from "./CostForm";
import styles from "./NewCost.module.css";

function NewCost() {
  const saveCostDataHandler = (inputCostData) => {
    console.log(inputCostData);
  };
  return (
    <div className={styles.newCost}>
      <CostForm onSaveCostData={saveCostDataHandler} />
    </div>
  );
}

export default NewCost;

import CostForm from "./CostForm";
import styles from "./NewCost.module.css";

function NewCost() {
  return (
    <div className={styles.newCost}>
      <CostForm />
    </div>
  );
}

export default NewCost;

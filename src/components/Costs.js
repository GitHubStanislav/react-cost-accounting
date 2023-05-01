import CostItem from "./CostItem";
import styles from "./Costs.module.css";

function Costs({ costs }) {
  return (
    <div className={styles.costs}>
      {costs.map((cost) => {
        return <CostItem key={cost.description} {...cost} />;
      })}
    </div>
  );
}

export default Costs;

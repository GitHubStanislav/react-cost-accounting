import styles from "./CostList.module.css";
import CostItem from "../CostItem";
function CostList({ filteredCosts, deleteCost }) {
  if (!filteredCosts.length) {
    return (
      <h2 className={styles.costListFallback}>В цьому році витрат немає</h2>
    );
  }
  return (
    <ul className={styles.costList}>
      {filteredCosts.map((cost) => {
        return <CostItem key={cost.id} {...cost} />;
      })}
    </ul>
  );
}
export default CostList;

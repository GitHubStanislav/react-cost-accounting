import CostItem from "./CostItem";
import styles from "./Costs.module.css";
import CostFilter from "./NewCost/CostFilter";
import { useState } from "react";

function Costs({ costs }) {
  const [selectedYear, setSelectedYear] = useState("2023");
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };
  return (
    <div className={styles.costs}>
      <CostFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      {costs.map((cost) => {
        return <CostItem key={cost.description} {...cost} />;
      })}
    </div>
  );
}

export default Costs;

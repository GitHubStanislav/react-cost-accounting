import { useState } from "react";
import styles from "./Costs.module.css";
import CostFilter from "./NewCost/CostFilter";
import CostList from "./NewCost/CostList";

function Costs({ costs }) {
  const [selectedYear, setSelectedYear] = useState("2023");
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };
  const filteredCosts = costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div className={styles.costs}>
      <CostFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      <CostList filteredCosts={filteredCosts} />
    </div>
  );
}

export default Costs;

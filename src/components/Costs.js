import { useState } from "react";
import styles from "./Costs.module.css";
import CostFilter from "./NewCost/CostFilter";
import CostList from "./NewCost/CostList";
import CostDiagram from "./CostDiagram";

function Costs({ costs, deleteCost }) {
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
      <CostDiagram costs={filteredCosts} />
      <CostList filteredCosts={filteredCosts} />
    </div>
  );
}

export default Costs;

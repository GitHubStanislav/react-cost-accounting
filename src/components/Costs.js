import CostItem from "./CostItem";
import styles from "./Costs.module.css";
import CostFilter from "./NewCost/CostFilter";
import { useState } from "react";

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
      {!filteredCosts.length && (
        <p className={styles.p}>В цьому році витрат немає</p>
      )}

      {!!filteredCosts.length &&
        filteredCosts.map((cost) => {
          return <CostItem key={cost.id} {...cost} />;
        })}
    </div>
  );
}

export default Costs;

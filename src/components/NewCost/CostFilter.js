import styles from "./CostFilter.module.css";

const CostsFilter = ({ onChangeYear, year }) => {
  const yearChangeHandler = (event) => {
    onChangeYear(event.target.value);
  };

  return (
    <div className={styles.costsFilter}>
      <div className={styles.costsFilterControl}>
        <label>Вибір по року</label>
        <select value={year} onChange={yearChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;

import styles from "./CostForm.module.css";
function CostForm() {
  return (
    <form>
      <div className={styles.newCostControls}>
        <div className={styles.newCostControl}>
          <label>Назва</label>
          <input type="text" />
        </div>
        <div className={styles.newCostControl}>
          <label>Сума</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className={styles.newCostControl}>
          <label>Дата</label>
          <input type="date" min="2020-01-01" step="2023-12-31" />
          <div className={styles.newCostActions}>
            <button type="submit">Додати витрати</button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default CostForm;

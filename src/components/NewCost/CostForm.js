import styles from "./CostForm.module.css";
import { useState } from "react";
function CostForm({ onSaveCostData, onCancel }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const costData = {
      description: name,
      amount: amount,
      date: new Date(date),
    };
    if (costData.description !== "" && costData.amount !== "") {
      onSaveCostData(costData);
      setName("");
      setAmount("");
      setDate("");
    } else {
      setPlaceholder("add some text...");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.newCostControls}>
        <div className={styles.newCostControl}>
          <label>Назва</label>
          <input
            placeholder={placeholder}
            value={name}
            onChange={nameChangeHandler}
            type="text"
          />
        </div>
        <div className={styles.newCostControl}>
          <label>Сума</label>
          <input
            placeholder={placeholder}
            value={amount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className={styles.newCostControl}>
          <label>Дата</label>
          <input
            value={date}
            onChange={dateChangeHandler}
            type="date"
            min="2020-01-01"
            step="2023-12-31"
          />
          <div className={styles.newCostActions}></div>
        </div>
        <button type="submit">Додати витрати</button>
        <button type="button" onClick={onCancel}>
          Відміна
        </button>
      </div>
    </form>
  );
}
export default CostForm;

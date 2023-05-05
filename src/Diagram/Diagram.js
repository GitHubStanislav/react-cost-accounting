import DiagramBar from "./DiagramBar";
import styles from "./Diagram.module.css";
function Diagram(props) {
  const dataSetsValues = props.dataSets.map((dataSet) => dataSet.value);
  const maxMonthCosts = Math.max(...dataSetsValues);

  return (
    <div className={styles.diagram}>
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          label={dataSet.label}
          maxValue={maxMonthCosts}
          value={dataSet.value}
        />
      ))}
    </div>
  );
}

export default Diagram;

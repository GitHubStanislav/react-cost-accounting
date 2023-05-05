import styles from "./DiagramBar.module.css";
function DiagramBar(props) {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className={styles.diagramBar}>
      <div className={styles.diagramBarInner}>
        <div
          style={{ height: barFillHeight }}
          className={styles.diagramBarFill}
        >
          {}
        </div>
      </div>
      <div className={styles.diagramBarLabel}>{props.label}</div>
    </div>
  );
}

export default DiagramBar;

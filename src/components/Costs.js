import CostItem from "./CostItem";

function Costs({ costs }) {
  return (
    <div>
      {costs.map((cost) => {
        return <CostItem key={cost.description} {...cost} />;
      })}
    </div>
  );
}

export default Costs;

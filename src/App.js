import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Costs from "./components/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COST = [
  {
    id: uuidv4(),
    date: new Date(2023, 2, 13),
    description: "Fridge1",
    amount: 9.99,
  },
  {
    id: uuidv4(),
    date: new Date(2023, 3, 10),
    description: "Fridge2",
    amount: 999.99,
  },
  {
    id: uuidv4(),
    date: new Date(2023, 4, 5),
    description: "Fridge3",
    amount: 99.99,
  },
];
function App() {
  const [costs, setCosts] = useState(INITIAL_COST);
  console.log(costs);
  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };
  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;

import "./App.css";
import Costs from "./components/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {
  const costs = [
    {
      date: new Date(2023, 2, 13),
      description: "Fridge1",
      amount: 9.99,
    },
    {
      date: new Date(2023, 3, 10),
      description: "Fridge2",
      amount: 999.99,
    },
    {
      date: new Date(2023, 4, 5),
      description: "Fridge3",
      amount: 99.99,
    },
  ];
  const addCostHandler = (cost) => {
    costs.push(cost);
  };
  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;

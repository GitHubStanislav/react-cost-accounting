import "./App.css";
import CostItem from "./components/CostItem";

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

  return (
    <div className="App">
      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      />
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      />
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      />
    </div>
  );
}

export default App;

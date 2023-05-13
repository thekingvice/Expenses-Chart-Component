import "./App.css";
import jsonData from "../public/data.json";
// Import JSON data
// Link JSON data to bar chart (100% = highest value)

function App() {
  const test = () => {
    console.log(jsonData);
  };

  //style height = heighest number in json/ number of element

  // data.forEach(item => {
  //   if (item.amount > highestAmount) {
  //     highestAmount = item.amount;
  //   }
  // });

  return (
    <div className="App">
      <div className="App__balance">
        <div className="App__balance-wrapper">
          <p>My Balance</p>
          <h1>$921.48</h1>
        </div>
        <img onClick={test} src="logo.svg" alt="logo" />
      </div>

      <div className="App__spending">
        <h1>Spending - Last 7 days</h1>
      </div>
    </div>
  );
}

export default App;

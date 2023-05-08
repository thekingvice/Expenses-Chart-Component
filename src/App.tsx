import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App__balance">
        <div className="App__balance-wrapper">
          <p>My Balance</p>
          <h1>$921.48</h1>
        </div>
        <img src="logo.svg" alt="logo" />
      </div>

      <div className="App__spending">
        <h1>Spending - Last 7 days</h1>
      </div>
    </div>
  );
}

export default App;

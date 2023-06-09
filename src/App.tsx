import "./App.css";
import jsonData from "../public/data.json";
import { useState, useEffect } from "react";

function App() {
  const test = () => {
    console.log(jsonData);
  };

  const [day] = useState(new Date().getDay());
  const [highestValue, setHighestValue] = useState(0);
  const [barColor, setBarColor] = useState([
    "App__bar",
    "App__bar",
    "App__bar",
    "App__bar",
    "App__bar",
    "App__bar",
    "App__bar",
  ]);

  const valueToPercentage = (value: number) => {
    const decimal = value / highestValue;
    const percent = Math.floor(decimal * 100);
    return percent;
  };

  const parseHighestValue = () => {
    jsonData.forEach((item) => {
      if (item.amount > highestValue) {
        setHighestValue(item.amount);
      }
    });
  };

  const handleHighlightedBar = () => {
    const list = [
      "App__bar",
      "App__bar",
      "App__bar",
      "App__bar",
      "App__bar",
      "App__bar",
      "App__bar",
    ];
    if (day === 0) {
      list[6] = "App__bar App__bar-highlight";
      setBarColor(list);
    } else {
      list[day - 1] = "App__bar App__bar-highlight";
      setBarColor(list);
    }
  };

  useEffect(() => {
    parseHighestValue();
    handleHighlightedBar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highestValue]);

  return (
    <div className="App">
      <div className="App__balance">
        <div className="App__balance-wrapper">
          <p>My Balance</p>
          <h1 className="App__balance-total">$921.48</h1>
        </div>
        <img onClick={test} src="logo.svg" alt="logo" />
      </div>

      <div className="App__spending">
        <h1 className="App__spending-header">Spending - Last 7 days</h1>
        <div className="App__table">
          <div className="App__bar-wrapper">
            <div
              className={barColor[0]}
              style={{ height: `${valueToPercentage(jsonData[0].amount)}%` }}
            ></div>
            <p className="App__day">{jsonData[0].day}</p>
          </div>
          <div className="App__bar-wrapper">
            <div
              className={barColor[1]}
              style={{ height: `${valueToPercentage(jsonData[1].amount)}%` }}
            ></div>
            <p className="App__day">{jsonData[1].day}</p>
          </div>
          <div className="App__bar-wrapper">
            <div
              className={barColor[2]}
              style={{ height: `${valueToPercentage(jsonData[2].amount)}%` }}
            ></div>
            <p className="App__day">{jsonData[2].day}</p>
          </div>
          <div className="App__bar-wrapper">
            <div
              className={barColor[3]}
              style={{ height: `${valueToPercentage(jsonData[3].amount)}%` }}
            ></div>
            <p className="App__day">{jsonData[3].day}</p>
          </div>
          <div className="App__bar-wrapper">
            <div
              className={barColor[4]}
              style={{ height: `${valueToPercentage(jsonData[4].amount)}%` }}
            ></div>
            <p className="App__day">{jsonData[4].day}</p>
          </div>
          <div className="App__bar-wrapper">
            <div
              className={barColor[5]}
              style={{ height: `${valueToPercentage(jsonData[5].amount)}%` }}
            ></div>
            <p className="App__day">{jsonData[5].day}</p>
          </div>
          <div className="App__bar-wrapper">
            <div
              className={barColor[6]}
              style={{ height: `${valueToPercentage(jsonData[6].amount)}%` }}
            ></div>
            <p className="App__day">{jsonData[6].day}</p>
          </div>
        </div>

        <div className="App__divider"></div>
        <div className="App__total">
          <div className="App__monthly">
            <p className="App__label">Total this month</p>
            <h1 className="App__amount">$478.33</h1>
          </div>
          <div className="App__change">
            <h1 className="App__percentage">+2.4%</h1>
            <p className="App__comparison">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

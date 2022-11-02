import React from "react";
import Header from "./components/Header";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";
import { GlobalContextProvider } from "./context/GlobalState";
import "./App.css";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import Chart from "./components/Chart";

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="content bg-blur">
        <Header />
        <div className="app-wrapper">
          <div className="chart">
            <Balance />
            <Chart />
          </div>
          <div className="addTransaction">
            <AddTransaction />
            <div className="list">
              <IncomeList />
              <ExpenseList />
            </div>
          </div>
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default App;
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map(
    incomeTransaction => incomeTransaction.incomeAmount
  );

  const expenseAmounts = expenseTransactions.map(
    expenseTransaction => expenseTransaction.expenseAmount
  );

  const totalIncome = incomeAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalExpenses = expenseAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="balance">    
      <h2>Balance : {(totalIncome - totalExpenses).toFixed(2)}$</h2>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+{totalIncome}$</p>
        </div>
        <div className="moins">
          <h3>Expense</h3>
          <p>-{totalExpenses}$</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
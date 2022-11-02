import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { FaTrashAlt } from "react-icons/fa";

export default function ExpenseTransaction({expenseTransaction}) {
  const { deleteTransaction } = useContext(GlobalContext);
  let expenseDate = new Date(expenseTransaction.expenseDate);
  let day = expenseDate.getDate();
  let month = expenseDate.getMonth();
  let year = expenseDate.getFullYear();
  
      return (
    <div>
      <li className="transaction">
      <span className="transaction-text">{expenseTransaction.expenseText}</span>
      <span className="transaction-amount">{expenseTransaction.expenseAmount}$</span>
      <span className="transaction-category">{expenseTransaction.expenseCategory}</span>
      <span>{day + "/" + month + "/" + year}</span>
      <button
        onClick={() => deleteTransaction(expenseTransaction.id)}
        className="delete-btn">
        <FaTrashAlt />
      </button>
      </li>
    </div>
  )
};
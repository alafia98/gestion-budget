import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { FaTrashAlt } from "react-icons/fa";

export default function IncomeTransaction({incomeTransaction}) {
  const { deleteTransaction } = useContext(GlobalContext);
  let incomeDate = new Date(incomeTransaction.incomeDate);
  let day = incomeDate.getDate();
  let month = incomeDate.getMonth();
  let year = incomeDate.getFullYear();


      return (
    <div>
      <li className="transaction">
      <span className="transaction-text">{incomeTransaction.incomeText}</span>
      <span className="transaction-amount">{incomeTransaction.incomeAmount}$</span>
      <span className="transaction-category">{incomeTransaction.incomeCategory}</span>
      <span>{day + "/" + month + "/" + year}</span>
      <button
        onClick={() => deleteTransaction(incomeTransaction.id)}
        className="delete-btn"><link to='sweet'></link>
        <FaTrashAlt />
      </button>
      </li>
    </div>
  )
};
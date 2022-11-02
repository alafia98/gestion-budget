import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
    incomeCategory: null,
    incomeDate: null
  });

  const { incomeText, incomeAmount, incomeCategory, incomeDate } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();

    if (incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1,
        incomeCategory,
        incomeDate
      };
      addIncome(newIncomeTransaction);
      setIncome({
        incomeText: "",
        incomeAmount: 0,
        incomeCategory: null,
        incomeDate: null
      });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Income has been added',
        showConfirmButton: false,
        timer: 1500
      })
      const data = [
        {name: 'incomeText', IA: incomeAmount}];
    }
  };

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
    expenseCategory: null,
    expenseDate: null
  });

  const { expenseText, expenseAmount, expenseCategory, expenseDate } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
        expenseCategory,
        expenseDate
      };
      addExpense(newExpenseTransaction);
      setExpense({
        expenseText: "",
        expenseAmount: 0,
        expenseCategory: null,
        expenseDate: null
      });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Expense has been added',
        showConfirmButton: false,
        timer: 1500
      })
    }
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input type="text" name="incomeText" value={incomeText} placeholder="Add Income..." autoComplete="off" onChange={onChangeIncome}/>
          <input type="number" name="incomeAmount" value={incomeAmount} placeholder="Amount" autoComplete="off" onChange={onChangeIncome}/>
          <select value={incomeCategory} autoComplete="off" onChange={onChangeIncome}>
            <option>Select Category</option>
            <option >Travel</option>
            <option >Freelence</option>
            <option >Shopping</option>
            <option >Food</option>
            <option >Debit</option>
            <option >Credit</option>
            <option >Other</option>
          </select>
          <input type="date" name="incomeDate" value={incomeDate} autoComplete="off" onChange={onChangeIncome}/>
          <input type="submit" value="Submit" onClick={Swal.fire} />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input type="text" name="expenseText" value={expenseText} placeholder="Add Expense..." autoComplete="off" onChange={onChangeExpense}/>
          <input type="number" name="expenseAmount" value={expenseAmount} placeholder="Amount" autoComplete="off" onChange={onChangeExpense} />
          <select value={expenseCategory} autoComplete="off" onChange={onChangeExpense}>
            <option>Select Category</option>
            <option >Travel</option>
            <option >Freelence</option>
            <option >Shopping</option>
            <option >Food</option>
            <option >Debit</option>
            <option >Credit</option>
            <option >Other</option>
          </select>
          <input type="date" name="expenseDate" value={expenseDate} autoComplete="off" onChange={onChangeExpense
          }/>
          <input type="submit" value="Submit" onClick={Swal.fire}/>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
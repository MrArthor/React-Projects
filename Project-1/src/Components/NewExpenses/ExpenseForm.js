/** @format */
import React from "react";
import { useState } from "react";
import "./NewExpense.css";
const ExpenseForm = (props) => {
  //   const [UpdatedState, UpdateState] = useState({
  //     EnteredTitle: "",
  //     EnteredAmount: "",
  //     EnteredDate: "",
  //   });

  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");
  const TitleValueChange = (event) => {
    setEnteredTitle(event.target.value);
  };
  const AmountValueChange = (event) => {
    setEnteredAmount(event.target.value);
  };
  const DateValueChange = (event) => {
    setEnteredDate(event.target.value);
  };
  const SubmitExpense = (event) => {
    event.preventDefault();
    const AddExpense = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate),
    };
    props.AddExpense(AddExpense);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={SubmitExpense}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' name='title' value={EnteredTitle} placeholder='Title' onChange={TitleValueChange} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='.01'
            step='.01'
            value={EnteredAmount}
            name='amount'
            placeholder='Amount'
            onChange={AmountValueChange}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            value={EnteredDate}
            type='date'
            name='date'
            placeholder='Date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={DateValueChange}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

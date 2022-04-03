/** @format */

import React from "react";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {



  const ExpenseAdded = (expense) => {
    const Expenses = {
      ...expense,
      id: Math.floor(Math.random() * 100),
    };
    props.AddExpense(Expenses);

  };
  return (
    <div className='new-expense'>
      <ExpenseForm AddExpense={ExpenseAdded}></ExpenseForm>
    </div>
  );
};

export default NewExpense;

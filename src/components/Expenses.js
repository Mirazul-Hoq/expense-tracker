import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {

    const expenseItem = props.expenses.map(expense => <ExpenseItem expense={expense}/>);

  return (
    <div className='expenses'>
        { expenseItem }
    </div>
  )
}

export default Expenses;
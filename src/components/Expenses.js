import React from 'react';
import Card from './Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {

    const expenseItem = props.expenses.map(expense => <ExpenseItem expense={expense}/>);

  return (
    <Card className='expenses'>
        { expenseItem }
    </Card>
  )
}

export default Expenses;
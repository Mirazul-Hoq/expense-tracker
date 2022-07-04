import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = () => {
  return (
    <div className='expense-item'>
        <div>March 10th, 2022</div>
        <div className='expense-item__description'>
            <h2>Car Insurance</h2>
            <div className='expense-item__price'>$249.44</div>
        </div>
    </div>
  )
}

export default ExpenseItem;
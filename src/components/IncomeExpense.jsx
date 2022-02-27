import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import '../styles/incomeExpense.css';
function IncomeExpense() {
    const { transaction } = useContext(GlobalContext);
    const amounts = transaction.map(transac => transac.amount)
    const income = amounts.filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    const expense = amounts.filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    return (
        <div className='incomeExpense'>
            <div className='income'>
                <h4>Income</h4>
                <p>{income}</p>
            </div>
            {/* <div class="vl"></div> */}
            <div className='expense'>
                <h4>Expense</h4>
                <p>{expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
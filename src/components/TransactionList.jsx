import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Transaction } from './Transaction';

const TransactionList = params => {
    const { transaction } = useContext(GlobalContext);
    console.log(transaction)

    return (
        <>
            <h3>History</h3>
            <ul id='list' className='list'>
                {transaction.map(trans => (
                    <Transaction key={trans.id} transaction={trans} />
                ))}
            </ul>
        </>
    );
};

export default TransactionList;
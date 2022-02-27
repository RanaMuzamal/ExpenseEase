import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import '../styles/AddTransaction.css';
function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text == " " ? alert("Enter Item") : "",
      amount: +amount
    }
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  }
  return (
    <div className='AddTransaction'>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit} >
        <input type="text" placeholder='Add Text' value={text} onChange={(e) => { setText(e.target.value) }} /><br />
        <input type="number" placeholder='Add Amount' value={amount} onChange={(e) => { setAmount(e.target.value) }} /><br />
        <button type='submit'>Add Transaction</button>
      </form>

    </div>
  )
}

export default AddTransaction
import React, { useState, useContext } from "react";
import {GLobalContext} from "../Context/GlobalState";

export const AddTransaction = () => {
  const [Text, setText] = useState("");
  const [Amount, setAmount] = useState(0);

  const { addTransactions } = useContext(GLobalContext)

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id : Math.floor(Math.random() * 100000000),
      text : Text,
      amount : +Amount
    }

    console.log(newTransaction)

    addTransactions(newTransaction);
  }

  return (
    <div>
      <h3>Add New transaction</h3>
      <form onSubmit={onSubmit} >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={Text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter Text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (Negative - expense, positive - income )
          </label>
          <input
            type="number"
            value={Amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Enter Amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

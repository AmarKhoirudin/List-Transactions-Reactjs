import React from "react";
import { Header } from "./Component/Header";
import { Balance } from "./Component/Balance";
import { IncomeExpenses } from "./Component/IncomeExpenses";
import { TransactionList } from "./Component/TransactionList";
import { AddTransaction } from "./Component/AddTransaction";

// Context
import { GLobalProvider } from "./Context/GlobalState";

import "./App.css";

function App() {
  return (
    <GLobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GLobalProvider>
  );
}

export default App;

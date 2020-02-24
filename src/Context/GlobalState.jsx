import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
    transactions: [
        {id: 1, text: "Flower", amount: -20},
        {id: 2, text: "Salary", amount: 300},
        {id: 3, text: "Book", amount: -10},
        {id: 4, text: "Camera", amount: 150}
    ]
}

//  Create Context
export const GLobalContext = createContext(initialState);

// Provider Component
export const GLobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState );

    // Actions
    const deleteTransactions = (id) =>  {
        console.log("berhasil", id)
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    } 

    const addTransactions = (transaction) =>  {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    } 

    return (<GLobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions
    }}>
        {children}
    </GLobalContext.Provider>)
}
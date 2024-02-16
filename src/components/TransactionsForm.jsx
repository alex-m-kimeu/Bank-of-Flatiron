import { useState } from "react";

export const TransactionsForm = ({ addTransaction }) => {
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const newTransaction = {
            date,
            description,
            category,
            amount,
        }
        fetch("https://transactions-api-psi.vercel.app/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTransaction)
        })
        .then(response => response.json())
        .then(data => {
            addTransaction(data)
        })
        setDate("")
        setDescription("")
        setCategory("")
        setAmount("")
    }

    return (
        <div className="transaction_form">
            <h2>Add New Transaction</h2>
            <form onSubmit={handleSubmit}>
                <label>Date</label>
                <input 
                type="date" 
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />

                <label>Description</label>
                <input 
                type="text" 
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />

                <label>Category</label>
                <input 
                type="category" 
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                />

                <label>Amount</label>
                <input 
                type="number" 
                id="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                />

                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
}
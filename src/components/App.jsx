import { useState, useEffect } from "react";
import data from "../data/appData";
import { Header } from "./Header";
import { Transactions } from "./Transactions";
import { Search } from "./Search";
import { TransactionsForm } from "./TransactionsForm";
import { Footer } from "./Footer";

function App() {
    const [transactions, setTransactions] = useState([])
    const [search, setSearch] = useState("")

    // Fetch Transactions
    useEffect(() => {
        fetch("https://transactions-api-psi.vercel.app/transactions")
            .then(resp => resp.json())
            .then(data => setTransactions(data))
    }, [])

    // Add New Transaction
    function addTransaction(transaction) {
        setTransactions([...transactions, transaction])
    }

    //Search function
    const filteredTransactions = transactions.filter(transaction => {
        return transaction.description.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <>
        <Header name={data.name} logo={data.logo}/>
        <main>
            <TransactionsForm addTransaction={addTransaction}/>
            <h2 className="title_transaction">My Transactions</h2>
            <Search search={search} setSearch={setSearch}/>
            <Transactions transactions={filteredTransactions}/>
        </main>
        <Footer copyright={data.copyright}/>
        </>
    );
}

export default App;
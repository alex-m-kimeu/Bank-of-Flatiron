import { useState ,useEffect } from "react";
import Transactions from "./Transactions";
import AddTransaction from "./AddTransaction";

function Home() {
    const [transactions, setTransactions] = useState(null)

    // Fetch transactions list
    useEffect(() => {
        fetch("https://transactions-api-psi.vercel.app/transactions")
            .then(resp => resp.json())
            .then(data => setTransactions(data))
    }, [])

    // Add new transaction
    
    return (
        <>
        <AddTransaction />
        {transactions && <Transactions transactions={transactions}/>}
        </>
    );
}

export default Home;
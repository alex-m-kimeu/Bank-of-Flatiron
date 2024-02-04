import { useState ,useEffect } from "react";
import Transactions from "./Transactions";

function Home() {
    const [transactions, setTransactions] = useState(null)

    useEffect(() => {
        fetch("https://transactions-api-psi.vercel.app/transactions")
            .then(resp => resp.json())
            .then(data => setTransactions(data))
    }, [])
    return (
        <>
        {transactions && <Transactions transactions={transactions}/>}
        </>
    );
}

export default Home;
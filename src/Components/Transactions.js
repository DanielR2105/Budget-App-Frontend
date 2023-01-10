import { useEffect, useState } from 'react'
import Transaction from './Transaction'
import axios from 'axios'
const apiUrl = process.env.REACT_APP_API_URL

export default function Transactions() {
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        axios.get(`${apiUrl}/transactions`).then((res) => {
        setTransactions(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    function handleTotal(transactions) {
        let total = 0
        transactions.map((transaction) => {
            total += Number(transaction.amount)
        })
        return total
    }

  return (
    <div>
        <h1>Bank Account Total: {handleTotal(transactions)}</h1>
        <div>
            {transactions.map((transaction, index) => {
                return (
                    <Transaction key={index} transaction={transaction} index={index}/>
                )
            })}
        </div>
    </div>
  )
}

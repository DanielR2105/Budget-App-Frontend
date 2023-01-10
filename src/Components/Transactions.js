import { useEffect, useState } from 'react'
import Transaction from './Transaction'
import axios from 'axios'
import "./Transactions.css"
const apiUrl = process.env.REACT_APP_API_URL

export default function Transactions() {
    const [transactions, setTransactions] = useState([])
    let total = 0
    let dynamicColor = ""
    useEffect(() => {
        axios.get(`${apiUrl}/transactions`).then((res) => {
        setTransactions(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    function handleTotal(transactions) {
        
        transactions.map((transaction) => {
            total += Number(transaction.amount)
        })
        return total
    }

    if (handleTotal(transactions) > 1000) {
        dynamicColor = "green"
    } else if (handleTotal(transactions) > 0 && handleTotal(transactions) < 1000) {
        dynamicColor = "black"
    } else if (handleTotal(transactions) < 0) {
        dynamicColor = "red"
    }

  return (
    <div>
        <h1>Bank Account Total: <span className={dynamicColor} > ${handleTotal(transactions)}</span></h1>
        <div className='transaction' >
            <h2>Date</h2>
            <h2>Item Name</h2>
            <h2>Amount</h2>
        </div>
        <div className='transactions' >
            {transactions.map((transaction, index) => {
                return (
                    <Transaction key={index} transaction={transaction} index={index}/>
                )
            })}
        </div>
    </div>
  )
}

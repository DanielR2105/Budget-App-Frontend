import React from 'react'
import { Link } from 'react-router-dom'
import "./Transactions.css"

export default function Transaction({transaction, index}) {
    let dynamicColor = ""
    if (transaction.amount > 0) {
        dynamicColor = "green"
    } else if (transaction.amount === 0) {
        dynamicColor = "white"
    } else if (transaction.amount < 0) {
        dynamicColor = "red"
    }
  return (
    <div className='transaction' >
        <div className='cell' >
        <h3>{transaction.date}</h3>
        </div>
        <div className='cell' >
        <Link to={`/transactions/${index}`} >
        <h3>{transaction.item_name}</h3>
        </Link>
        </div>
        <div className='cell' >
        <h3><span className={dynamicColor} >${transaction.amount}</span></h3>
        </div>
    </div>
  )
}

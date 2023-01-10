import React from 'react'
import { Link } from 'react-router-dom'

export default function Transaction({transaction, index}) {
  return (
    <div>
        <h2>{transaction.date}</h2>
        <Link to={`/transactions/${index}`} >
        <h2>{transaction.item_name}</h2>
        </Link>
        <h2>${transaction.amount}</h2>
    </div>
  )
}

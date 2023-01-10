import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
const apiUrl = process.env.REACT_APP_API_URL


export default function Details() {
    const [transaction, setTransaction] = useState({})
    const {index} = useParams()
    useEffect(() => {
        axios.get(`${apiUrl}/transactions/${index}`).then((res) => {
        setTransaction(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    const navigate = useNavigate()

    function handleDelete() {
        axios.delete(`${apiUrl}/transactions/${index}`).then(() => {
            navigate("/transactions")
        })
        .catch((err) => {
            console.log(err)
        })
    }

  return (
    <div>
        <h1>Transaction Details</h1>
        <h2>Date: {transaction.date}</h2>
        <h2>Name: {transaction.item_name}</h2>
        <h2>Amount: ${transaction.amount}</h2>
        <h2>From: {transaction.from}</h2>
        <h2>Category: {transaction.category}</h2>
        <button onClick={handleDelete}>Delete</button>
        <Link to={`/transactions/${index}/edit`} >
        <button>Edit</button>
        </Link>
    </div>
  )
}

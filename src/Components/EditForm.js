import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import "./form.css"
const apiUrl = process.env.REACT_APP_API_URL

export default function Editform() {
    const [transaction, setTransaction] = useState({
        item_name: "",
        amount: 0,
        date: "",
        from: "",
        category: ""
    })
    const {index} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${apiUrl}/transactions/${index}`).then((res) => {
        setTransaction(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [index])

    function handleTextChange(event) {
        setTransaction({
            ...transaction,
            [event.target.id]: event.target.value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
            axios.put(`${apiUrl}/transactions/${index}`, transaction).then(() => {
                navigate(`/transactions/${index}`)
            })
            .catch((err) => {
                console.log(err)
            })
    }

  return (
    <div className="form-wrapper" >
        <h1>Edit a transaction</h1>
        <form onSubmit={handleSubmit} >
            <label htmlFor="Date" >Date</label>
            <input 
            type="text"
            id="date"
            value={transaction.date}
            onChange={handleTextChange}
            />
            <br/>
            <label htmlFor="Name" >Name</label>
            <input 
            type="text"
            id="item_name"
            value={transaction.item_name}
            onChange={handleTextChange}
            />
            <br/>
            <label htmlFor="Amount" >Amount</label>
            <input 
            type="number"
            id="amount"
            value={transaction.amount}
            onChange={handleTextChange}
            />
            <br/>
            <label htmlFor="From" >From</label>
            <input 
            type="text"
            id="from"
            value={transaction.from}
            onChange={handleTextChange}
            />
            <br/>
            <label htmlFor="Category" >Category</label>
            <input 
            type="text"
            id="category"
            value={transaction.category}
            onChange={handleTextChange}
            />
            <br/>
            <input type="submit" />
        </form>
    </div>
  )
}

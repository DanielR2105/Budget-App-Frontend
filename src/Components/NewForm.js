import { useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"
import "./form.css"
const apiUrl = process.env.REACT_APP_API_URL

export default function NewForm() {
    let navigate = useNavigate()

    const [transaction, setTransaction] = useState({
        item_name: "",
        amount: 0,
        date: "",
        from: "",
        category: ""
    })

    function handleTextChange(event) {
        setTransaction({
            ...transaction,
            [event.target.id]: event.target.value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
            axios.post(`${apiUrl}/transactions`, transaction).then(() => {
                navigate("/transactions")
            })
            .catch((err) => {
                console.log(err)
            })
    }

  return (
    <div className="form-wrapper">
        <h1>Add a new item</h1>
        <form onSubmit={handleSubmit} >
            <label htmlFor="Date" >Date</label>
            <input 
            type="text"
            id="date"
            onChange={handleTextChange}
            />
            <br/>
            <label htmlFor="Name" >Name</label>
            <input 
            type="text"
            id="item_name"
            onChange={handleTextChange}
            />
            <br/>
            <label htmlFor="Amount" >Amount</label>
            <input 
            type="number"
            id="amount"
            onChange={handleTextChange}
            />
            <br/>
            <label htmlFor="From" >From</label>
            <input 
            type="text"
            id="from"
            onChange={handleTextChange}
            />
            <br/>
            <label htmlFor="Category" >Category</label>
            <input 
            type="text"
            id="category"
            onChange={handleTextChange}
            />
            <br/>
            <input type="submit" />
        </form>
    </div>
  )
}

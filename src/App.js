import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './Components/Nav';
import Home from "./Components/Home";
import NewForm from "./Components/NewForm";
import EditForm from "./Components/EditForm"
import Transactions from "./Components/Transactions";
import Details from "./Components/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transactions/new" element={<NewForm />} />
          <Route path="/transactions/:index" element={<Details />} />
          <Route path="/transactions/:index/edit" element={<EditForm />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

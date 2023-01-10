import { Link } from "react-router-dom";

export default function Nav() {
    return (
      <header>
        <article>
          <h1>
            <Link to="/">
              Budget App
            </Link>
          </h1>
        </article>
        <nav>
            <div>
              <Link to="/transactions">All Transactions</Link>
              </div>
              <div>
              <Link to="/transactions/new">Add Transaction</Link>
              </div>
        </nav>
      </header>
    );
  }

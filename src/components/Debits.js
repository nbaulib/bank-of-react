/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import { Component } from "react";
import {Link} from 'react-router-dom';
// based off form component example
class Debits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descInput: "",
      amountInput: "",
      showForm: false
    };
  }

  handleDesc = (event) => {
    this.setState({ descInput: event.target.value });
  };

  handleAmount = (event) => {
    this.setState({ amountInput: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { descInput, amountInput } = this.state;

    if (descInput && amountInput) {
      this.props.addDebit(descInput, amountInput);
      // clear input fields
      this.setState({ descInput: "", amountInput: "" });
    }
  }

  render() {
    const { debits, accountBalance } = this.props;

    return (
      <div>
        <h1>Debits</h1>
        <h3>Account Balance: ${Number(accountBalance).toFixed(2)}</h3>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Description"
            value={this.state.descInput}
            onChange={this.handleDesc}
          />
          <input
            type="number"
            step="0.01"
            placeholder="Amount"
            value={this.state.amountInput}
            onChange={this.handleAmount}
          />
          <button type="submit">Add Debt</button>
        </form>

        <h2>Debt History</h2>

        <ul>
          {debits.map((debit, index) => (
            <li key={index}>
              <strong>{debit.description}</strong> — $
              {debit.amount.toFixed(2)} on {debit.date.slice(0, 10)}
            </li>
          ))}
        </ul>

        <br />
        <Link to="/">Return to Home</Link>
      </div>
    );

  }
}
export default Debits;
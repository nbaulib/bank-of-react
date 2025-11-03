/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import { Component } from "react";
import { Link } from 'react-router-dom';

// based of form component example

class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descInput: "",
      amountInput: "",
      showForm: false
    };
  }


  updateDesc = (event) => {
    this.setState({ descInput: event.target.value });
  };

  updateAmount = (event) => {
    this.setState({ amountInput: event.target.value });
  };

  sumbit = (event) => {
    event.preventDefault();
    const { descInput, amountInput } = this.state;

    if (descInput && amountInput) {
      this.props.addCredit(descInput, amountInput);
      // clear input fields
      this.setState({ descInput: "", amountInput: "" });
    }
  }

  render() {  // Conditional rendering
    const { credits, accountBalance } = this.props;

    return (
      <div>
        <h1>Credits</h1>
        <h3>Account Balance: ${Number(accountBalance).toFixed(2)}</h3>

        <form onSubmit={this.submit}>
          <input
            type="text"
            placeholder="Description"
            value={this.state.descInput}
            onChange={this.updateDesc}
          />
          <input
            type="number"
            step="0.01"
            placeholder="Amount"
            value={this.state.amountInput}
            onChange={this.updateAmount}
          />
          <button type="submit">Add Credit</button>
        </form>

        <h2>Credit History</h2>

        <ul>
          {this.props.credits.map((credit, index) => (
            <li key={index}>
              <strong>{credit.description}</strong> — $
              {credit.amount.toFixed(2)} on {credit.date.slice(0, 10)}
            </li>
          ))}
        </ul>

        <br />
        <Link to="/">Return to Home</Link>
      </div>
    );

  }
}

export default Credits;
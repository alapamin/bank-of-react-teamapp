import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';


class Debits extends Component{
  constructor(){
    super()
    this.state = {
      debit: {
        description: '',
        amount: 0,
        date: this.getToday()
      }
    }
  }

  getToday = () =>{
    let newDate = new Date();
    let date = (newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' + newDate.getFullYear();
    return date;
  }

  handleChange = (e) => {
    const updatedDebit = {...this.state.debit};
    const inputField = e.target.name;
    console.log(e.target.name)
    const inputValue = e.target.value;
    updatedDebit[inputField] = inputValue;

    this.setState({debit: updatedDebit})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newDebit = {...this.state.debit};
    if(newDebit.description === ''){
      alert('Enter a new descriptions');
      return;
    }
    if(Number(newDebit.amount) === 0){
      alert('Enter a non-zero amount');
      return;
    }
    this.props.updateDebits(this.state.debit)
  }

  render(){
    return(
      <>
        
        <h1>-- Debits --</h1>
        
        <div>
          <h2>Display Debits</h2>
          <table>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
            {this.props.allDebits.map(debit => {
              return <tr key={debit.id}>
                <td>{debit.description}</td>
                <td>{debit.amount}</td>
                <td>{debit.date}</td>
              </tr>
            })}
          </table>
          <div>
            <h2>Total: </h2>
            <AccountBalance accountBalance={this.props.accountBalance}/>
          </div>
        </div>

        <div>
          <h2>Add Debit</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="description">Description - </label>
              <input type="text" name="description" onChange={this.handleChange} value={this.state.debit.description}></input>
            </div>
            <div>
              <label htmlFor="amount">Amount - </label>
              <input type="number" name="amount" onChange={this.handleChange} value={Number(this.state.debit.amount)}></input>
            </div>
            <div>
              <label htmlFor="date">Date - {this.getToday()}</label>
            </div>
            <button>Add Debit</button>
          </form>
        </div>
        <div>
          <Link to='/'>Home </Link>
          <Link to='/Login'>Login </Link>
          <Link to='/UserProfile'>User </Link>
          <Link to='/Credits'>Credits </Link>
        </div> 
      </>
    )
  }

}

export default Debits;
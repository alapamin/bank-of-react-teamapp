// src/components/Credits.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

//GIVEN I am on the Credits page
// WHEN I view the Credits display area
// THEN I should see all of my Credits displayed
// AND each Credit should display a Credit description
// AND each Credit should display a Credit amount
// AND each Credit should display a Credit date
// AND all amounts are rounded to 2 decimal places (i.e., 1234567.89)
class Credits extends Component{
  constructor(){
    super()
    this.state = {
      credit: {
        description: '',
        amount: 0,
        date: ''
      }
    }
  }

  getDate = () =>{
    let newDate = new Date();
    let date = (newDate.getMonth() + 1) + '/' + newDate.getDay() + '/' + newDate.getFullYear();
    return date;
  }

  handleChange = (e) => {
    const updatedCredit = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedCredit[inputField] = inputValue

    this.setState({user: updatedCredit})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newCredit = {...this.state.credit};
    
    if(newCredit.description === ''){
      prompt('Enter a new description');
      return;
    }
    if(newCredit.amount === 0){
      prompt('Enter a new amount');
      return;
    }
    newCredit.date = this.getDate();
    this.props.addCredit(newCredit);
  }

  render(){
    return(
      <div>
        <h1>-- Credits --</h1>
        <div>
          <h2>Display Credits</h2>
          <table>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
            {this.props.allCredit.map(credit => {
              return <tr key={credit.id}>
                <td>{credit.description}</td>
                <td>{credit.amount}</td>
                <td>{credit.date}</td>
              </tr>
            })}
          </table>
          <div>
            <h2>Total: </h2>
            <AccountBalance accountBalance={this.props.accountBalance}/>
          </div>
        </div>

        <div>
          <h2>Add Credit</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor='description'>Description - </label>
              <input type="text" name="description" onChange={this.handleChange} value={this.state.description}></input>
            </div>
            <div>
              <label htmlFor='amount'>Amount - </label>
              <input type='number' name='amount' onChange={this.handleChange} value={this.state.amount}></input>
            </div>
            <div>
              <label htmlFor='date'>Date - {this.getDate()}</label>
            </div>
            <button>Add Credit</button>
          </form>
        </div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/Login'>Login</Link>
          <Link to='/UserProfile'>User</Link>
          <Link to='/Debits'>Debits</Link>
        </div>
      </div>
    )
  }

}

export default Credits;
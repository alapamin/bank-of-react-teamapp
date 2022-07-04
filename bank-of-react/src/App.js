// src/App.js

import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';
// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 123457.89,
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      },
      credits: [],
    }
    this.updateCredits = this.updateCredits.bind(this)
  }
  // TODO: Add Component did mount function
  async componentDidMount(){
    let rawCredits = await axios.get("https://moj-api.herokuapp.com/credits");
    let rawDebits = await axios.get("https://moj-api.herokuapp.com/debits");
    
    let credit_total = 0;
    let debit_total = 0;
    

    let debits = rawDebits.data;
    let credits = rawCredits.data;

    debit_total = debits.reduce((prev_debit,curr_debit,index) => prev_debit + curr_debit,0);
    credit_total = credits.reduce((prev_credit,curr_credit,index) => prev_credit + curr_credit,0);

    let accountBalance = credit_total - debit_total;

    this.setState({accountBalance: accountBalance})
    this.setState({debits: debits, credits: credits});
  }

  updateDebits = (debit) => {
    if(debit !== undefined  && this.state.debits !== ''){
      let newDebits = this.state.debits;
      newDebits.push(debit)
      let newAccountBalance = Number(this.state.accountBalance) + Number(debit.amount);
      this.setState({debits: newDebits})
      this.setState({accountBalance: newAccountBalance})


    }
  }

  updateCredits = (credit) => {
    if (credit !== undefined && this.state.credits !== ''){
      let newCredits = this.state.credits;
      newCredits.push(credit)
      let newAccountBalance = Number(this.state.accountBalance) - Number(credit.amount);
      this.setState({credits: newCredits});
      this.setState({accountBalance: newAccountBalance});
      
    }
  }
  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  // Create Routes and React elements to be rendered using React components
  render() {  
    // Create React elements
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)  // Pass props to "LogIn" component


    const DebitsComponent = () => (<Debits accountBalance={this.state.accountBalance} allDebits={this.state.debits} updateCredits={this.updateDebits}/>)
    const CreditsComponent = () => (<Credits accountBalance={this.state.accountBalance} allCredits={this.state.credits} updateCredits={this.updateCredits}/>)

    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/bank-of-react-example-code-gh-pages">
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>

          <Route exact path="/debits" render={DebitsComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
          
        </div>
      </Router>
    );
  }
}

export default App;
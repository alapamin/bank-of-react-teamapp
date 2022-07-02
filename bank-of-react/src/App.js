// src/App.js

import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home'
import UserProfile from './components/UserProfile';
import LogIn from './components/Login'

class App extends Component {
  constructor(){
    super();
    this.state = {
      accountBalance: 999999999999999999.00,
      currentUser: {
        userName: 'Nafew and Alap',
        memberSince: '1/1/200',
      },
    }
  }

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn}/>) //Passes props to login component
    return (
      <Router>
        <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;
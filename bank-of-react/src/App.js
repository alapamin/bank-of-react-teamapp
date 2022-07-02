// src/App.js

import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home'
import UserProfile from './components/UserProfile';

class App extends Component {
  constructor(){
    super();
    this.state = {
      accountBalance: 999999999999999999.00,
      currentUser: {
        userName: 'Nafew and Alap',
        memberSince: '1/1/200',
      }
    }
  }
  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );

    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" render={HomeComponent}></Route>
          <Route exact path="/userProfile" render={UserProfileComponent}></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
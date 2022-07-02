// src/components/Home.js
// The Home component is used to demonstrate the use of Link.

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <iframe title="Bank" src="https://giphy.com/embed/vtm4qejJIl1ERPIrbA" width="480" height="480" frameBorder="0" allowFullScreen></iframe>

        <h1>Bank of React</h1>

        <Link to="/userProfile">User Profile</Link>
        <br/>
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/credits">Credits (to be implemented in the Assignment)</Link>
        <br/>
        <Link to="">Debits (to be implemented in the Assignment)</Link>
        <br/><br/>
        <AccountBalance accountBalance={this.props.accountBalance}/>
      </div>
    );
  }
}

export default Home;
// src/components/Home.js

import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {

    render() {
    return (
        <div>
            <h1>Bank of React</h1>
            <iframe title="Bank" src="https://giphy.com/embed/vtm4qejJIl1ERPIrbA" width="480" height="480" frameBorder="0" allowFullScreen></iframe>

            <AccountBalance accountBalance={this.props.accountBalance}/>
            <Link to="/userProfile">User Profile</Link>
            <br/>
            <Link to="/login">Login</Link>

        </div>
    );
    }
}

export default Home;

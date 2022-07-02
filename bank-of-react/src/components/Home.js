// src/components/Home.js

import React, { Component } from 'react';
import AccountBalance from './AccountBalance';

class Home extends Component {
    render() {
    return (
        <div>
            <h1>Bank of React</h1>
            <iframe title="Bank" src="https://giphy.com/embed/vtm4qejJIl1ERPIrbA" width="480" height="480" frameBorder="0" allowFullScreen></iframe>

            <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
    }
}

export default Home;

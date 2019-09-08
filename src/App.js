import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './app.css';
import Subtotal from './components/Subtotal';
import PickupSavings from './components/PickupSavings';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 500,
            totalSavings: 3.85
        };
    }
    render() {
        return (
            <div className="container">
                <div className="summary-card">
                    <h1>Hello world</h1>
                    <Subtotal price={this.state.total.toFixed(2)} />
                    <PickupSavings price={this.state.totalSavings.toFixed(2)} />
                </div>
            </div>
        );
    }
}

export default App;

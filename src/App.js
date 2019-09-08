import React, { Component } from 'react';
// import { Row, Col } from 'react-bootstrap';
import './app.css';
import Subtotal from './components/Subtotal';
import PickupSavings from './components/PickupSavings';
import TaxesFees from './components/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal.js';
import ItemDetails from './components/ItemDetails/ItemDetails';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 500,
            totalSavings: 3.85,
            taxes: 0,
            estimatedTotal: 100
        };
    }
    render() {
        return (
            <div className="container">
                <div className="summary-card">
                    <h1>Hello world</h1>
                    <Subtotal price={this.state.total.toFixed(2)} />
                    <PickupSavings price={this.state.totalSavings.toFixed(2)} />
                    <TaxesFees taxes={this.state.taxes.toFixed(2)} />
                    <hr />
                    <EstimatedTotal
                        price={this.state.estimatedTotal.toFixed(2)}
                    />
                    <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
                </div>
            </div>
        );
    }
}

export default App;

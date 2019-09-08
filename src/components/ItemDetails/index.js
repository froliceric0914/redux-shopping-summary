import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ItemDetails extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div>
                <Button
                    className="item-details-button"
                    variant="link"
                    onClick={() => this.setState({ open: !this.state.open })}
                >
                    {this.state.open === false ? `See` : `Hide`} item details{' '}
                    {this.state.open === false ? `+` : `-`}
                </Button>
            </div>
        );
    }
}

export default ItemDetails;

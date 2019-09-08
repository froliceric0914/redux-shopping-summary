import React, { Component } from 'react';
import { Button, Col, Row, Media, Collapse } from 'react-bootstrap';

class ItemDetails extends Component {
    constructor(props) {
        super(props);

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
                <Collapse in={this.state.open}>
                    <div>
                        hello wolrd
                        <Media>
                            {/* <Media.Left>
                                <img
                                    width={100}
                                    height={100}
                                    // src="https://cdn.shopify.com/s/files/1/1640/2231/files/turntable_2020_OM_pu_stealth_2-min.jpg?86129"
                                    alt="thumbnail"
                                />
                            </Media.Left> */}
                            <Media.Body>
                                <p>
                                    Essentials by OFM ESS-3085 Racing Style
                                    Leather Gaming Chair, Red
                                </p>
                                <Row className="show-grid">
                                    <Col md={6}>
                                        <strong>{`$${this.props.price}`}</strong>
                                        <br />
                                        <strong className="price-strike">{`$${this.props.price}`}</strong>
                                    </Col>
                                    <Col md={6}>
                                        <strong>Qty: 1</strong>
                                    </Col>
                                </Row>
                            </Media.Body>
                        </Media>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default ItemDetails;

import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default ({ price, ...props }) => (
    <Row className="show-grid">
        <Col md={6}>Subtotal</Col>
        <Col md={6}>{price}</Col>
    </Row>
);

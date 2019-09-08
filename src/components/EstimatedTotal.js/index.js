import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default ({ price }) => (
    <Row className="show-grid">
        <Col md={6}>
            <h2>Est. total</h2>
        </Col>
        <Col md={6}>
            <h2>${price}</h2>
        </Col>
    </Row>
);

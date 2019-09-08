import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default ({ taxes }) => (
    <Row className="show-grid">
        <Col md={6}>Est. taxes & fees (Based on 94085)</Col>
        <Col md={6}>
            <strong>${taxes}</strong>
        </Col>
    </Row>
);

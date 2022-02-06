import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function GridInfo() {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4} className='mb-1 fw-bold'>
                    Name
                </Col>
                <Col xs={6} md={4} className='mb-1 fw-bold'>
                  Location
                </Col>
                <Col xs={6} md={4} className='mb-1 fw-bold'>
                    Quantity
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8}>
                    .col-xs-12 .col-md-8
                </Col>
                <Col xs={6} md={4}>
                  .col-xs-6 .col-md-4
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={4}>
                  .col-xs-6 .col-md-4
                </Col>
                <Col xs={6} md={4}>
                  .col-xs-6 .col-md-4
                </Col>
                <Col xs={6} md={4}>
                  .col-xs-6 .col-md-4
                </Col>
            </Row>
        </Container>
    );
}

export default GridInfo
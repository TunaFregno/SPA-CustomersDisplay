import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function PortfolioGrid() {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4} className='mb-1 fw-bold'>
                    ID
                </Col>
                <Col xs={6} md={4} className='mb-1 fw-bold'>
                  Name
                </Col>
                <Col xs={6} md={4} className='mb-1 fw-bold'>
                  Restriction Status
                </Col>
            </Row>
            
            <Row>
                <Col xs={6} md={4}>
                  cli18874_por1
                </Col>
                <Col xs={6} md={4}>
                  portfolio 1
                </Col>
                <Col xs={6} md={4}>
                  clean
                </Col>
            </Row>
        </Container>
    );
}

export default PortfolioGrid
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import PortfolioGrid from './PortfolioGrid';
import AssetsAccordion from './AssetsAccordion';

function CenteredModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>        
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Portfolio:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <PortfolioGrid/>
                <Accordion defaultActiveKey="1" className='mt-3'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='fw-bold'>Assets</Accordion.Header>
                        <Accordion.Body>

                            <AssetsAccordion/>
                            
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Modal.Body>
        </Modal>
    );
}

export default CenteredModal
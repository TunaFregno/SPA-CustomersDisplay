import React from 'react';
import Modal from 'react-bootstrap/Modal';
import PortfolioGrid from './PortfolioGrid';


function CenteredModal(props) {
    //console.log('in the props', props.data)
    
    return (
        <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered>        
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Portfolio:
                </Modal.Title>
            </Modal.Header>

            <Modal.Body >
                
                <PortfolioGrid 
                portfolios={props.portfolios}/>

            </Modal.Body>
        </Modal>
    );
}

export default CenteredModal
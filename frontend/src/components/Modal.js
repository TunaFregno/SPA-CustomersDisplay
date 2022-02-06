import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import GridInfo from './Grid';

function CenteredModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>        
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Assets
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <GridInfo/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CenteredModal
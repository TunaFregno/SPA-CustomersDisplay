import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AssetsTable from './AssetsTable';

function AssetsAccordion(props) {
    return (
        <>
            <Accordion defaultActiveKey="1" className='mt-3'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='fw-bold'>A+D PHARMA HOL.GDR REGS</Accordion.Header>
                    <Accordion.Body>

                        <AssetsTable/>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1" className='mt-3'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='fw-bold'>BÖWE SYSTEC AG</Accordion.Header>
                    <Accordion.Body>

                        <AssetsTable/>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1" className='mt-3'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='fw-bold'>Whale Capital Group Renewable Ltd</Accordion.Header>
                    <Accordion.Body>

                        <AssetsTable/>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1" className='mt-3'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='fw-bold'>Yahoo! Inc.</Accordion.Header>
                    <Accordion.Body>

                        <AssetsTable/>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>

    );
}

export default AssetsAccordion
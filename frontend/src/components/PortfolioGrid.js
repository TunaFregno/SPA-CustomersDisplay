import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import AssetsTable from './TableComponents/AssetsTable';


function PortfolioGrid(props) {
  const [assets, setAssets] = useState([]);

  const accordionFunc =  (portfolio) => {
    const assetsoArr = [];
    portfolio.assets.forEach((asset) => assetsoArr.push(asset));
    setAssets(assetsoArr)
  }

  useEffect(() =>{
    console.log('this are the assets', assets)

  }, [assets])

  

  return (
    <Container>    
      {props.portfolios.map((portfolio, i) => {
        return (
          <>
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
            <Row key={i}>
              <Col xs={6} md={4}>
                {portfolio.portfolioId}
              </Col>
              <Col xs={6} md={4}>
                {portfolio.portfolioName}
              </Col>
              <Col xs={6} md={4}>
                {portfolio.restrictionStatus}
              </Col>
              <Col>
                <Accordion defaultActiveKey="1" className='mt-3 mb-3' onClick={() => accordionFunc(portfolio)}>
                      <Accordion.Item eventKey="0">
                          <Accordion.Header><p className='fw-bold m-0 p-0'>ASSETS</p></Accordion.Header>
                          <Accordion.Body>
                            
                            <AssetsTable 
                            asset={assets}
                            />
                              
                          </Accordion.Body>
                      </Accordion.Item>
                  </Accordion>
              </Col>
            </Row>
          </>
        )

      })}
          
        
    </Container>
  );
}

export default PortfolioGrid
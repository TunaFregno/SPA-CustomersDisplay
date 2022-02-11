import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import AssetsTable from './TableComponents/AssetsTable';
import Table from 'react-bootstrap/Table'


function PortfolioGrid(props) {
  const [assets, setAssets] = useState([]);

  const accordionFunc =  (portfolio) => {
    const assetsoArr = [];
    portfolio.assets.forEach((asset) => assetsoArr.push(asset));
    
    setAssets(assetsoArr.sort((a, b)=> {
      if (a.assetName.toLowerCase() < b.assetName.toLowerCase()) return -1;
      })
    )
  }

  return (
    <Container>    
      {props.portfolios.map((portfolio, i) => {
        return (
          <>
          <Table key={i} className='m-0 p-0'>
            <thead>
              <th xs={6} md={4} className='pb-2 fw-bold'>
                ID
              </th>
              <th xs={6} md={4} className='pb-2 fw-bold'>
                Name
              </th>
              <th xs={6} md={4} className='pb-2 fw-bold'>
                Restriction Status
              </th>
            </thead>
            <tbody>
              <th xs={6} md={4} className='fw-normal pt-2'>
                {(portfolio.portfolioId).charAt(0).toUpperCase() + (portfolio.portfolioId).slice(1)}
              </th>
              <th xs={6} md={4} className='fw-normal pt-2'>
                {(portfolio.portfolioName).charAt(0).toUpperCase() + (portfolio.portfolioName).slice(1)}
              </th>
              <th xs={6} md={4} className='fw-normal pt-2'>
                {(portfolio.restrictionStatus).charAt(0).toUpperCase() + (portfolio.restrictionStatus).slice(1)} 
              </th>     
            </tbody>
          </Table>

         
          <Accordion key={portfolio.portfolioId} defaultActiveKey="1" className='mt-3 mb-3' onClick={() => accordionFunc(portfolio)}>
            <Accordion.Item eventKey="0">
              <Accordion.Header><p className='fw-bold m-0 p-0'>ASSETS</p></Accordion.Header>
              <Accordion.Body>
            
                <AssetsTable 
                asset={assets}
                />
              
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        
          </>
        )   
      })}                  
    </Container>
  );
}

export default PortfolioGrid
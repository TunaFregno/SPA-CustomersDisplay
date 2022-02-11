import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import AssetsTable from './TableComponents/AssetsTable';
import Table from 'react-bootstrap/Table'
import getAssetsFunc from './Functions/getAssetsFunc';

function PortfolioGrid(props) {
  const [assets, setAssets] = useState([]);
  const [currentIndex, setIndex] = useState(0);

  const accordionFunc =  (portfolio, i) => {
    const assetsoArr = getAssetsFunc(portfolio);

    setAssets(assetsoArr.sort((a, b)=> {
      if (a.assetName.toLowerCase() < b.assetName.toLowerCase()) return -1;
      })
    )
  }

  //const setCurrentIndex= (i) => {
    //console.log('index', i)
    //currentIndex !== i ? document.querySelector('.collapse').remove('show') && setIndex(i) : document.querySelector('.collapse').add('show');
  //}

  return (
    <Container>    
      {props.portfolios.map((portfolio, i) => {
        return (
          <>
          <Table className='m-0 p-0'>
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
              <th xs={6} md={4} className='fw-normal pt-2' key={portfolio.portfolioId}>
                {(portfolio.portfolioId).charAt(0).toUpperCase() + (portfolio.portfolioId).slice(1)}
              </th>
              <th xs={6} md={4} className='fw-normal pt-2' key={portfolio.portfolioName}>
                {(portfolio.portfolioName).charAt(0).toUpperCase() + (portfolio.portfolioName).slice(1)}
              </th>
              <th xs={6} md={4} className='fw-normal pt-2' key={portfolio.restrictionStatus}>
              {(portfolio.restrictionStatus) === 'clean' ? '🟢': '⭕️' } {(portfolio.restrictionStatus).charAt(0).toUpperCase() + (portfolio.restrictionStatus).slice(1)} 
              </th>     
            </tbody>
          </Table>

         
          <Accordion defaultActiveKey="0" key={i} className='mt-3 mb-3' id={`Accordion${i}`} onClick={() => accordionFunc(portfolio, i)}>
            <Accordion.Item > 
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
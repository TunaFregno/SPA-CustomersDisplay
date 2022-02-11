import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import pic from '../images/info.svg';
import CenteredModal from './Modal';
import getPortfoliosFunc from './Functions/getPortfoliosFunc';
import getAssetsFunc from './Functions/getAssetsFunc';
import assetCapitalGainFunc  from './Functions/getClientValues';

function ClientCard({data}) {
  
  const [portfolios, setPortfolios] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  
  const displayStatus = (customer) => {
    const portfolioArr = getPortfoliosFunc(customer);
    return portfolioArr.map((portfolio, i) => `${(portfolio.restrictionStatus) === 'clean' ? '🟢': '⭕️' }${(portfolio.restrictionStatus).charAt(0).toUpperCase() + (portfolio.restrictionStatus).slice(1)}  `)
  }

  const aggregatedNetWorth = (customer, string) => {
    const portfolioArr = getPortfoliosFunc(customer);
    let assets = [];
    portfolioArr.forEach((portfolio) => {
      assets = getAssetsFunc(portfolio)
    })
    return assetCapitalGainFunc(assets, string);
  }

  const getPortfolios = (customer) => {
    setModalShow(true); 
    const portfolioArr = getPortfoliosFunc(customer);
    return setPortfolios(portfolioArr);
  }

  return (
    console.log('in the data ', data),
    <>
      <ul className='ul-box'>
        
        { data.sort((a, b)=> {
          if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
          }).map((customer, i) => {
          return (
            <Card key={i} style={{ width: '25rem', height: '23rem'}} className='m-2 cardStyle'>
              <Card.Img variant="top" src={pic} style={{ width: '10rem'}} className='mt-3'/>
              <Card.Body>
                <Card.Title>{customer.lastName}, {customer.firstName}</Card.Title>
                <Card.Text  className='mb-2' >
                  Risk Profile: {customer.riskProfile} <br/>
                  Restriction Status: {displayStatus(customer)} <br/>
                  Net Worth: {aggregatedNetWorth(customer, 'networth')}<br/>
                  Capital Gain: {aggregatedNetWorth(customer, 'capital')}<br/>  
                </Card.Text>
                <div className='mt-3 cardBtnBox' >
                  <p  className='mb-1 fw-bold' >Portfolio:</p>
                  <Button variant="primary" onClick={() => getPortfolios( customer)}>Expand</Button>
                </div>
              </Card.Body>
            </Card>
          )})
        }
      </ul>

      <CenteredModal
        data={data}
        portfolios={portfolios}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ClientCard;
  
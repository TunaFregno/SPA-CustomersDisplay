import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import pic from '../images/info.svg';
import CenteredModal from './Modal';
import { assetAssociatedRiskFunc } from './MathFuncs/AssetsAssociatedRiskFunc';

function ClientCard({data}) {
  
  const [portfolios, setPortfolios] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  
  const displayStatus = (customer) => {
    const portfolioArr = [];
    getAssets(customer)
    customer.portfolios.forEach((portfolio) => portfolioArr.push(portfolio));
    return portfolioArr.map((portfolio, i) => `▶️${(portfolio.restrictionStatus).charAt(0).toUpperCase() + (portfolio.restrictionStatus).slice(1)} `)
  }

  const getAssets = (customer) => {
    
    const assetsoArr = [];
    customer.portfolios.forEach((portfolio) => {
      portfolio.assets.forEach((asset) => assetsoArr.push(asset))
    })

    assetAssociatedRiskFunc(assetsoArr)
  }

  const getPortfolios = (customer) => {
    setModalShow(true); 
    const portfolioArr = [];
    customer.portfolios.forEach((portfolio) => {portfolioArr.push(portfolio)});
    return setPortfolios(portfolioArr)
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
                  Net Worth<br/>
                  Restriction Status: {displayStatus(customer)} <br/>
                  Capital Gain<br/>  
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
  
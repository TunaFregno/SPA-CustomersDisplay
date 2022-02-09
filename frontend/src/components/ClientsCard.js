import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import pic from '../images/info.svg';
import CenteredModal from './Modal'

function ClientCard({data, searchResults}) {
  
  const [index, setIndex] = useState(0);
  const [portfolios, setPortfolios] = useState([]);
  const [modalShow, setModalShow] = useState(false);


  const storingIndex = (index, customer) => {
    //console.log('in the index', index);
    setIndex(index);
    setModalShow(true); 

    const portfolioArr = [];
    customer.portfolios.forEach((portfolio) => portfolioArr.push(portfolio));
    setPortfolios(portfolioArr)
    console.log('in the portfolios arr', portfolios)
  }


  return (
    console.log('in the data ', data),
    console.log('in the card search', searchResults),
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
                  Restriction Status <br/>
                  Capital Gain<br/>  
                </Card.Text>
                <div className='mt-3 cardBtnBox' >
                  <p  className='mb-1 fw-bold' >Portfolio:</p>
                  <Button variant="primary" onClick={() => storingIndex(i, customer)}>Expand</Button>
                </div>
              </Card.Body>
            </Card>
          )})
        }
      </ul>

      <CenteredModal
        data={data}
        index={index}
        portfolios={portfolios}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ClientCard;
  
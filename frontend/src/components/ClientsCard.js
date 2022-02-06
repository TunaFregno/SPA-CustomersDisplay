import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import pic from '../images/info.svg';
import CenteredModal from './Modal'

function ClientCard() {
  
  const [modalShow, setModalShow] = useState(false);
  const [customers, setCustomers] = useState([]);
  //const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {

      axios.get('http://myjson.dit.upm.es/api/bins/bw9t')
      .then((res) => {
          console.log(res);
          setCustomers(res.data)
      })
      .catch((err) => console.log(err))

  }, [])
    

  // const fillPortafolio = () => {
  //   const portfolioArr = [];

    // customers.map((customer) => customer.portfolios.forEach((portfolio) => portfolioArr.push(portfolio)));

    //setPortfolios(portfolioArr)
    //console.log(portfolios)
  //}

  return (
    console.log('in the customers ', customers),
    <>
      <ul className='ul-box'>
                
        { customers.sort().map((customer, i) => {
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
                  <Button variant="primary" onClick={() => setModalShow(true)}>Expand</Button>
                </div>
              </Card.Body>
            </Card>
          )})
        }
      </ul>

      <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
  
export default ClientCard;
  
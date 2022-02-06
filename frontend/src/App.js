import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import ClientCard from './components/ClientsCard';
import SideNav from './components/SideNav';

function App() {

  return (

    <div className='outterbox'>
      <Header/>
      <div className='innerbox'> 
        <Row className='Row'>
          <Col sm={5} className='Col'>
            <SideNav/>
          </Col>
          <Col sm={7} className='Col'>
            <ClientCard/>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;

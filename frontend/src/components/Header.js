import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function Header() {
  
    return (
      <Navbar bg="light" expand={false} className='navBarStyle'>
      <Container fluid className='ps-3'>
        <Navbar.Brand href="#" className='ms-5 fs-1 fw-bold'>📊 inFinance</Navbar.Brand>
      </Container>
    </Navbar>
    );
  }
  
  export default Header;
  
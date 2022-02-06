import React from 'react';
import people from '../images/dashpic.svg';
import  NavDropdown  from 'react-bootstrap/NavDropdown';
import  Form  from 'react-bootstrap/Form';
import  FormControl  from 'react-bootstrap/FormControl';
import  Button  from 'react-bootstrap/Button';
import  Image  from 'react-bootstrap/Image';

function SideNav() {


  return (
    <>
      <div  className='sideNavStyle'>
        <p className='sideTitle mb-0 fw-bold'>Customer</p>
        <p className='sideTitle fs-1 lh-1 ms-1'> Selection</p>

        <NavDropdown title="Sort by" id="offcanvasNavbarDropdown" className="mt-4">

          <NavDropdown.Item href="#action3">Risk Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Restriction Status</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Capital Gain </NavDropdown.Item>
          <NavDropdown.Item href="#action4">Net Worth</NavDropdown.Item>
          <NavDropdown.Divider />

          <NavDropdown.Item href="#action5">
            Name
          </NavDropdown.Item>
        </NavDropdown>

        <Form className="d-flex mb-5 ps-1">
          <FormControl
          type="search"
          placeholder="Search"
          className="me-3"
          aria-label="Search"
          />
            <Button variant="outline-danger">Search</Button>
        </Form>

        <Image src={people} fluid style={{ width: '29rem'}} className='mt-4' />
      </div>
    </>

  );
}

export default SideNav;
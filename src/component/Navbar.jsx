import React from 'react';
import mblogo from "../images/mblogo.jpg";
import { Navbar, Nav } from 'react-bootstrap'; 

const CustomNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow p-0">
      <Navbar.Brand href="/" className="d-flex align-items-center px-4 px-lg-5">
        <p className="m-0 fw-bold" style={{ fontSize: '25px' }}>
          <img src={mblogo} alt="" height="50px" className="m-3" />
          <span style={{ color: '#fb873f', fontSize: '35px' }}>MSBM</span>
        </p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarCollapse" />
      <Navbar.Collapse id="navbarCollapse">
        <Nav className="ms-auto p-4 p-lg-0">
          <Nav.Link href="/" className="nav-link">Home</Nav.Link>
          <Nav.Link href="/explain" className="nav-link">About</Nav.Link>
          <Nav.Link href="/courses" className="nav-link">Pricing</Nav.Link>
          <Nav.Link href="/" className="nav-link">Contact</Nav.Link>
          <Nav.Link href="/" className="nav-link"><i className="fa fa-user"></i></Nav.Link>
          <Nav.Link href="#" className="nav-link">
            <div id="google_translate_element"></div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

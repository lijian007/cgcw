import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../App.css';

import './TopMenu.css';


const TopMenuEn = () => {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar variant="dark"  expand="md" className="top-nav-bar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="New Here?" id="newhere" >

            <NavDropdown.Item  variant="outline-light" href="#action/3.1">A message from our Pastor</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">What to Expect</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Times & Directions</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Common Questions</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Ministries" id="ministries">
            <NavDropdown.Item href="#action/3.11">Community Groups</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.22">Clark</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.33">WPI</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.44">Timothy</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.54">Youth</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.46">Joshua</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.47">Enoch</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Resources" id="resources">
            <NavDropdown.Item href="#action/13.1">Sermons</NavDropdown.Item>
            <NavDropdown.Item href="#action/23.2">Video Library</NavDropdown.Item>
            <NavDropdown.Item href="#action/33.3">Calendar</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home3">Giving</Nav.Link>
          <Nav.Link href="#home4">Parking</Nav.Link>
          <Nav.Link href="#home5">Covid-19</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    
    </Navbar>
  );
}
export default TopMenuEn;
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../App.css';



const TopMenuCn = () => {
  
   
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar variant="dark"  expand="md" className="top-nav-bar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link href="#home">主页</Nav.Link>
          <NavDropdown title="新朋友" id="newhere">
      
            <NavDropdown.Item  variant="outline-light" href="#action/3.1">牧师寄语</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">介绍</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">聚会时间地点</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">常见问题</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="教会事工" id="ministries">
            <NavDropdown.Item href="#action/3.11">团契生活</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.22">Clark</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.33">WPI</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.44">Timothy</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.54">青年事工</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.46">儿童事工</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.47">Enoch</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="资源" id="resources">
            <NavDropdown.Item href="#action/13.1">讲道信息</NavDropdown.Item>
            <NavDropdown.Item href="#action/23.2">视屏</NavDropdown.Item>
            <NavDropdown.Item href="#action/33.3">日历</NavDropdown.Item>
            <NavDropdown.Item href="/member">Member</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home3">奉献支持</Nav.Link>
          <Nav.Link href="#home5">新冠肺炎</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    
    </Navbar>
  );

};
export default TopMenuCn;
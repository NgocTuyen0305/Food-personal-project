import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const ClientLayout = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="/src/images/logo-mixue.png"
            alt=""
            style={{ width: "150px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" style={{padding: '5px', textDecoration: 'none', color: '#000000'}}>Trang chủ</Link>
            <Link to="/products" style={{padding: '5px', textDecoration: 'none', color: '#000000'}}>Đồ uống</Link>
            <Link to="/offer" style={{padding: '5px', textDecoration: 'none', color: '#000000'}}>Khuyến mãi</Link>
            <Link to="/About" style={{padding: '5px', textDecoration: 'none', color: '#000000'}}>Giới thiệu</Link>
           
          </Nav>
          <Button variant="outline-danger">Đăng nhập</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    <Container>
        <Row>
          <Col>
            <p className="text-center">
              &copy; {new Date().getFullYear()} Your Website. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ClientLayout;

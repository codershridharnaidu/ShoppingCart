import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

function Header() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>E-Commerce</Navbar.Brand>

        <Nav className="me-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart">
            <IoMdCart />
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

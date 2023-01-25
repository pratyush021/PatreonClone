import React, { useState } from 'react';
import {
  NavbarBrand,
  NavLink
} from 'reactstrap';

import { NavLink as ReactLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

function CustomNavbar() {
  
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
            <NavbarBrand tag={ReactLink} to="/">
                Home
            </NavbarBrand>

            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
                <Nav className="me-auto">
                    <NavLink tag={ReactLink} to="/login">Login</NavLink>
                </Nav>
                <Nav className="">
                    <NavLink tag={ReactLink} to="/dashboard">Dashboard</NavLink>
                </Nav>

            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
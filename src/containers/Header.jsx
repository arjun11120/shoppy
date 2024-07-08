import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Routes, Route } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Home from './Home';
import Cart from './Cart';

function Header() {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link className="navbar-brand">
            <FontAwesomeIcon icon={faShoppingCart} /> Shoppy
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/cart" className="nav-link">Cart</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </React.Fragment>
  );
}

export default Header;

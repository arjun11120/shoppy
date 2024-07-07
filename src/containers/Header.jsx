import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Routes, Route } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Home from './Home';
import About from './About';

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
              <Link to="/about" className="nav-link">About</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </React.Fragment>
  );
}

export default Header;

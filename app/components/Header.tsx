'use client';
import Link from 'next/link';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import '../globals.css';

export default function Header() {
  return (
    <header>
      <Navbar sticky='top' bg="dark" variant="dark" expand="lg" className="py-3">
        <Container>
          {/* Brand Section */}
          <Navbar.Brand as={Link} href="/" className="fw-bold text-white">
            Home
          </Navbar.Brand>

          {/* Mobile Menu Toggle Button */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* Navigation Section */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} href="/All" className="text-white">
                All Products
              </Nav.Link>
              <Nav.Link as={Link} href="/Page2" className="text-white">
                Page 2
              </Nav.Link>
              <Nav.Link as={Link} href="/Page3" className="text-white">
                Page 3
              </Nav.Link>
              <NavDropdown title="More" id="nav-dropdown" className="text-white">
                <NavDropdown.Item as={Link} href="/All">
                  Tables
                </NavDropdown.Item>
                <NavDropdown.Item href="#chairs">Chairs</NavDropdown.Item>
                <NavDropdown.Item href="#crockery">Crockery</NavDropdown.Item>
                <NavDropdown.Item href="#tableware">Tableware</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth)
  }
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" sticky="top" className="sticky-top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>WareHouse</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#stocks">Stocks</Nav.Link>
              <Nav.Link href="home#categories">Categories</Nav.Link>
              <Nav.Link href="home#Images">Images</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="Blog">Blog</Nav.Link>
              {
                user && <>
                  <Nav.Link as={Link} to="manageinventory">Manage-Inventory</Nav.Link>
                </>
              }
              {
                user && <>
                  <Nav.Link as={Link} to="addstock">Add-Stock</Nav.Link>
                </>
              }
              {
                user ?
                  <button className='btn btn-link text-white text-decoration-none fw-bold' onClick={handleSignOut}>Log Out</button>
                  :
                  <Nav.Link as={Link} to="login">
                    LogIn
                  </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
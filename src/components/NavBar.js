import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Importing search icon from react-icons

const NavBar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#1a2a3a', color: 'white' }}> {/* New background color */}
      <Container>
        {/* Navbar.Brand with Link for navigation */}
        <Navbar.Brand as={Link} to="/" style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>
          QuillPad
        </Navbar.Brand>

        {/* Navbar Toggle for mobile view */}
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          style={{ borderColor: 'white', color: 'white' }} // White border
        >
          {/* Custom lines for the toggle button */}
          <span 
            className="navbar-toggler-icon" 
            style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3E%3Cpath stroke=%27white%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3E%3C/svg%3E')" }}
          ></span>
        </Navbar.Toggle>

        {/* Navbar Content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Nav Links with hover effect */}
            <Nav.Link as={Link} to="/" style={{ color: 'white', fontSize: '1.1rem', marginRight: '20px' }} 
                      className="nav-link-hover">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: 'white', fontSize: '1.1rem' }} 
                      className="nav-link-hover">
              About
            </Nav.Link>
          </Nav>

          {/* Search Form with Icon Button */}
          <Form className="d-flex" style={{ width: 'auto' }}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              style={{ maxWidth: '250px', borderRadius: '20px', paddingLeft: '10px' }}
            />
            {/* Icon button instead of text button */}
            <Button  type="submit" style={{
                marginLeft: '10px', 
                backgroundColor: 'transparent',  
                border: 'none',  
                padding: '0',   
                color: 'white'   
              }}>
              <FaSearch /> {/* FontAwesome search icon */}
            </Button>
          </Form>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
  );
};

export default NavBar;


import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (

        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">TravelGuru</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>

                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/services">Services</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/myservices">MyServices</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/allservices">AllServices</NavDropdown.Item>

                        </NavDropdown>

                        <Nav.Link as={Link} to="/albums">Albums</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/addService">AddService</Nav.Link>



                        <Nav.Link as={Link} to="/manageServices">ManageServices</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                        <Navbar.Text>
                            <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>

    );
};

export default Header;
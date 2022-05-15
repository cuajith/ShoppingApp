import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom';

const Header = () => {
    const { id } = useParams();
    return (
        <>
            <Navbar bg="dark" expand="lg" variant='dark' collapseOnSelect>
                <Container >
                    <LinkContainer to="/">
                        <Navbar.Brand>Native Basket</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    &nbsp; Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/signin">
                                <Nav.Link>
                                    <i className="fa-solid fa-user"></i>
                                    &nbsp; Signin</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
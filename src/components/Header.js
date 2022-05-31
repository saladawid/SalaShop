import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

export const Header = () => {
    return (
        <header>
                <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                    <Container>
                        <Navbar.Brand href="/">SalaShop</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="/card"><i className="fas fa-shopping-cart"></i> Card</Nav.Link>
                                <Nav.Link href="/login"><i className="fas fa-user"></i> Sing In</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </header>
    );
};
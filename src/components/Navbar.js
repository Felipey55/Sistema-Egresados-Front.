import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const MyNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Gestión de Egresados</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Inicio </Nav.Link>
                    
                </Nav>
                <Nav.Link href="/egresados">Egresados</Nav.Link>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;

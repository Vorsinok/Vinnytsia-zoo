import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../Assets/Header/logo_white.png";
import { Link } from "react-router-dom";



export class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" fixed="top" >
                <Container style={{ maxWidth: '100%' }}>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt=""
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        Vinnytsia Zoo
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/bears">Ведмеді</Nav.Link>
                            <Nav.Link as={Link} to="/tiger">Тигр і Ягуар</Nav.Link>
                            <Nav.Link as={Link} to="/wolf">Вовки</Nav.Link>
                            <Nav.Link as={Link} to="/camel">Верблюди</Nav.Link>
                            <Nav.Link as={Link} to="/antelops-deer">Антилопи та Олені</Nav.Link>
                            <Nav.Link as={Link} to="/lemurs">Лемури</Nav.Link>
                            <Nav.Link as={Link} to="/raccoon-surkat">Єноти та Сурикати</Nav.Link>
                            <Nav.Link as={Link} to="/birds-prey">Птахи-хижаки</Nav.Link>
                            <Nav.Link as={Link} to="/exotic-birds">Екзотичні птахи</Nav.Link>
                            <Nav.Link as={Link} to="/waterfowl-rare">Водоплавні та Рідкісні</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header;

import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render () {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Cozma Calin</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                    <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                    Home
                    </NavItem>   

                    <NavItem eventKey={2} componentClass={Link} href="/Work" to="/work">
                    Work
                    </NavItem>   

                    <NavItem eventKey={3} componentClass={Link}  href="/contact" to="/contact">
                    Contact
                    </NavItem>  
                 </Nav>
                </Navbar.Collapse>
            </Navbar>                 
        );
    }
}
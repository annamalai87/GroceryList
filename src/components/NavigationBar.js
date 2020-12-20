import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav} from "react-bootstrap";

export default class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" expand="false">
                    <Navbar.Brand href="#">Grocery List</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse className="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="https://github.com/annamalai87" target="_blank">
                                github profile
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

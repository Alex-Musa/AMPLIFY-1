import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import '../utils/styles/Navbar.css'


function Navbarr() {
    return (

        <Navbar bg="light" variant="dark" className="testt">
            <Navbar.Brand href="#home">Prestige</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#features">The Studio</Nav.Link>
                <Nav.Link href="#pricing">Bookings</Nav.Link>
                <NavDropdown title="The Team" id="collasible-nav-dropdown">
                    <NavDropdown.Item href='/stylist.js'>Isaiah</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Stylist</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Stylist</NavDropdown.Item>

                </NavDropdown>

            </Nav>

        </Navbar>

    )
}

export default Navbarr
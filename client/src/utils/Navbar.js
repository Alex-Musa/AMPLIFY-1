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


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Prestige</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Stylists</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
=======
    )
}

export default Navbarr
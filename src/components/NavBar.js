import React from "react"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom";


function NavBar(props) {
    const { location } = props;
    return (
        <div>
            <Nav variant="tabs" >
                <Nav.Item>
                    <Nav.Link as={Link} to="/" eventKey="/">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/Golf" eventKey="/Golf">Golf</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="Landscape" eventKey="/Landscape">Landscape</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/Muni" eventKey="/Muni">Muni</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/Ag" eventKey="/Ag">Ag</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/SkyHarvester" eventKey="/SkyHarvester">SkyHarvester</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default NavBar


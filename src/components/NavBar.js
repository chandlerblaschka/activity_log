import React from "react"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom";


function NavBar(props) {
    return (
        <div>
            <Nav variant="tabs" >
                <Nav.Item>
                    <Nav.Link as={Link} to="/" eventKey="/" >Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/Golf/Open" eventKey="/Golf">Golf</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="Landscape/Open" eventKey="/Landscape">Landscape</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/Muni/Open" eventKey="/Muni">Muni</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/Ag/Open" eventKey="/Ag">Ag</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/Skyharvester/Open" eventKey="/Skyharvester">SkyHarvester</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default NavBar


import React from "react"
import Nav from "react-bootstrap/Nav"


function NavBar(props) {
    const { location } = props;
    return (
        <div>
            <Nav variant="tabs" activeKey={location.pathname}>
                <Nav.Item>
                    <Nav.Link href="/">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Golf">Golf</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Landscape">Landscape</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default NavBar


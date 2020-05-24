import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import NavItem from "./navItem.js"
import NavDropdownItem from "./navDropdownItem.js"
import NavDropdown from "./navDropdown.js"

const CustomNavbar = ({ pageInfo }) => {
  return (
    <Navbar sticky="top" variant="dark" expand="md" id="site-navbar">
      <h1 className="title">itsmeow.dev</h1>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          fill
          className="mr-auto w-100"
          activeKey={pageInfo && pageInfo.pageName}
        >
          <NavItem to="/" eventKey="index">
            Home
          </NavItem>
          <NavItem to="/mods" eventKey="mods">
            Mods
          </NavItem>
          <NavItem to="/plugins" eventKey="plugins">
            Plugins
          </NavItem>
          <NavItem external to="https://play.itsmeow.dev/">
            Server
          </NavItem>
          <NavDropdown text="Misc Projects">
            <NavDropdownItem to="/cursedark" eventKey="cursedark">
              Curse Point Estimator
            </NavDropdownItem>
            <NavDropdownItem to="/curseestimate" eventKey="curseestimate">
              Curse Dark Theme
            </NavDropdownItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CustomNavbar

import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Dropdown } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  return (
    <Navbar sticky="top" variant="dark" expand="sm" id="site-navbar">
      <h1 className="title">itsmeow.dev</h1>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          fill
          className="mr-auto w-100"
          activeKey={pageInfo && pageInfo.pageName}
        >
          <Nav.Item>
            <Link to="/" className="link-no-style">
              <Nav.Link as="span" eventKey="index">
                Home
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/mods" className="link-no-style">
              <Nav.Link as="span" eventKey="mods">
                Mods
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/plugins" className="link-no-style">
              <Nav.Link as="span" eventKey="plugins">
                Plugins
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <a
              href="https://play.itsmeow.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="link-no-style"
            >
              <Nav.Link as="span">Server</Nav.Link>
            </a>
          </Nav.Item>
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link}>Misc Projects</Dropdown.Toggle>
            <Dropdown.Menu className="center-text w-100">
              <Dropdown.Item>
                <Link to="/cursedark" className="link-no-style">
                  <Nav.Link as="span" eventKey="cursedark">
                    Curse Dark Theme
                  </Nav.Link>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/curseestimate" className="link-no-style">
                  <Nav.Link as="span" eventKey="curseestimate">
                    Curse Point Estimator
                  </Nav.Link>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CustomNavbar

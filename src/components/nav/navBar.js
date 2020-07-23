import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import NavItem from "./navItem.js"
import NavDropdownItem from "./navDropdownItem.js"
import NavDropdown from "./navDropdown.js"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const CustomNavbar = ({ pageInfo }) => {
  const sources = useStaticQuery(graphql`
    query {
      textImage: file(relativePath: { eq: "text.png" }) {
        childImageSharp {
          fixed(height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Navbar sticky="top" variant="dark" expand="lg" id="site-navbar">
      <div className="title">
        <Img fixed={sources.textImage.childImageSharp.fixed} align="center" />
      </div>
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
          <NavItem to="/about" evenyKey="about">
            About
          </NavItem>
          <NavItem to="/mods" eventKey="mods">
            Mods
          </NavItem>
          <NavItem to="/plugins" eventKey="plugins">
            Plugins
          </NavItem>
          <NavDropdown text="Misc Projects">
            <NavDropdownItem to="/cursedark" eventKey="cursedark">
              Curse Dark Theme
            </NavDropdownItem>
            <NavDropdownItem to="/curseestimate" eventKey="curseestimate">
              Curse Point Estimator
            </NavDropdownItem>
            <NavDropdownItem to="/replacetool" eventKey="replacetool">
              Replace Tool
            </NavDropdownItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CustomNavbar

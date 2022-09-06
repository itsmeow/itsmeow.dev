import { Navbar, Nav } from "react-bootstrap"
import NavItem from "./navItem.js"
import usePageScrolled from "../../hooks/usePageScrolled"
import NavDropdownItem from "./navDropdownItem.js"
import NavDropdown from "./navDropdown.js"
import { StaticImage } from "gatsby-plugin-image"

const CustomNavbar = ({ pageInfo }) => {
  const scrolled = usePageScrolled()
  return (
    <Navbar
      sticky="top"
      variant="dark"
      expand="lg"
      id="site-navbar"
      className={scrolled ? "scrolled" : ""}
    >
      <div className="navbar-brand">
        <StaticImage
          src={"./../../data/logos/text.png"}
          layout="fixed"
          height={40}
          align="center"
          alt="itsmeow"
        />
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
          <NavItem to="/projects" eventKey="projects">
            Projects
          </NavItem>
          <NavDropdown text="Other Tools">
            <NavDropdownItem to="/cursedark" eventKey="cursedark">
              Curse Dark Theme
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

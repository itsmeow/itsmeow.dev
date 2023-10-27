import { Nav, Dropdown } from "react-bootstrap"
import PropTypes from "prop-types"

const NavDropdown = ({ text, children }) => {
  return (
    <Dropdown className="nav-item">
      <Dropdown.Toggle
        as={Nav.Link}
        id={`dropdown-toggle=${text.toLowerCase().replaceAll(" ", "-")}`}
      >
        {text}
      </Dropdown.Toggle>
      <Dropdown.Menu className="center-text w-100">{children}</Dropdown.Menu>
    </Dropdown>
  )
}

NavDropdown.propTypes = {
  text: PropTypes.string,
}

export default NavDropdown

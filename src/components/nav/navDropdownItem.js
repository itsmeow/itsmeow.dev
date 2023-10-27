import { Link } from "gatsby"
import { Dropdown, Nav } from "react-bootstrap"
import PropTypes from "prop-types"

const NavDropdownItem = ({ to, eventKey, children }) => {
  return (
    <Dropdown.Item as="div">
      <Link to={to} className="link-no-style">
        <Nav.Link as="span" eventKey={eventKey}>
          {children}
        </Nav.Link>
      </Link>
    </Dropdown.Item>
  )
}

NavDropdownItem.propTypes = {
  to: PropTypes.string,
  eventKey: PropTypes.string,
}

export default NavDropdownItem

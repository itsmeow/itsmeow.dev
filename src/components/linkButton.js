import PropTypes from "prop-types"
import StyledButton from "./styledButton"

const LinkButton = ({ className, href, children, blank, ...rest }) => {
  return (
    <a // eslint-disable-line react/jsx-no-target-blank
      href={href}
      target={blank === true ? "_blank" : null}
      rel={blank === true ? "noopener noreferrer" : null}
      className="linkbuttonouter"
    >
      <StyledButton
        className={className ? `linkbutton ${className}` : "linkbutton"}
        {...rest}
      >
        {children}
      </StyledButton>
    </a>
  )
}

LinkButton.propTypes = {
  link: PropTypes.string,
  className: PropTypes.string,
  blank: PropTypes.bool,
}

export default LinkButton

import PropTypes from "prop-types"
import StyledButton from "./styledButton"

const LinkButton = ({ className, href, children, blank, ...rest }) => {
  return (
    <a // eslint-disable-line react/jsx-no-target-blank
      href={href}
      target={blank === true ? "_blank" : null}
      rel={blank === true ? "noopener noreferrer" : null}
      className="link-button-wrapper"
    >
      <StyledButton
        className={className ? `link-button ${className}` : "link-button"}
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

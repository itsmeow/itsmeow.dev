import PropTypes from "prop-types"
import Radium from "radium"

const StyledButton = ({
  className,
  height,
  color,
  textColor,
  hoverColor,
  style,
  children,
  icon,
  ...rest
}) => {
  const styles = {
    base: {
      color: textColor,
      height: height,
      backgroundColor: color,
      ":hover": {
        backgroundColor: hoverColor,
      },
      borderColor: textColor,
    },
  }
  return (
    <button
      {...rest}
      className={className ? `style-button ${className}` : "style-button"}
      style={[styles.base, style]}
    >
      <span className="style-button-inner">
        {icon && <span className="style-button-icon">{icon}</span>}
        <span className="style-button-text">{children}</span>
      </span>
    </button>
  )
}

StyledButton.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.element,
  textColor: PropTypes.string,
  icon: PropTypes.element,
}

StyledButton.defaultProps = {
  textColor: "#e2e2e2",
  height: "38px",
  color: "rgb(0, 132, 255)",
  hoverColor: "rgb(80, 170, 255)",
}

export default Radium(StyledButton)

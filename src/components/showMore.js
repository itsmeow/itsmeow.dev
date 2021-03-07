import { useState } from "react"
import Radium from "radium"
import PropTypes from "prop-types"

const ShowMore = ({ children, color, hoverColor, duration }) => {
  const [doShow, setShow] = useState(false)
  const styles = {
    cursor: "pointer",
    userSelect: "none",
    color: color,
    "&:hover": {
      color: hoverColor,
    },
  }

  const blockStyles = {
    transitionDuration: duration,
    webkitTransitionDuration: duration,
  }

  return (
    <>
      <div
        className={"showMoreBlock" + (doShow ? " shown" : "")}
        style={[blockStyles]}
      >
        {children}
      </div>
      <br />
      <span
        tabIndex="0"
        role="button"
        style={[styles]}
        onClick={() => setShow(!doShow)}
        onKeyPress={event => {
          if (event.key === "Enter") {
            setShow(!doShow)
          }
        }}
      >
        Show {doShow ? "less" : "more..."}
      </span>
    </>
  )
}

ShowMore.propTypes = {
  children: PropTypes.element.isRequired,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  duration: PropTypes.string,
}

ShowMore.defaultProps = {
  color: "#e8e8e8cc",
  hoverColor: "#e8e8e8",
  duration: "1s",
}

export default Radium(ShowMore)

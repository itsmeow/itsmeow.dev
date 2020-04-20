import React from "react"
import useScript from "../hooks/useScript"

const PatreonButton = props => {
  useScript("https://c6.patreon.com/becomePatronButton.bundle.js")
  return (
    <>
      <a
        href={"https://www.patreon.com/bePatron?u=" + props.userid}
        data-patreon-widget-type="become-patron-button"
        className="patron-button"
      >
        Become a Patron!
      </a>
    </>
  )
}
export default PatreonButton

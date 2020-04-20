import React from "react"
import useScript from "../hooks/useScript"

const TwitterWidget = props => {
  useScript("https://platform.twitter.com/widgets.js")
  return (
    <>
      <a
        className="twitter-timeline"
        data-width={props.width}
        data-height={props.height}
        data-dnt={props.dnt}
        data-theme={props.theme}
        data-link-color={props.link_color}
        href={"https://twitter.com/" + props.username + "?ref_src=twsrc%5Etfw"}
      >
        Tweets by {props.username}
      </a>
    </>
  )
}
export default TwitterWidget

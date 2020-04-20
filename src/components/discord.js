import React from "react"
import useScript from "../hooks/useScript"

const DiscordWidget = props => {
  useScript("https://platform.twitter.com/widgets.js")
  return (
    <iframe
      title="Discord Widget"
      style={props.style}
      src={
        "https://discordapp.com/widget?id=" +
        props.widget_id +
        "&theme=" +
        props.theme
      }
      width={props.width}
      height={props.height}
      allowtransparency={props.allowtransparency}
      frameBorder={props.frameborder}
    ></iframe>
  )
}
export default DiscordWidget

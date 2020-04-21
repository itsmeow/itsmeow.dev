import React from "react"
import useScript from "../hooks/useScript"

const DiscordWidget = props => {
  return (
    <div
      style={{
        fontSize: "0.8rem",
        backgroundColor: "rgb(114,137,218)",
        height: "300px",
      }}
    >
      <div style={{ padding: "20px", width: "100%", height: "100px" }}>
        Discord Widget temporarily removed (Until I can gatsby-ify it, it's very
        slow on load times.)
      </div>
      <div
        style={{ width: "100%", height: "200px", backgroundColor: "#202020" }}
      ></div>
    </div>
  )
  /*
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
  )*/
}
export default DiscordWidget

import { StaticImage } from "gatsby-plugin-image"

const Avatar = ({ className, ...remainder }) => {
  return (
    <div
      className={"avatar-container" + (className ? " " + className : "")}
      {...remainder}
    >
      <StaticImage
        src="./../data/icon.png"
        layout="constrained"
        width={200}
        quality={100}
        placeholder="blurred"
        alt="itsmeow Avatar"
      />
    </div>
  )
}

export default Avatar

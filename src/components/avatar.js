import { StaticImage } from "gatsby-plugin-image"

const Avatar = ({ className, ...remainder }) => {
  return (
    <div
      className={"avatar-wrapper" + (className ? " " + className : "")}
      {...remainder}
    >
      <div className="avatar-container">
        <StaticImage
          src="./../data/icon.png"
          layout="fullWidth"
          quality={100}
          placeholder="blurred"
          alt="itsmeow Avatar"
        />
      </div>
      <div align="center" className="avatar-text">
        <hr style={{ maxWidth: "500px" }} />
        Hobbyist Minecraft Mod Developer
        <br />
        <span
          style={{
            position: "relative",
            left: "0.28rem",
            fontWeight: "bold",
          }}
        >
          they/them{" "}
          <a
            href="https://www.mypronouns.org/"
            style={{
              position: "relative",
              top: "5px",
              fontSize: "0.6rem",
            }}
            title="what's this?"
            aria-label="Pronouns (what's this?)"
            target="_blank"
            rel="noopener noreferrer"
          >
            ?
          </a>
        </span>
        <hr style={{ maxWidth: "500px" }} />
      </div>
    </div>
  )
}

export default Avatar

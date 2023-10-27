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
      <div className="avatar-text center-text">
        <hr style={{ maxWidth: "500px" }} />
        <strong>itsmeowdev</strong>
        <br />
        Mod Developer, Software Engineer
        <br />
        <span
          style={{
            position: "relative",
            left: "0.35rem",
            fontSize: "0.8rem",
          }}
        >
          they/them{" "}
          <a
            href="https://www.pronouns.org/"
            style={{
              position: "relative",
              top: "4px",
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

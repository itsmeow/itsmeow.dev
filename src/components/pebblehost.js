import { StaticImage } from "gatsby-plugin-image"

const PebbleHost = ({ ...remainder }) => {
  return (
    <div className="pebblebox" {...remainder}>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://pebblehost.com/aff?id=1129"
        className="link-no-style basecolor"
      >
        <div align="center" style={{ fontWeight: "bold", fontSize: "20px" }}>
          Sponsored By
        </div>
        <div
          style={{
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingTop: "5%",
            paddingBottom: "5%",
          }}
        >
          <StaticImage
            src="../data/logos/pebblehost.png"
            height={267}
            layout="constrained"
            alt="PebbleHost sponsor logo"
          />
        </div>

        <div
          align="center"
          style={{
            fontSize: "15px",
            marginBottom: "5px",
          }}
        >
          Support me by purchasing through this link!
        </div>
      </a>
    </div>
  )
}

export default PebbleHost

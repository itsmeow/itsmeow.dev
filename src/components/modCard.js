import { GatsbyImage } from "gatsby-plugin-image"
import ThunderDownloads from "./thunderDownloads"

const ModCard = ({
  customid,
  name,
  info,
  role,
  title,
  url,
  sitelink,
  curseforge,
  curseforge_game,
  spigot,
  thunder,
  image,
}) => {
  let href = null
  if (spigot) {
    href = "https://www.spigotmc.org/resources/" + url
  } else if (thunder) {
    let parts = url.split(":")
    href = `https://thunderstore.io/c/${parts[0]}/p/${parts[1]}`
  } else if (curseforge) {
    href = `https://curseforge.com/${
      curseforge_game || "minecraft/mc-mods"
    }/${name}`
  } else {
    href = url
  }

  return (
    <div className="card" id={name}>
      <a
        className="mod-card-link"
        rel="noopener noreferrer"
        target="_blank"
        href={href}
      >
        <GatsbyImage
          className="mod-card-img"
          image={image}
          alt="Project thumbnail"
        />
        <h5 className="mod-card-title">{title}</h5>
        {curseforge ? (
          <div className="mod-card-downloads">
            <img
              className="mod-card-cfbadge"
              src={
                "https://cf.way2muchnoise.eu/full_" +
                (customid || name) +
                "_downloads.svg"
              }
              alt="CurseForge download count badge"
            />
          </div>
        ) : thunder ? (
          <div className="mod-card-downloads">
            <ThunderDownloads id={url} />
          </div>
        ) : (
          <></>
        )}
        <div className="mod-card-sub-role">{role}</div>
        <div className="mod-card-sub-info">{info}</div>
        {sitelink ? (
          <a
            className="mod-card-sitebutton"
            rel="noopener noreferrer"
            target="_blank"
            href={sitelink}
          >
            Website
          </a>
        ) : (
          <></>
        )}
      </a>
    </div>
  )
}

export default ModCard

import { GatsbyImage } from "gatsby-plugin-image"

const ModCard = ({
  customid,
  name,
  info,
  role,
  title,
  url,
  sitelink,
  spigoturl,
  image,
}) => {
  return (
    <div className="card" id={name}>
      <a
        className="mod-card-link"
        rel="noopener noreferrer"
        target="_blank"
        href={
          spigoturl
            ? "https://www.spigotmc.org/resources/" + spigoturl
            : url || "https://curseforge.com/minecraft/mc-mods/" + name
        }
      >
        <GatsbyImage
          className="mod-card-img"
          image={image}
          alt="Project thumbnail"
        />
        <h5 className="mod-card-title">{title}</h5>
        {!spigoturl ? (
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

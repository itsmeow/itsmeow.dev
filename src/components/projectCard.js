import { GatsbyImage } from "gatsby-plugin-image"
import LinkButton from "../components/linkButton"
import { FaGithub, FaGlobe, FaPlay } from "react-icons/fa"

const ProjectCard = ({
  name,
  uses,
  youtube_link,
  github,
  external_link,
  download_type,
  download_link,
  image,
  image_gif,
  description,
  className,
  ...remainder
}) => {
  let links = []
  if (download_type === "link" || download_type === "github-release") {
    links.push(
      <LinkButton
        key="download"
        href={
          download_link
            ? download_link
            : "https://github.com/" + github + "/releases"
        }
        blank
      >
        <FaGlobe />
        <span> Get</span>
      </LinkButton>
    )
  }
  if (external_link) {
    links.push(
      <LinkButton key="external" href={external_link} blank>
        <FaGlobe />
        <span> Visit</span>
      </LinkButton>
    )
  }
  if (youtube_link) {
    links.push(
      <LinkButton
        key="youtube"
        href={"https://youtube.com/watch?v=" + youtube_link}
        blank
        color="#FF0000"
        hoverColor="#FF7777"
      >
        <FaPlay />
        <span> Watch</span>
      </LinkButton>
    )
  }
  if (github) {
    links.push(
      <LinkButton
        key="github"
        href={"https://github.com/" + github}
        blank
        color="#202020"
        hoverColor="#323232"
      >
        <FaGithub />
        <span> GitHub</span>
      </LinkButton>
    )
  }
  return (
    <section
      className={
        "project-card highlightsection" + (className ? " " + className : "")
      }
      {...remainder}
    >
      {image || image_gif ? (
        <div className="project-image">
          {image ? (
            <GatsbyImage image={image} alt={name + " preview"} />
          ) : (
            <img
              src={"/" + image_gif}
              alt={name + " preview"}
              width={800}
              height={800}
            />
          )}
        </div>
      ) : null}
      <section className="project-info">
        <section className="project-card-top">
          <section className="project-main-info">
            <h2 className="project-name">{name}</h2>
            <span className="project-uses">
              <b>Uses:</b> {uses}
            </span>
          </section>
          {links ? <section className="project-links">{links}</section> : <></>}
        </section>
        <hr />
        <p>{description}</p>
      </section>
    </section>
  )
}

export default ProjectCard

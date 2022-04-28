import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProjectCard from "../../components/projectCard"

const ProjectPage = () => {
  let { projects } = useStaticQuery(graphql`
    query {
      projects: allProject {
        nodes {
          name
          uses
          youtube_link
          github
          external_link
          download_type
          download_link
          description
          image {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                quality: 90
                placeholder: BLURRED
                width: 190
                height: 190
                transformOptions: { fit: CONTAIN, cropFocus: CENTER }
              )
            }
          }
          image_gif
        }
      }
    }
  `)
  projects = projects.nodes.map((project) => (
    <ProjectCard
      style={{ marginBottom: "20px" }}
      className={project.image || project.image_gif ? null : "no-image"}
      key={project.name}
      {...project}
      image={project.image?.childImageSharp?.gatsbyImageData}
    />
  ))
  return (
    <Layout pageInfo={{ pageName: "projects" }}>
      <SEO
        title="Projects"
        description="A list of public software projects by itsmeowdev"
      />
      <main>
        <h1 align="center" style={{ marginTop: "10px" }}>
          Projects
        </h1>
        <p align="center">A list of public software projects I've created</p>
        <div className="center-item-2" style={{ maxWidth: "1500px" }}>
          <hr />
        </div>

        <section className="limit-width">
          <div className="center-sections">{projects}</div>
        </section>
      </main>
    </Layout>
  )
}

export default ProjectPage

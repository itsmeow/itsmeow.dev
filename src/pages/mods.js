import { Container } from "react-bootstrap"
import ModCard from "../components/modCard"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Mods = () => {
  const { allModCategory } = useStaticQuery(
    graphql`
      query {
        allModCategory(sort: { fields: index }) {
          nodes {
            name
            title
            children {
              ... on Mod {
                customid
                name
                info
                role
                title
                url
                sitelink
                spigoturl
                thumbnail {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      layout: FULL_WIDTH
                      quality: 100
                    )
                  }
                }
                thumbnail_local {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      layout: FULL_WIDTH
                      quality: 100
                    )
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout pageInfo={{ pageName: "mods" }}>
      <SEO title="Mods" description="its_meow's mod list and info" />
      <Container>
        <main style={{ paddingTop: "10px" }}>
          <noscript align="center">
            This page will not load properly without Javascript enabled.
          </noscript>

          {allModCategory.nodes.map((modCategory) => (
            <section key={modCategory.name} id={modCategory.name}>
              <h2 key={"header" + modCategory.name} align="center">
                {modCategory.title}
              </h2>
              <div key={modCategory.name} className="card-list">
                {modCategory.children.map((d) => (
                  <ModCard
                    key={d.name}
                    image={
                      d.thumbnail
                        ? d.thumbnail.childImageSharp.gatsbyImageData
                        : d.thumbnail_local
                        ? d.thumbnail_local.childImageSharp.gatsbyImageData
                        : null
                    }
                    {...d}
                  ></ModCard>
                ))}
              </div>
            </section>
          ))}
        </main>
      </Container>
    </Layout>
  )
}

export default Mods

import { Container } from "react-bootstrap"
import ModCard from "../components/modCard"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Mods = () => {
  const { allModCategory } = useStaticQuery(graphql`
    query {
      allModCategory(sort: { index: ASC }) {
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
              curseforge
              curseforge_game
              spigot
              thunder
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
  `)

  return (
    <Layout eventkey="mods">
      <Container>
        <main style={{ paddingTop: "10px" }}>
          <noscript className="center-text">
            This page will not load properly without Javascript enabled.
          </noscript>

          {allModCategory.nodes.map((modCategory) => (
            <section key={modCategory.name} id={modCategory.name}>
              <h2 key={"header" + modCategory.name} className="center-text">
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

export const Head = () => (
  <SEO title="Mods" description="itsmeowdev's mod list and info" />
)

export default Mods

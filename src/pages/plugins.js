import React from "react"
import { Container } from "react-bootstrap"
import { CardList } from "../components/card"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
const Plugins = () => {
  const json = useStaticQuery(
    graphql`
      query {
        allDataJson {
          edges {
            node {
              data {
                name
                title
                list {
                  thumbnail
                  spigoturl
                  role
                  name
                  info
                  customid
                  sitelink
                  title
                  url
                  thumbnail_local {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const items = []
  json.allDataJson.edges[1].node.data.forEach(data => {
    const items2 = []
    data.list.forEach(card => {
      const cardUrl =
        card.url || "https://www.spigotmc.org/resources/" + card.spigoturl
      items2.push(
        <div key={card.name} className="element" id={card.name}>
          <a
            className="element_link"
            rel="noopener noreferrer"
            target="_blank"
            href={cardUrl}
          >
            <img
              className="element_img"
              src={
                card.thumbnail || card.thumbnail_local.childImageSharp.fluid.src
              }
              alt="Unable to get thumbnail"
            />
            <h5 className="element_text">{card.title}</h5>
            <div className="element_subtext_role">{card.role}</div>
            <div className="element_subtext_info">{card.info}</div>
          </a>
        </div>
      )
    })
    items.push(
      <section key={"section" + data.name}>
        <h2 key={"header" + data.name} align="center">
          {data.title}
        </h2>
        <CardList key={data.name} id={data.name}>
          {items2}
        </CardList>
      </section>
    )
  })

  return (
    <Layout pageInfo={{ pageName: "plugins" }}>
      <SEO title="Plugins" description="its_meow's plugin list and info" />
      <Container>
        <main>
          <noscript align="center">
            This page will not load properly without Javascript enabled.
          </noscript>
          {items}
        </main>
      </Container>
    </Layout>
  )
}

export default Plugins

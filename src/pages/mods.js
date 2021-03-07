import React from "react"
import { Container } from "react-bootstrap"
import { CardList } from "../components/card"
import { useStaticQuery, graphql } from "gatsby"
import PebbleHost from "../components/pebblehost"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const Mods = () => {
  const { allModCategory } = useStaticQuery(
    graphql`
      query {
        allModCategory {
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
                      width: 180
                      placeholder: BLURRED
                      quality: 100
                    )
                  }
                }
                thumbnail_local {
                  childImageSharp {
                    gatsbyImageData(
                      width: 180
                      placeholder: BLURRED
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
  const items = []

  allModCategory.nodes.forEach(data => {
    const items2 = []
    data.children.forEach(card => {
      const cardUrl = card.spigoturl
        ? "https://www.spigotmc.org/resources/" + card.spigoturl
        : card.url || "https://curseforge.com/minecraft/mc-mods/" + card.name
      const badgeUrl =
        "https://cf.way2muchnoise.eu/full_" +
        (card.customid || card.name) +
        "_downloads.svg"
      const image = card.thumbnail
        ? getImage(card.thumbnail)
        : card.thumbnail_local
        ? getImage(card.thumbnail_local)
        : null
      items2.push(
        <div key={card.name} className="element" id={card.name}>
          <a
            className="element_link"
            rel="noopener noreferrer"
            target="_blank"
            href={cardUrl}
          >
            <GatsbyImage
              className="element_img"
              image={image}
              alt="Project thumbnail"
            />
            <h5 className="element_text">{card.title}</h5>
            {!card.spigoturl ? (
              <div className="element_downloads">
                <img
                  className="cfbadge"
                  src={badgeUrl}
                  alt="CurseForge download count badge"
                />
              </div>
            ) : (
              <></>
            )}
            <div className="element_subtext_role">{card.role}</div>
            <div className="element_subtext_info">{card.info}</div>
            {card.sitelink ? (
              <a
                className="sitebutton"
                rel="noopener noreferrer"
                target="_blank"
                href={card.sitelink}
              >
                Website
              </a>
            ) : (
              <></>
            )}
          </a>
        </div>
      )
    })
    items.push(
      <section key={"section" + data.name} id={data.name}>
        <h2 key={"header" + data.name} align="center">
          {data.title}
        </h2>
        <CardList key={data.name}>{items2}</CardList>
      </section>
    )
  })

  return (
    <Layout pageInfo={{ pageName: "mods" }}>
      <SEO title="Mods" description="its_meow's mod list and info" />
      <Container>
        <main>
          <noscript align="center">
            This page will not load properly without Javascript enabled.
          </noscript>
          <PebbleHost
            style={{
              width: "100%",
              maxWidth: "600px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            className="center-item-2 pebblebox"
          />

          {items}
        </main>
      </Container>
    </Layout>
  )
}

export default Mods

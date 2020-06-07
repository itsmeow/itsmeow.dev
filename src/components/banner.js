import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Banner = ({ src }) => {
  const sources = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "banner.png" }) {
        childImageSharp {
          fluid(maxHeight: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bannerImage2: file(relativePath: { eq: "banner2.png" }) {
        childImageSharp {
          fluid(maxHeight: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iconImage: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fluid(maxHeight: 200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="banner-pane">
      <div className="banner-container">
        <div className="banner">
          <div className="title-front">
            <div className="avatar-container">
              <Img
                fluid={sources.iconImage.childImageSharp.fluid}
                align="center"
              />
            </div>
            <div className="title">itsmeow.dev</div>
          </div>
          <div className="image-wrapper">
            <Img
              fluid={
                src === "1"
                  ? sources.bannerImage.childImageSharp.fluid
                  : sources.bannerImage2.childImageSharp.fluid
              }
              align="center"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

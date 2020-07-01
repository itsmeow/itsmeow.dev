import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Avatar from "./avatar"

const Banner = ({ src }) => {
  const sources = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "banner.webp" }) {
        childImageSharp {
          fluid(maxHeight: 800, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bannerImage2: file(relativePath: { eq: "banner2.webp" }) {
        childImageSharp {
          fluid(maxHeight: 800, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="banner-pane">
        <div className="banner-container">
          <div className="banner">
            <div className="title-front">
              <Avatar />
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
      <Avatar className="avatar-small" />
    </>
  )
}

export default Banner

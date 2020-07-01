import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Avatar = ({ className, ...remainder }) => {
  const sources = useStaticQuery(graphql`
    query {
      iconImage: file(relativePath: { eq: "icon.webp" }) {
        childImageSharp {
          fluid(maxHeight: 200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div
      className={"avatar-container" + (className ? " " + className : "")}
      {...remainder}
    >
      <Img fluid={sources.iconImage.childImageSharp.fluid} align="center" />
    </div>
  )
}

export default Avatar

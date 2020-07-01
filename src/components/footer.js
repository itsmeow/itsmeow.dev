import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FaGithub } from "react-icons/fa"

const Footer = () => {
  const { modsLogo } = useStaticQuery(
    graphql`
      query {
        modsLogo: file(relativePath: { eq: "modslogo.png" }) {
          childImageSharp {
            fixed(width: 211, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return (
    <footer>
      <div className="topfooter">
        <Link to="/" className="link-no-style">
          <Img
            alt="its_meow mods logo"
            fixed={modsLogo.childImageSharp.fixed}
          ></Img>
        </Link>
        <div className="github">
          <a
            href="https://github.com/itsmeow/itsmeow.dev"
            className="link-no-style"
            target="_blank"
            rel="noopener noreferrer"
            alt="GitHub logo"
          >
            <FaGithub />
            <span>Source</span>
          </a>
        </div>
      </div>
      <div className="bottomfooter">
        <div className="left-text">
          by itsmeow - © {new Date().getFullYear()} - MIT License - Thanks for
          visiting!
        </div>
      </div>
    </footer>
  )
}

export default Footer

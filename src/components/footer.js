import React from "react"
import { Link } from "gatsby"
import modslogo from "./../data/modslogo.png"
import { FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div className="topfooter">
        <Link to="/" className="link-no-style">
          <img alt="its_meow mods logo" src={modslogo}></img>
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

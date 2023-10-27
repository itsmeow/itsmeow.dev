import { Card, CardList } from "../components/card"
import PatreonButton from "../components/patreon"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { IconContext } from "react-icons"

import { FaGithub, FaTwitter, FaTwitch, FaDiscord } from "react-icons/fa"

import YouTube from "../data/logos/svg/YouTube.svg"
import Instagram from "../data/logos/svg/Instagram.svg"
import CurseForge from "../data/logos/svg/CurseForge.svg"
import Banner from "../components/banner"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  let { image } = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "banner.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 75, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `)
  return (
    <Layout eventkey="index">
      <main>
        <Banner image={image.childImageSharp.gatsbyImageData} />
        <section className="pad">
          <h2 align="center" style={{ margintop: "20px" }} id="links">
            Links
          </h2>
          <div className="center-item-x">
            <PatreonButton userid="28256207" />
          </div>
          <CardList>
            <Card link="https://github.com/itsmeow/" text="GitHub - itsmeow">
              <FaGithub />
            </Card>
            <Card
              link="https://twitter.com/itsmeowdev"
              text="Twitter - @itsmeowdev"
            >
              <IconContext.Provider value={{ color: "#1DA1F2" }}>
                <FaTwitter />
              </IconContext.Provider>
            </Card>
            <Card
              link="https://www.curseforge.com/members/itsmeowdev/projects"
              text="CurseForge - itsmeowdev"
            >
              <img
                className="pad"
                src={CurseForge}
                alt="CurseForge Anvil Logo"
              />
            </Card>
            <Card
              link="https://www.youtube.com/user/hiotewdew"
              text="YouTube - itsmeowdev"
            >
              <img className="pad" src={YouTube} alt="YouTube Logo" />
            </Card>
            <Card
              link="https://discord.itsmeow.dev/"
              text="Discord - itsmeowdev"
            >
              <IconContext.Provider value={{ color: "#7289DA" }}>
                <FaDiscord />
              </IconContext.Provider>
            </Card>
            <Card
              link="https://www.twitch.tv/itsmeowdev"
              text="Twitch - itsmeowdev"
            >
              <IconContext.Provider value={{ color: "#9146FF" }}>
                <FaTwitch />
              </IconContext.Provider>
            </Card>
            <Card
              link="https://www.instagram.com/itsmeowdev"
              text="Instagram - @itsmeowdev"
            >
              <img className="pad" src={Instagram} alt="Instagram Logo" />
            </Card>
          </CardList>
        </section>
      </main>
    </Layout>
  )
}

export const Head = () => (
  <SEO
    title="Home"
    keywords={[
      `itsmeowdev`,
      `itsmeow`,
      `its_meow`,
      `minecraft`,
      `mod developer`,
      `developer`,
    ]}
  />
)

export default IndexPage

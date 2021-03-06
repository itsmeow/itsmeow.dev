import { Card, CardList } from "../components/card"
import PatreonButton from "../components/patreon"
import TwitterWidget from "../components/twitter"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { IconContext } from "react-icons"

import { FaGithub, FaTwitter, FaTwitch, FaDiscord } from "react-icons/fa"

import { GoFlame } from "react-icons/go"
import YouTube from "../data/logos/svg/YouTube.svg"
import Instagram from "../data/logos/svg/Instagram.svg"
import PebbleHost from "../components/pebblehost"
import Banner from "../components/banner"
import ClientOnly from "../components/clientonly"
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
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO
        title="Home"
        keywords={[
          `its_meow`,
          `itsmeow`,
          `itsmeowdev`,
          `minecraft`,
          `mod developer`,
          `developer`,
        ]}
      />
      <main>
        <Banner image={image.childImageSharp.gatsbyImageData} />
        <section className="pad highlightsection">
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
              <IconContext.Provider value={{ color: "#DE6A3B" }}>
                <GoFlame />
              </IconContext.Provider>
            </Card>
            <Card
              link="https://www.youtube.com/user/hiotewdew"
              text="YouTube - itsmeowdev"
            >
              <img className="pad" src={YouTube} alt="YouTube Logo" />
            </Card>
            <Card
              link="https://discord.itsmeow.dev/"
              text="Discord - its_meow#6903"
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
          <div className="flex-list" style={{ marginTop: "10px" }}>
            <div
              className="flex-list-item scale-big"
              style={{ height: "320px" }}
            >
              <ClientOnly style={{ width: "100%", maxWidth: "600px" }}>
                <TwitterWidget width="100%" />
              </ClientOnly>
            </div>
            <div
              className="flex-list-item scale-big"
              style={{ height: "320px" }}
            >
              <PebbleHost />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage

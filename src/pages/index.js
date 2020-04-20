import React from "react"
import { Card, CardList } from "../components/card"
import PatreonButton from "../components/patreon"
import TwitterWidget from "../components/twitter"
import DiscordWidget from "../components/discord"
import icon from "../data/icon.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { IconContext } from "react-icons"

import { FaGithub, FaTwitter, FaTwitch, FaDiscord } from "react-icons/fa"

import { GoFlame } from "react-icons/go"
import YouTube from "../data/YouTube.svg"
import { Container, Row, Col } from "react-bootstrap"

const IndexPage = () => {
  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" keywords={[`its_meow`, `itsmeow`]} />
      <main>
        <div className="rightbar">
          <img alt="its_meow avatar" className="centerimg" src={icon} />
          <p
            align="center"
            style={{ margin: "0", marginbottom: "20px", fontsize: "0.6rem" }}
          >
            its_meow avatar
          </p>
          <section className="limit-width">
            <DiscordWidget
              style={{ margintop: "10px" }}
              widget_id="504369356260769792"
              theme="dark"
              width="100%"
              height="300"
              allowtransparency="true"
              frameborder="0"
            />
            <TwitterWidget
              width="100%"
              height="300"
              dnt="true"
              theme="dark"
              link_color="#E81C4F"
              username="it_is_meow"
            />
          </section>
        </div>
        <div className="left-content">
          <Container className="show-small">
            <Row noGutters>
              <Col noGutters>
                <img
                  alt="its_meow avatar"
                  style={{ width: "30%" }}
                  className="centerimg"
                  src={icon}
                />
                <p
                  align="center"
                  style={{
                    margin: "0",
                    fontsize: "0.6rem",
                  }}
                >
                  its_meow avatar
                </p>
              </Col>
            </Row>
          </Container>
          <section className="highlightsection limit-width-pad">
            <h2 id="about_me">About its_meow</h2>
            <p>
              I'm a hobbyist mod developer. I do Minecraft modding in my free
              time.
            </p>
            <hr />
          </section>
          <section className="highlightsection limit-width-pad">
            <h2 id="comissions">Commissions</h2>
            <p>
              I sometimes do modding commissions (this is highly dependent on
              the case). Contact me (best way is via Discord, linked below) if
              you're interested. I have a small portfolio of public comissions
              on the mod page.
            </p>
            <hr />
          </section>
          <section className="highlightsection limit-width-pad">
            <h2 id="projects">Projects</h2>
            <p>
              I have a few long-term projects and mods I maintain, you can find
              these in the mods tab. Generally my source is on GitHub, there is
              not much I do that is not open source.
            </p>
            <hr />
          </section>
          <section className="show-small highlightsection">
            <div className="flex-list">
              <div className="flex-list-item scale-prop">
                <DiscordWidget
                  style={{ margintop: "10px" }}
                  widget_id="504369356260769792"
                  theme="dark"
                  width="100%"
                  height="300"
                  allowtransparency="true"
                  frameborder="0"
                />
              </div>
              <div className="flex-list-item scale-prop">
                <TwitterWidget
                  width="100%"
                  height="300"
                  dnt="true"
                  theme="dark"
                  link_color="#E81C4F"
                  username="it_is_meow"
                />
              </div>
            </div>
          </section>
          <section className="pad highlightsection">
            <h2 align="center" style={{ margintop: "20px" }} id="links">
              Links
            </h2>
            <div className="center-text">
              <PatreonButton userid="28256207" />
            </div>
            <CardList>
              <Card link="https://github.com/itsmeow/" text="GitHub - itsmeow">
                <FaGithub />
              </Card>
              <Card
                link="https://twitter.com/it_is_meow"
                text="Twitter - @it_is_meow"
              >
                <IconContext.Provider value={{ color: "#1DA1F2" }}>
                  <FaTwitter />
                </IconContext.Provider>
              </Card>
              <Card
                link="https://www.curseforge.com/members/ist_meow/projects"
                text="CurseForge - ist_meow"
              >
                <IconContext.Provider value={{ color: "#DE6A3B" }}>
                  <GoFlame />
                </IconContext.Provider>
              </Card>
              <Card
                link="https://www.youtube.com/user/hiotewdew"
                text="YouTube - its_meow"
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
                link="https://www.twitch.tv/ist_meow"
                text="Twitch - ist_meow"
              >
                <IconContext.Provider value={{ color: "#9146FF" }}>
                  <FaTwitch />
                </IconContext.Provider>
              </Card>
            </CardList>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

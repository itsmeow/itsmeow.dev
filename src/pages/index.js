import React from "react"
import { Card, CardList } from "../components/card"
import PatreonButton from "../components/patreon"
import TwitterWidget from "../components/twitter"
import icon from "../data/icon.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { IconContext } from "react-icons"

import { FaGithub, FaTwitter, FaTwitch, FaDiscord } from "react-icons/fa"

import { GoFlame } from "react-icons/go"
import YouTube from "../data/YouTube.svg"
import { Container, Row, Col } from "react-bootstrap"
import ClientOnly from "../components/clientonly"

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
            <ClientOnly>
              <TwitterWidget />
            </ClientOnly>
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
              I'm a hobbyist developer, I love learning new technologies and
              improving my skills in all sorts of things. I love learning about
              computing, science, math, engineering, random trivia, chemistry,
              and probably more.
            </p>
            <h4>Minecraft</h4>
            <p>
              I have more than five years of experience creating mods/addons for
              Minecraft, using a variety of tools including Forge, Bukkit, and
              Fabric. Through this I have gained experience in supporting a
              large userbase and dealing with issue tickets. My mods combined
              have amassed over 3.5 million downloads and continue to grow.
            </p>
            <h4>Java</h4>
            <p>
              I am skilled with Java, as my most practiced and first programming
              language. I've used it to create countless projects and tools over
              many years.
            </p>
            <h4>Web</h4>
            <p>
              I am also experienced in a variety of web development tools and
              languages. I've used modern JavaScript tools such as NodeJS and
              React. I have light experience with SQL database design and
              querying. As an example, this website was written using Gatsby.js,
              React, and Bootstrap.
            </p>
            <h4>C#</h4>
            <p>
              I am familiar with Visual C# design using Visual Studio and have
              used it to create desktop applications, utilizing DLLs to perform
              tasks using graphical input. I have also used C# in Unity to drive
              engine activity and player control.
            </p>
            <h4>Others</h4>
            <p>
              I am familiar with various scripting languages, including Python,{" "}
              Lua, Batch, and Bash.
            </p>
            <h4>In conclusion</h4>
            <p>
              Regardless of all the technologies and languages I may or may not
              have used, I am dedicated to learning and improving in all
              categories, and have proven to be a fast learner. I learned Bukkit
              in a week and used it to write a full localization system for an
              existing plugin. I taught myself how to code using the Internet
              when I was just 10 years old. I learned React.js in a week so I
              could stop copy-pasting HTML on this website.
            </p>
            <hr />
          </section>
          <section className="highlightsection limit-width-pad">
            <h2 id="comissions">Commissions</h2>
            <p>
              If you have an idea for a mod, plugin, or anything programming
              related you want made, and some money, shoot me a message on my{" "}
              <a href="https://discord.itsmeow.dev/">Discord</a>.
            </p>
            <hr />
          </section>
          <section className="highlightsection limit-width-pad">
            <h2 id="projects">Projects</h2>
            <p>
              I have a many long-term projects and mods I maintain, you can find
              these listed on the mods and plugins pages. Almost all of my
              projects' source can be found on GitHub.
            </p>
            <hr />
          </section>
          <section className="show-small highlightsection">
            <div className="flex-list">
              <div className="flex-list-item scale-prop">
                <ClientOnly>
                  <TwitterWidget />
                </ClientOnly>
              </div>
            </div>
          </section>
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

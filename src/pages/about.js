import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"

const AboutPage = () => {
  let { image } = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "banner2.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 75, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `)
  return (
    <Layout eventkey="about">
      <main>
        <Banner image={image.childImageSharp.gatsbyImageData} />
        <article style={{ marginTop: "0" }} className="limit-width-pad">
          <section>
            <h2 id="about_me">About Me</h2>
            <hr />
            <p>
              Hi! I'm itsmeowdev, I'm a learner who loves computing, especially
              programming - with a passion for game development. I'm an
              experienced Minecraft mod developer, Space Station 13 developer,
              with a strong programming background. I also love front-end web
              development and web design - I made the website you are currently
              viewing from scratch!
            </p>
            <p>
              I'm currently a university student majoring in Cybersecurity & IT
              Management, with a minor in game design. I love sharing my
              knowledge with others and help run the cybersecurity club on my
              campus.
            </p>
          </section>

          <section>
            <h2 id="hobbies">The Person Behind the Veil</h2>
            <hr />
            <p>
              Other than programming, some of my favorite things include various
              video games - I am a huge fan of space-themed games, sandbox
              games, and atmospheric horror games.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginRight: "30px" }}>
                <p>Some of my favorite games are:</p>
                <p>
                  <ul>
                    <li>Minecraft</li>
                    <li>Space Station 13</li>
                    <li>Elite: Dangerous</li>
                    <li>Super Paper Mario</li>
                    <li>My Sims: Kingdom</li>
                    <li>Tower Unite</li>
                    <li>Night in the Woods</li>
                  </ul>
                </p>
              </div>
              <div>
                <p>Some of my favorite horror games and other media include:</p>
                <p>
                  <ul>
                    <li>Amnesia: The Dark Descent</li>
                    <li>SOMA</li>
                    <li>Alien: Isolation</li>
                    <li>Outlast</li>
                    <li>Penumbra: Black Plague</li>
                    <li>SCP Wiki</li>
                    <li>The Magnus Archives</li>
                  </ul>
                </p>
              </div>
            </div>
            <p>
              I also love learning about random topics, I watch a lot of
              edutainment on YouTube - channels like Wendover Productions, Real
              Life Lore, etc. I absorb a lot of random information, so I love
              doing trivia and learning more random information.
            </p>
            <p>On the TV side of things some of my favorite shows are:</p>
            <p>
              <ul>
                <li>Doctor Who</li>
                <li>Heartbreak High</li>
                <li>She-Ra and the Princesses of Power</li>
              </ul>
            </p>
            <p>
              I love theater, and I have taken part in my university's
              productions in the past! Another random (and unrelated) fun fact
              about me: I can ride a unicycle. Yep! It's just one of those
              things I learned as a kid and never forgot.
            </p>
            <p>
              Also, if it wasn't obvious enough from my username, I like cats!
              I've never actually owned a cat, however. I will update this page
              when I do finally get a cat.
            </p>
          </section>
          <section>
            <h2 id="programming">Programming Specializations</h2>
            <hr />
            <h3>Minecraft</h3>
            <p>
              I have more than seven years of experience creating mods/addons
              for Minecraft, using a variety of tools including Forge, Bukkit,
              and Fabric. Through this I have gained experience in supporting a
              large userbase and dealing with issue tickets. My mods combined
              have amassed over 40 million downloads and continue to grow. I
              specialize in adding entities but I have a general understanding
              of most modding topics.
            </p>
            <h3>Java</h3>
            <p>
              I am skilled with Java, as my most practiced and first programming
              language. I've used it to create countless projects and tools over
              many years. It's not my favorite, but it's capable and necessary
              in the case of Minecraft mods.
            </p>
            <h3>JavaScript</h3>
            <p>
              I am a huge fan of the JavaScript ecosystem, just due to the sheer
              volume of libraries and tools available. As such, I often find
              myself using NodeJS if I need to make a small script or project. I
              am quite familiar with Node, as it makes up the other portion of
              my regular programming tasks.
            </p>
            <h3>Web (HTML/CSS/React)</h3>
            <p>
              I am also experienced in a variety of web development tools and
              languages. I've used modern JavaScript tools such as NodeJS and
              React. As an example, this website was written using Gatsby.js,
              React, and Bootstrap.
            </p>
            <p>
              I have designed a wide variety of websites, including as
              coursework. I'm careful to keep things working on mobile layouts.
              A lot of my web design also takes place within the confines of
              Space Station 13's UI engine, TGUI, which is based on Inferno, a
              react-like web framework. I've developed several major UI addition
              to the game which use web technology.
            </p>
            <h3>Database Design and SQL</h3>
            <p>
              Most of my experience with database design comes from Space
              Station 13, where I developed a database preferences system. I
              have also made several smaller projects interacting with SQL
              databases, such as my ActiveRewards Spigot plugin.
            </p>
            <h3>C#</h3>
            <p>
              I am familiar with Visual C# design using Visual Studio and have
              used it to create desktop applications, utilizing DLLs to perform
              tasks using graphical input. I also use C# in Unity for
              work-in-progress games, mostly doing physics and input
              programming. I find C# to be very familiar coming from a Java
              background.
            </p>
            <h3>Others</h3>
            <p>
              I am familiar with various scripting languages, including Python,
              Lua, Batch, and Bash. I am quite comfortable with Python and have
              used it for several projects.
            </p>
            <p>
              Regardless of all the technologies and languages I may or may not
              have used, I have proven to be a fast learner. I learned Bukkit in
              a week and used it to write a full localization system for an
              existing plugin. I also taught myself how to code. I learned
              React.js in a week so I could stop copy-pasting HTML on this
              website. Onboarding for me typically goes very smoothly.
            </p>
          </section>

          <section>
            <h2 id="cybersecurity">Cybersecurity Background</h2>
            <hr />
            <p>
              My background in cybersecurity mostly involves being generally
              aware of how programs work and how security exploits work, and
              applying that knowledge to cybersecurity competitions as well as
              my personal programs and servers.
            </p>
            <p>
              My major program also includes cybersecurity frameworks and
              communication to management - I am most interested and experienced
              in hardening and programming security but I also have experience
              in forensics, binary exploitation, reverse engineering, and
              penetration testing.
            </p>
            <p>
              I have received high (top 10 to and including 1st place) rankings
              in the NCAE Cyber Games, National Cyber League, as well as a few
              smaller CTFs. I now contribute to the competition platform for
              NCAE Cyber Games after having graduated from the competition.
            </p>
          </section>
          <section>
            <h2 id="comissions">Commissions</h2>
            <hr />
            <p>
              If you have an idea for a mod, plugin, or anything programming
              related you want made, and some money, shoot me a message on my{" "}
              <a href="https://discord.itsmeow.dev/">Discord</a>.
            </p>
          </section>
          <section>
            <h2 id="projects">Projects</h2>
            <hr />
            <p>
              I have a many long-term projects and mods I maintain, you can find
              these listed on the mods and projects pages. Almost all of my
              projects' source can be found on GitHub - I am strong believer in
              open source software.
            </p>
          </section>
        </article>
      </main>
    </Layout>
  )
}

export const Head = () => <SEO title="About" description="About itsmeow" />

export default AboutPage

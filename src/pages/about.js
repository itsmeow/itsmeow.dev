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
    <Layout pageInfo={{ pageName: "about" }}>
      <SEO title="About" description="About itsmeow" />
      <main>
        <Banner image={image.childImageSharp.gatsbyImageData} />
        <section
          style={{ marginTop: "0" }}
          className="highlightsection limit-width-pad"
        >
          <h2 id="about_me">About itsmeow</h2>
          <p>
            I'm a hobbyist developer, I love learning new technologies and
            improving my skills in all sorts of things. I love learning about
            computing, science, math, engineering, random trivia, chemistry, and
            more.
          </p>
          <h4>Minecraft</h4>
          <p>
            I have more than five years of experience creating mods/addons for
            Minecraft, using a variety of tools including Forge, Bukkit, and
            Fabric. Through this I have gained experience in supporting a large
            userbase and dealing with issue tickets. My mods combined have
            amassed over 20 million downloads and continue to grow.
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
            I am familiar with various scripting languages, including Python,
            Lua, Batch, and Bash.
          </p>
          <h4>In conclusion</h4>
          <p>
            Regardless of all the technologies and languages I may or may not
            have used, I am dedicated to learning and improving in all
            categories, and have proven to be a fast learner. I learned Bukkit
            in a week and used it to write a full localization system for an
            existing plugin. I taught myself how to code using the Internet when
            I was just 10 years old. I learned React.js in a week so I could
            stop copy-pasting HTML on this website.
          </p>
        </section>
        <hr className="limit-width" />
        <section className="highlightsection limit-width-pad">
          <h2 id="comissions">Commissions</h2>
          <p>
            If you have an idea for a mod, plugin, or anything programming
            related you want made, and some money, shoot me a message on my{" "}
            <a href="https://discord.itsmeow.dev/">Discord</a>.
          </p>
        </section>
        <hr className="limit-width" />
        <section className="highlightsection limit-width-pad">
          <h2 id="projects">Projects</h2>
          <p>
            I have a many long-term projects and mods I maintain, you can find
            these listed on the mods and plugins pages. Almost all of my
            projects' source can be found on GitHub.
          </p>
        </section>
      </main>
    </Layout>
  )
}

export default AboutPage

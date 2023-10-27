import ModdingLicense from "../data/modding_license.png"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ModdingLicensePage = () => {
  return (
    <Layout eventkey="moddinglicense">
      <Container>
        <main>
          <img
            src={ModdingLicense}
            alt="Modding License"
            style={{
              width: "100%",
              marginbottom: "10%",
              border: "4px solid #7a0800",
            }}
          />
          <p
            style={{
              color: "#ffffff20",
              textalign: "center",
              fontsize: "0.6rem",
            }}
          >
            Note: this is for satire purposes only and is not in any way
            endorsed by or by Curse, Forge, Mojang, or Minecraft.
          </p>
        </main>
      </Container>
    </Layout>
  )
}

export const Head = () => (
  <SEO
    title="Modding License"
    description="its_meow's Modding License"
    image={ModdingLicense}
  />
)

export default ModdingLicensePage

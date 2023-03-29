import { useState } from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as diff from "diff"

const PoseGen = () => {
  const [inText, setInText] = useState("")
  const [inText2, setInText2] = useState("")
  const [outText, setOutText] = useState("")
  const updateOut = () => {
    const getAngles = /this\.setRotateAngle.*;/gm
    const getName = (t) => {
      const matches = t.match(/(?<=this\.setRotateAngle\()\S*(?=,)/g)
      if (matches) {
        return matches[0]
      } else {
        return ""
      }
    }
    const leftMatches = inText.match(getAngles)
    const rightMatches = inText2.match(getAngles)
    if (leftMatches && rightMatches && diff !== undefined) {
      leftMatches.sort()
      rightMatches.sort()
      const d = diff.diffLines(
        leftMatches.join("\n"),
        rightMatches.join("\n"),
        { newlineIsToken: true, ignoreWhitespace: false }
      )
      let pose1 = "public void pose1() {\n"
      let pose2 = "public void pose2() {\n"
      d.forEach((part) => {
        if (part.added || part.removed) {
          let angles = part.value.match(getAngles)
          if (angles) {
            angles.forEach((val) => {
              let name = getName(val)
              if (part.added) {
                pose2 += "    " + val + "\n"
                if (leftMatches.find((s) => s.includes(name)) === undefined) {
                  pose1 += `    this.setRotateAngle(${name}, 0.0F, 0.0F, 0.0F);\n`
                }
              } else if (part.removed) {
                pose1 += "    " + val + "\n"
                if (rightMatches.find((s) => s.includes(name)) === undefined) {
                  pose2 += `    this.setRotateAngle(${name}, 0.0F, 0.0F, 0.0F);\n`
                }
              }
            })
          }
        }
      })
      pose1 += "}"
      pose2 += "}"
      setOutText(pose1 + "\n\n" + pose2)
    } else {
      setOutText("")
    }
  }
  return (
    <Layout eventkey="posegen">
      <SEO
        title="Pose Generator"
        description="Generates pose functions for Entity models from model files."
      />
      <Container>
        <main className="replace-page">
          <textarea
            className="input-area-half"
            value={inText}
            onChange={(event) => setInText(event.target.value)}
          ></textarea>
          <textarea
            className="input-area-half"
            value={inText2}
            onChange={(event) => setInText2(event.target.value)}
          ></textarea>
          <div className="output-container">
            <textarea
              className="output-area"
              value={outText}
              readOnly
            ></textarea>
            <div className="copy-button-container">
              <button onClick={updateOut} className="copy-button">
                Update
              </button>
            </div>
          </div>
        </main>
      </Container>
    </Layout>
  )
}

export default PoseGen

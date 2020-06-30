import React, { useState, useRef } from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Methods from "../util/replacers"

const ReplaceTool = () => {
  const [inText, setInText] = useState("")
  const [outText, setOutText] = useState("")
  const [getReplacer, setReplacer] = useState("1.15 Render Updater")
  const textAreaRef = useRef(null)
  const updateIn = val => {
    setInText(val)
    updateOut(val, getReplacer)
  }
  const updateOut = (val, replacer) => {
    setOutText(Methods()[`${replacer}`](val))
  }
  const updateReplacer = event => {
    setReplacer(event.target.value)
    updateOut(inText, event.target.value)
  }
  const copyToClipboard = e => {
    if (window !== undefined) {
      textAreaRef.current.select()
      document.execCommand("copy")
      e.target.focus()
    }
  }
  let selectOptions = []
  for (const key of Object.keys(Methods())) {
    selectOptions.push(<option value={key}>{key}</option>)
  }
  return (
    <Layout pageInfo={{ pageName: "replacetool" }}>
      <SEO
        title="Replace Tool"
        description="A thing to mess around with Regex"
      />
      <Container>
        <main id="replace-page">
          <label htmlFor="replace-select" id="replace-select-label">
            Replacement:
          </label>
          <select
            id="replace-select"
            value={getReplacer}
            onChange={updateReplacer}
            onBlur={null}
          >
            {selectOptions}
          </select>
          <textarea
            id="input-area"
            value={inText}
            onChange={event => updateIn(event.target.value)}
          ></textarea>
          <div id="output-container">
            <textarea
              id="output-area"
              value={outText}
              ref={textAreaRef}
              readOnly
            ></textarea>
            <div id="copy-button-container">
              <button onClick={copyToClipboard} id="copy-button">
                Copy To Clipboard
              </button>
            </div>
          </div>
        </main>
      </Container>
    </Layout>
  )
}

export default ReplaceTool

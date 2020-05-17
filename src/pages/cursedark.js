import React, { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

let isFirefox = false
let isChrome = false

const CurseDark = () => {
  const [buttonText, setButtonText] = useState("Detect Browser")
  const [notifText, setNotifText] = useState("")
  const [link, setLink] = useState("")
  const [titleVisible, setTitleVisible] = useState(true)
  const [notifVisible, setNotifVisible] = useState(false)
  const [installButtonStyle, setInstallButtonStyle] = useState({})
  const [installPhase, setInstallPhase] = useState("detect")

  useEffect(() => {
    isFirefox = typeof InstallTrigger !== "undefined"
    isChrome =
      !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)
  })
  return (
    <Layout pageInfo={{ pageName: "cursedark" }}>
      <SEO title="Curse Dark Theme" description="Dark Theme for Curse" />
      <Container>
        <main>
          <div id="installer-div"></div>
          <h1
            id="darktitle"
            className={titleVisible ? "show" : ""}
            style={{ position: "absolute", top: "30vh", left: "0", right: "0" }}
            align="center"
          >
            Curse Dark Theme
          </h1>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={
              notifVisible ? "bottom-text-nice show" : "bottom-text-nice"
            }
            style={{
              top: "60vh",
              display: "block",
              textDecoration: "none",
            }}
          >
            {notifText}
          </a>
          <div
            style={{
              justifyContent: "center",
              textAlign: "center",
              position: "absolute",
              top: "45vh",
              left: "0",
              right: "0",
              height: "10vh",
            }}
          >
            <button
              id="installbutton"
              className="stylebutton"
              style={installButtonStyle}
              onClick={() => {
                setTitleVisible(false)
                if (installPhase === "detect") {
                  setTimeout(() => {
                    if (!isFirefox && !isChrome) {
                      setNotifText(
                        "Unsupported browser. Supported browsers: Firefox and Chrome"
                      )
                      setNotifVisible(true)
                    } else {
                      setInstallButtonStyle({ fontSize: "1.2rem" })
                      setButtonText(
                        "Install " + (isFirefox ? "(Firefox)" : "(Chrome)")
                      )
                      if (isFirefox) {
                        setLink(
                          "https://addons.mozilla.org/en-US/firefox/addon/styl-us/"
                        )
                        setNotifText("Stylus on Firefox Addon Store")
                        setNotifVisible(true)
                      }
                      setInstallPhase("install")
                    }
                  }, 20)
                } else if (installPhase === "install") {
                  if (typeof window !== undefined) {
                    if (isFirefox) {
                      window.location =
                        "https://addons.mozilla.org/firefox/downloads/file/3374955/stylus-1.5.5-fx.xpi?src=dp-btn-primary"
                    } else if (isChrome) {
                      window.open(
                        "https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne",
                        "_blank"
                      )
                    }
                  }
                  setTimeout(() => {
                    setInstallButtonStyle({ fontSize: "1rem" })
                    setButtonText("Install Stylus User CSS Theme")
                    setInstallPhase("usercss")
                  }, 1000)
                } else if (installPhase === "usercss") {
                  if (typeof window !== undefined) {
                    window.open("curse-dark.user.css", "_blank")
                  }
                  setButtonText("Done")
                  setInstallPhase("reset")
                } else if (installPhase === "reset") {
                  setButtonText("Detect Browser")
                  setNotifText("")
                  setLink("")
                  setTitleVisible(true)
                  setNotifVisible(false)
                  setInstallButtonStyle({})
                  setInstallPhase("detect")
                }
              }}
            >
              {buttonText}
            </button>
          </div>
        </main>
      </Container>
    </Layout>
  )
}

export default CurseDark

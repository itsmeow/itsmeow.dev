import { useState, useEffect } from "react"
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
  const onClickButton = () => {
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
          setButtonText("Install " + (isFirefox ? "(Firefox)" : "(Chrome)"))
          if (isFirefox) {
            setLink("https://addons.mozilla.org/en-US/firefox/addon/styl-us/")
            setNotifText("Stylus on Firefox Addon Store")
            setNotifVisible(true)
          }
          setInstallPhase("install")
        }
      }, 20)
    } else if (installPhase === "install") {
      if (window) {
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
      if (window) {
        window.open(
          "https://itsmeow.dev/cursedark/curse-dark.user.css",
          "_blank"
        )
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
  }
  return (
    <Layout eventkey="cursedark">
      <main id="darkmain">
        <div id="installer-div">
          <div id="center-screen">
            <h1
              id="darktitle"
              className={titleVisible ? "center-text show" : "center-text"}
            >
              CurseForge Legacy Dark Theme
            </h1>
            <div
              style={{
                justifyContent: "center",
                textAlign: "center",
                height: "10vh",
                marginTop: "40px",
              }}
            >
              <button
                id="installbutton"
                className="stylebutton"
                style={installButtonStyle}
                onClick={onClickButton}
              >
                {buttonText}
              </button>
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={
                notifVisible ? "bottom-text-nice show" : "bottom-text-nice"
              }
              style={{
                display: "block",
                textDecoration: "none",
              }}
            >
              {notifText}
            </a>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export const Head = () => (
  <SEO
    title="Curse Dark Theme"
    description="Dark Theme for CurseForge Legacy"
  />
)

export default CurseDark

import React from "react"
import SEO from "../components/seo"

const Secret = () => {
  return (
    <>
      <SEO
        title="Skeppy Secret"
        description=";) my top secret project"
        image="https://i.redd.it/wj5ctxba4tf31.jpg"
      />
      <body>
        <h1 align="center">Skeppy's Secret</h1>
        <p align="center">
          GOTCHA! Retweet the tweet and WATCH MY{" "}
          <a href="https://www.youtube.com/watch?v=mW1N9koG7vM">
            YOUTUBE VIDEO
          </a>
          !! >:(((
        </p>
        <p align="center">
          yes this was all a ploy to get you to watch{" "}
          <a href="https://www.youtube.com/watch?v=mW1N9koG7vM">this video</a>
        </p>
        <p align="center">
          It's called using the clout{" "}
          <span role="img" aria-label="sunglasses">
            😎😎😎😎
          </span>
        </p>
        <br />
        <br />
        <br />
        <br />
        <div align="center">
          <iframe
            title="YouTube embed"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mW1N9koG7vM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br />
        <br />
        <br />
        <p align="center">
          Also check out my real website <a href="https://itsmeow.dev/">here</a>
          . thanks
        </p>
      </body>
    </>
  )
}

export default Secret

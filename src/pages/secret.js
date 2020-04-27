import React from "react"
//import { useState } from "react"
import SEO from "../components/seo"
import useTrollCount from "../hooks/useTrollCount"

const Secret = () => {
  const result = useTrollCount()
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
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullSCreen
          ></iframe>
        </div>
        <br />
        <br />
        <br />
        <p align="center">
          Also check out my real website <a href="https://itsmeow.dev/">here</a>
          . thanks
        </p>
        <h3 align="center">
          Plebs trolled by this page (updates every hour!):{" "}
          {result !== undefined && result !== null
            ? result.result !== undefined && result.result !== null
              ? result.result.totalsForAllResults !== undefined &&
                result.result.totalsForAllResults !== null
                ? result.result.totalsForAllResults["ga:uniquePageviews"]
                : "Loading..."
              : "Loading..."
            : "Loading..."}
        </h3>
      </body>
    </>
  )
}

export default Secret

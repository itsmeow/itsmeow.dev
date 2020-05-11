console.log("BUILD ON: " + process.env.NODE_ENV)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `itsmeow.dev`,
    description: `its_meow's Website`,
    author: `itsmeow`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`,
      },
    },
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: process.env.TWITTER_CONSUMER_KEY,
          consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
          bearer_token: process.env.TWITTER_BEARER_TOKEN,
        },
        queries: {
          Tweets: {
            endpoint: `statuses/user_timeline`,
            params: {
              screen_name: `it_is_meow`,
              include_rts: false,
              exclude_replies: true,
              tweet_mode: `extended`,
            },
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-meta-redirect`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-141623735-1`,
        head: true,
        anonymize: false,
      },
    },
    `gatsby-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `itsmeow.dev`,
        short_name: `itsmeow.dev`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#121212`,
        display: `minimal-ui`,
        icon: `src/data/icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

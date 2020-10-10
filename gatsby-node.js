exports.onCreateNode = ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/twitch",
    toPath: "https://twitch.itsmeow.dev/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/patreon",
    toPath: "https://patreon.itsmeow.dev/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/discord",
    toPath: "https://discord.itsmeow.dev/",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/betteranimalsplus",
    toPath: "https://betteranimalsplus.com/",
    isPermanent: true,
  })
}
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
  type twitterStatusesUserTimelineTweets implements Node {
    entities: twitterStatusesUserTimelineTweetsEntities
  }
  type twitterStatusesUserTimelineTweetsEntities {
    urls: [twitterStatusesUserTimelineTweetsEntitiesUrls]
    media: [twitterStatusesUserTimelineTweetsEntitiesMedia]
  }
  type twitterStatusesUserTimelineTweetsEntitiesUrls {
    display_url: String!
    expanded_url: String!
  }
  type twitterStatusesUserTimelineTweetsEntitiesMedia {
    display_url: String!
    expanded_url: String!
    media_url_https: String!
  }
  `
  createTypes(typeDefs)
}

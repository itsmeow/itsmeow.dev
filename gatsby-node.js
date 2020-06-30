exports.onCreateNode = ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/twitch",
    toPath: "https://www.twitch.tv/ist_meow",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/patreon",
    toPath: "https://www.patreon.com/its_meow",
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

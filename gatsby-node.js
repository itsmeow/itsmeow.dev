const { createRemoteFileNode } = require("gatsby-source-filesystem")
const path = require("path")
const projects = require("./src/data/json-data/projects.json")

exports.sourceNodes = async ({
  actions: { createRedirect, createNode, createParentChildLink },
  createNodeId,
  createContentDigest,
  cache,
  store,
  getNodesByType,
}) => {
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
  createRedirect({
    fromPath: "/plugins",
    toPath: "/mods",
    isPermanent: true,
  })

  for (category of projects.categories) {
    const { list } = category
    let parentNode
    {
      const { name, title } = category
      parentNode = {
        name,
        title,
        id: createNodeId(`project-category-${name}`),
        internal: {
          type: "ModCategory",
          contentDigest: createContentDigest(category),
        },
      }
      createNode(parentNode)
    }

    for (card of list) {
      const {
        name,
        title,
        role,
        info,
        sitelink,
        customid,
        url,
        spigoturl,
      } = card
      const node = {
        name,
        title,
        role,
        info,
        sitelink,
        customid,
        url,
        spigoturl,
        id: createNodeId(`project-category-${parentNode.name}-project-${name}`),
        parent: parentNode.id,
        internal: {
          type: "Mod",
          contentDigest: createContentDigest(card),
        },
      }
      createNode(node)
      createParentChildLink({ parent: parentNode, child: node })
      if (card.thumbnail) {
        let remoteNode = await createRemoteFileNode({
          url: card.thumbnail,
          parentNodeId: node.id,
          createNode,
          createNodeId,
          cache,
          store,
        })
        if (remoteNode) {
          node.thumbnail___NODE = remoteNode.id
        } else {
          throw Error("COULD NOT CREATE REMOTE NODE FOR " + card.thumbnail)
        }
      } else if (card.thumbnail_local) {
        const localAbsolutePath = path.resolve(
          __dirname,
          "src/data/thumbnail_local",
          card.thumbnail_local
        )
        let res = getNodesByType("File").find(
          node =>
            node.absolutePath.replace(/\\/g, "/") ===
            localAbsolutePath.replace(/\\/g, "/")
        )
        if (res) {
          node.thumbnail_local___NODE = res.id
        } else {
          throw Error("COULD NOT FIND FILE MATCHING " + localAbsolutePath)
        }
      }
    }
  }
}

exports.onCreateNode = async ({
  actions: { createNode },
  node,
  createNodeId,
  cache,
  store,
}) => {
  if (node.internal.type === "twitterStatusesUserTimelineTweets") {
    if (node.entities && node.entities.media) {
      for (let i in node.entities.media) {
        let media = node.entities.media[i]
        let remoteNode = await createRemoteFileNode({
          url: media.media_url_https,
          parentNodeId: node.id,
          createNode,
          createNodeId,
          cache,
          store,
        })
        if (remoteNode) {
          node.entities.media[i].media_sharp___NODE = remoteNode.id
        } else {
          throw Error(
            "COULD NOT CREATE REMOTE NODE FOR " + media.media_url_https
          )
        }
      }
    }
  }
}
exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
  type twitterStatusesUserTimelineTweets implements Node {
    entities: twitterStatusesUserTimelineTweetsEntities
  }
  type twitterStatusesUserTimelineTweetsEntities {
    urls: [twitterStatusesUserTimelineTweetsEntitiesUrls]
    media: [twitterStatusesUserTimelineTweetsEntitiesMedia]
    hashtags: [twitterStatusesUserTimelineTweetsEntitiesHashtags]
    user_mentions: [twitterStatusesUserTimelineTweetsEntitiesUserMentions]
  }
  type twitterStatusesUserTimelineTweetsEntitiesUserMentions {
    id: ID!
    id_str: String!
    indicies: [Int]!
    name: String!
    screen_name: String!
  }
  type twitterStatusesUserTimelineTweetsEntitiesHashtags {
    indices: [Int]!
    text: String!
  }
  type twitterStatusesUserTimelineTweetsEntitiesUrls {
    display_url: String!
    expanded_url: String!
  }
  type twitterStatusesUserTimelineTweetsEntitiesMedia {
    display_url: String!
    expanded_url: String!
    media_url_https: String!
    media_sharp: File! @link(from: "media_sharp___NODE")
  }
  type ModCategory implements Node {
    name: String!
    title: String!
    children: [Mod]
  }
  type Mod implements Node {
    name: String!
    title: String!
    role: String!
    info: String!
    thumbnail: File @link(from: "thumbnail___NODE")
    thumbnail_local: File @link(from: "thumbnail_local___NODE")
    sitelink: String
    customid: String
    url: String
    spigoturl: String
  }
  `)
}

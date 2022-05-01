const { createRemoteFileNode } = require("gatsby-source-filesystem")
const path = require("path")
const mods = require("./src/data/json-data/mods.json")
const projects = require("./src/data/json-data/projects.json")

const evalImageId = (getNodesByType, image, folder) => {
  const localAbsolutePath = path.resolve(__dirname, "src/data/" + folder, image)
  let res = getNodesByType("File").find(
    (node) =>
      node.absolutePath.replace(/\\/g, "/") ===
      localAbsolutePath.replace(/\\/g, "/")
  )
  if (res) {
    return res.id
  } else {
    throw Error("COULD NOT FIND FILE MATCHING " + localAbsolutePath)
  }
}

exports.sourceNodes = async ({
  actions: {
    createRedirect,
    createNode,
    createNodeField,
    createParentChildLink,
  },
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

  for (project of projects.list) {
    let node = project
    node.id = createNodeId(`project-${project.name}`)
    node.internal = {
      type: "Project",
      contentDigest: createContentDigest(project),
    }
    if (project.image_url) {
      node.image___NODE = evalImageId(
        getNodesByType,
        project.image_url,
        "project_image"
      )
    }
    createNode(node)
  }

  for (category of mods.categories) {
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
      const { name, title, role, info, sitelink, customid, url, spigoturl } =
        card
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
      if (card.thumbnail_url) {
        let remoteNode = await createRemoteFileNode({
          url: card.thumbnail_url,
          parentNodeId: node.id,
          createNode,
          createNodeId,
          cache,
          store,
        })
        if (remoteNode) {
          createNodeField({ node, name: "thumbnail", value: remoteNode.id })
        } else {
          throw Error("COULD NOT CREATE REMOTE NODE FOR " + card.thumbnail_url)
        }
      } else if (card.thumbnail_url_local) {
        createNodeField({
          node,
          name: "thumbnail_local",
          value: evalImageId(
            getNodesByType,
            card.thumbnail_url_local,
            "thumbnail_local"
          ),
        })
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
    media_sharp: File @link(from: "media_sharp___NODE")
  }
  type ModCategory implements Node {
    name: String!
    title: String!
    index: Int!
    children: [Mod]
  }
  type Mod implements Node {
    name: String!
    title: String!
    role: String!
    info: String!
    thumbnail_url: String
    thumbnail_url_local: String
    thumbnail: File @link(from: "fields.thumbnail")
    thumbnail_local: File @link(from: "fields.thumbnail_local")
    sitelink: String
    customid: String
    url: String
    spigoturl: String
  }
  type Project implements Node {
    name: String!
    description: String!
    uses: String!
    github: String
    download_type: String
    download_link: String
    youtube_link: String
    external_link: String
    image_url: String
    image: File @link(from: "image___NODE")
    image_gif: String
  }
  `)
}

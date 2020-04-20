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

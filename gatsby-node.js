const { createPosts } = require('./lib/gatsby/createPages/createPosts')
const { createTags } = require('./lib/gatsby/createPages/createTags')

exports.createPages = async ({ graphql, actions, reporter }) => {
  await Promise.all([
    createPosts({ graphql, actions, reporter }),
    createTags({ graphql, actions, reporter }),
  ])
}

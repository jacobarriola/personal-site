const path = require(`path`)

exports.createPosts = async ({ graphql, actions, reporter }) => {
  const request = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (request.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create a page for each node retreived
  request.data.allMdx.edges.forEach(({ node }) => {
    const {
      id,
      frontmatter: { slug },
    } = node

    actions.createPage({
      path: `/post/${slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        id,
        slug,
      },
    })
  })
}

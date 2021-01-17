const path = require(`path`)

exports.createTags = async ({ graphql, actions, reporter }) => {
  const request = await graphql(`
    {
      allMdx {
        distinct(field: frontmatter___tags)
      }
    }
  `)

  if (request.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createTags" query')
  }

  // Create a page for each node retreived
  request.data.allMdx.distinct.forEach(slug => {
    actions.createPage({
      path: `/tag/${slug}`,
      component: path.resolve(`./src/templates/tag.tsx`),
      context: {
        slug,
      },
    })
  })
}

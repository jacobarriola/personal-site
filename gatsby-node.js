const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const request = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            contentful_id
            slug
          }
        }
      }
    }
  `)

  // Create a page for each node retreived from Contentful
  request.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    const { contentful_id, slug } = node

    actions.createPage({
      path: `/post/${slug}/`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        // Pass some data to the template
        contentful_id,
      },
    })
  })
}

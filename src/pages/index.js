import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <ul>
        {data.allContentfulBlogPost.nodes.map(post => (
          <li className="mb-10" key={post.id}>
            <h2 className="text-2xl">
              <Link to={`/post/${post.slug}`}>{post.title}</Link>
            </h2>
            <time>{post.createdAt}</time>
            <p>{post.excerpt.excerpt}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query {
    allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
      nodes {
        createdAt(formatString: "MMMM DD, YYYY")
        excerpt {
          excerpt
        }
        id
        slug
        title
      }
    }
  }
`
export default IndexPage

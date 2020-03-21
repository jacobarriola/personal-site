import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'

function PostTemplate(props) {
  const {
    data: { contentfulBlogPost: post },
  } = props

  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt.excerpt} />
      <h1>{post.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: post.content.childMarkdownRemark.html,
        }}
      ></div>
    </Layout>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulBlogPost: PropTypes.object,
  }),
  contentfulBlogPost: PropTypes.shape({
    content: PropTypes.object,
    ['content.childMarkdownRemark']: PropTypes.object,
    excerpt: PropTypes.object,
    title: PropTypes.string,
  }),
  childMarkdownRemark: PropTypes.shape({
    html: PropTypes.string,
  }),
  excerpt: PropTypes.shape({
    excerpt: PropTypes.string,
  }),
}

export const query = graphql`
  query Post($contentful_id: String!) {
    contentfulBlogPost(contentful_id: { eq: $contentful_id }) {
      content {
        childMarkdownRemark {
          html
        }
      }
      excerpt {
        excerpt
      }
      title
    }
  }
`

export default PostTemplate

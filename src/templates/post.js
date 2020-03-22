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
      <article>
        <header className="mb-6 md:mt-6 md:mb-12">
          <h1 className="text-3xl md:text-5xl mb-3 md:mb-6">{post.title}</h1>
          <div className="text-sm">
            Last updated on{' '}
            <time dateTime={post.updatedAt}>{post.updatedAtFormatted}</time>
          </div>
        </header>
        <div
          className="post-content md:text-lg lg:text-xl font-serif"
          dangerouslySetInnerHTML={{
            __html: post.content.childMarkdownRemark.html,
          }}
        ></div>
      </article>
    </Layout>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulBlogPost: PropTypes.object,
  }),
  contentfulBlogPost: PropTypes.shape({
    updatedAt: PropTypes.string,
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
      updatedAt
      updatedAtFormatted: updatedAt(formatString: "MMMM DD, YYYY")
    }
  }
`

export default PostTemplate

import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AboutMe from '../components/about'

function PostTemplate(props) {
  const {
    pageContext: { next, previous },
    data: { contentfulBlogPost: post },
  } = props

  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt.excerpt} />
      <main>
        <header className="mb-6 md:mt-6 md:mb-12">
          <h1 className="text-3xl md:text-5xl mb-3">{post.title}</h1>
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
      </main>
      <aside>
        <AboutMe className="my-10 md:my-20" />
        <nav
          aria-label="post-navigation"
          className="flex justify-between text-sm"
        >
          {previous && (
            <Link
              aria-label={previous.title}
              className="pr-2"
              to={`/post/${previous.slug}`}
            >
              &larr; {previous.title}
            </Link>
          )}
          {next && (
            <Link
              aria-label={next.title}
              className="text-right pl-2 ml-auto"
              to={`/post/${next.slug}`}
            >
              {next.title} &rarr;
            </Link>
          )}
        </nav>
      </aside>
    </Layout>
  )
}

PostTemplate.propTypes = {
  pageContext: PropTypes.shape({
    next: PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
    previous: PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
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

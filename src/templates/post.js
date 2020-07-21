import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

// Internal dependencies
import Layout from '../components/layout'
import SEO from '../components/seo'
import AboutMe from '../components/about'
import StructuredData from '../components/structured-data'

const shortcodes = { Link } // Provide common components here

function PostTemplate({ data }) {
  const {
    mdx: {
      frontmatter: {
        title,
        excerpt,
        createdAt,
        updatedAt,
        updatedAtFormatted,
        slug,
      },
      timeToRead,
      body,
    },
  } = data

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <StructuredData
        description={excerpt}
        datePublished={createdAt}
        dateModified={updatedAt}
        headline={title}
        pageType="blogPost"
        url={`post/${slug}`}
      />
      <main>
        <header className="mb-6 md:mt-6 md:mb-12">
          <h1 className="text-3xl md:text-5xl mb-3">{title}</h1>
          <div className="flex text-sm">
            <div>
              Last updated on{' '}
              <time dateTime={updatedAt}>{updatedAtFormatted}</time>
            </div>
            <span className="mx-1">{' • '}</span>
            <div>{timeToRead} min read</div>
          </div>
        </header>

        <div className="post-content md:text-lg lg:text-xl font-serif">
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </div>
      </main>
      <aside>
        <AboutMe className="my-10 md:my-20" />
      </aside>
    </Layout>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object,
  }),
  mdx: PropTypes.shape({
    frontmatter: PropTypes.shape({
      slug: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
      excerpt: PropTypes.object,
      title: PropTypes.string,
    }),
    body: PropTypes.string,
  }),
}

export const query = graphql`
  query BLOG_POST_QUERY($id: String!) {
    mdx(id: { eq: $id }) {
      id
      timeToRead
      body
      frontmatter {
        createdAt(formatString: "MMMM Do YYYY")
        excerpt
        slug
        title
        updatedAtFormatted: updatedAt(formatString: "MMMM Do YYYY")
        updatedAt(formatString: "YYYY-MM-DD")
      }
    }
  }
`

export default PostTemplate

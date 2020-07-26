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
import { useTimeToReadFormatter } from '../hooks'

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
      tableOfContents,
      timeToRead,
      body,
    },
  } = data

  return (
    <Layout pageType="post">
      <SEO title={title} description={excerpt} />
      <StructuredData
        description={excerpt}
        datePublished={createdAt}
        dateModified={updatedAt}
        headline={title}
        pageType="blogPost"
        url={`post/${slug}`}
      />
      <main className="">
        <header className="max-w-3xl mx-auto mb-6 md:mt-6 md:mb-12">
          <h1 className="text-3xl md:text-5xl mb-3">{title}</h1>
          <div className="flex flex-col lg:flex-row text-sm">
            <div className="mb-2 lg:mb-0">
              Last updated on{' '}
              <time dateTime={updatedAt}>{updatedAtFormatted}</time>
            </div>
            <span className="mx-1 hidden lg:inline-block">{' • '}</span>
            <div>{useTimeToReadFormatter(timeToRead)}</div>
          </div>
        </header>

        <div
          className="lg:grid items-start lg:-mx-4"
          style={{
            gridTemplateColumns: `calc(50vw - 24rem) repeat(8, 1fr) calc(50vw - 24rem)`,
          }}
        >
          <div className="lg:sticky top-0 col-start-10 text-sm bg-gray-100 lg:ml-8 p-4 mb-6">
            <div className="uppercase font-semibold pt-2 mb-2">
              📕 Table of contents
            </div>
            <ul>
              {tableOfContents &&
                tableOfContents.items.map(item => {
                  return (
                    <li key={item.url}>
                      <a href={item.url} className="inline-block py-1">
                        {item.title}
                      </a>
                    </li>
                  )
                })}
            </ul>
          </div>
          <div className="col-start-2 col-end-10 row-start-1 post-content md:text-lg lg:text-xl font-serif min-w-0">
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </div>
        </div>
      </main>
      <aside>
        <div className="max-w-3xl mx-auto">
          <AboutMe className="my-10 md:my-20" />
        </div>
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
      tableOfContents
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

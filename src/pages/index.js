import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AboutMe from '../components/about'
import StructuredData from '../components/structured-data'

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO
        keywords={[
          `gatsby`,
          `tailwind`,
          `react`,
          `tailwindcss`,
          `Jacob Arriola`,
        ]}
        title="Home"
      />
      <StructuredData pageType="webPage" />
      <aside>
        <AboutMe className="mb-10 md:mb-20" path="/" />
      </aside>
      <main>
        <ul>
          {data.allMdx &&
            data.allMdx.nodes.map(node => (
              <li className="mb-10" key={node.id}>
                <h2 className="text-2xl mb-2">
                  <Link to={`/post/${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <time
                  className="mb-2 block text-sm"
                  dateTime={node.frontmatter.createdAt}
                >
                  {node.frontmatter.createdAtFormatted}
                </time>
                <p className="font-serif">{node.frontmatter.excerpt}</p>
              </li>
            ))}
        </ul>
      </main>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query HOME_LATEST_POSTS {
    allMdx(sort: { fields: frontmatter___createdAt, order: DESC }) {
      nodes {
        id
        frontmatter {
          excerpt
          title
          slug
          createdAtFormatted: createdAt(formatString: "MMMM Do YYYY")
          createdAt(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
`
export default IndexPage

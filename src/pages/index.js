import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AboutMe from '../components/about'
import StructuredData from '../components/structured-data'
import { useTimeToReadFormatter } from '../hooks'

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
                <div className="mb-2 flex text-sm">
                  <time dateTime={node.frontmatter.createdAt}>
                    {node.frontmatter.createdAtFormatted}
                  </time>
                  <span className="mx-1">{' • '}</span>
                  <div>{useTimeToReadFormatter(node.timeToRead)}</div>
                </div>
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
        timeToRead
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

import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AboutMe from '../components/about'
import StructuredData from '../components/structured-data'
import BlogEntry from '../components/BlogEntry/BlogEntry'

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
          {data.allMdx?.nodes?.map(node => (
            <li className="mb-10" key={node.id}>
              <BlogEntry {...node} />
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
        ...blogEntryFields
      }
    }
  }
`
export default IndexPage

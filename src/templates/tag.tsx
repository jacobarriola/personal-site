import { graphql, PageProps } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import StructuredData from '../components/structured-data'
import BlogEntry, { BlogEntryProps } from '../components/BlogEntry/BlogEntry'

const Tag: React.FC<TagTemplateProps> = ({ data, ...props }) => {
  const { pageContext } = props
  return (
    <Layout>
      <SEO title={`Tag: ${pageContext.slug}`} />
      <StructuredData pageType="webPage" />
      <main>
        <h1 className="capitalize text-3xl md:text-5xl mb-10">
          Tag: {pageContext.slug}
        </h1>
        <ul>
          {data?.allMdx?.nodes.map(node => (
            <li className="mb-10" key={node.id}>
              <BlogEntry {...node} />
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  )
}

type TagTemplateProps = PageProps<TagProps, TagQueryProps>

type TagQueryProps = {
  slug: string
}

type TagProps = {
  allMdx: {
    nodes: BlogEntryProps[]
  }
}

export const query = graphql`
  query TAG_TEMPLATE($slug: String!) {
    allMdx(
      sort: { fields: frontmatter___createdAt, order: DESC }
      filter: { frontmatter: { tags: { eq: $slug } } }
    ) {
      nodes {
        ...blogEntryFields
      }
    }
  }
`

export default Tag

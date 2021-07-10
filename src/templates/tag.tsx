import { graphql, Link, PageProps } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import StructuredData from '../components/structured-data'
import { useTimeToReadFormatter } from '../hooks'

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
              <h2 className="text-2xl mb-2">
                <Link to={`/post/${node.slug}`}>{node.frontmatter.title}</Link>
              </h2>
              <div className="mb-2 flex text-sm">
                <time dateTime={node.frontmatter.createdAt}>
                  {node.frontmatter.createdAt}
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

type TagTemplateProps = PageProps<TagProps, TagQueryProps>

type TagQueryProps = {
  slug: string
}

type TagProps = {
  allMdx: {
    nodes: {
      frontmatter: {
        title: string
        excerpt: string
        createdAt: string
      }
      id: string
      slug: string
    }[]
  }
}

export const query = graphql`
  query TAG_TEMPLATE($slug: String!) {
    allMdx(
      sort: { fields: frontmatter___createdAt, order: DESC }
      filter: { frontmatter: { tags: { eq: $slug } } }
    ) {
      nodes {
        frontmatter {
          title
          excerpt
          createdAt(formatString: "MMMM Do YYYY")
          tags
        }
        timeToRead
        slug
      }
    }
  }
`

export default Tag

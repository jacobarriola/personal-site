import { graphql, Link } from 'gatsby'
import React from 'react'
import { useTimeToReadFormatter } from '../../hooks'

const BlogEntry: React.FC<BlogEntryProps> = ({
  frontmatter,
  slug,
  timeToRead,
}) => {
  const readingTime = useTimeToReadFormatter(timeToRead)
  const { title, createdAt, excerpt } = frontmatter

  return (
    <>
      <h2 className="text-2xl mb-2">
        <Link to={`/post/${frontmatter.slug ?? slug}`}>{title}</Link>
      </h2>
      <div className="mb-2 flex text-sm">
        <time dateTime={createdAt}>{createdAt}</time>
        <span className="mx-1">{' • '}</span>
        <div>{readingTime}</div>
      </div>
      <p className="font-serif">{excerpt}</p>
    </>
  )
}

export type BlogEntryProps = {
  frontmatter: {
    title: string
    excerpt: string
    createdAt: string
    slug: string | null
  }
  id: string
  slug: string
  timeToRead: number
}

export const query = graphql`
  fragment blogEntryFields on Mdx {
    id
    frontmatter {
      title
      excerpt
      createdAtFormatted: createdAt(formatString: "MMMM Do YYYY")
      createdAt(formatString: "MMMM Do YYYY")
      slug
      tags
    }
    timeToRead
    slug
  }
`

export default BlogEntry

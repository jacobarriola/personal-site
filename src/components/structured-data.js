import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

const StructuredData = ({
  pageType,
  datePublished,
  dateModified,
  description,
  url,
  headline,
}) => {
  const { site } = useStaticQuery(graphql`
    query SEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          twitter
        }
      }
    }
  `)

  const context = {
    '@context': 'https://schema.org',
  }

  const image = {
    '@type': 'ImageObject',
    url: `https://unavatar.now.sh/github/jacobarriola/`,
    width: `400`,
    height: `400`,
    caption: `Jacob Arriola`,
  }

  const person = {
    ...context,
    '@type': 'Person',
    name: 'Jacob Arriola',
    sameAs: [
      `https://jacobarriola.com/`,
      site.siteMetadata.twitter,
      `https://github.com/jacobarriola/`,
      `https://www.linkedin.com/in/jacobarriola/`,
    ],
    image: { ...image },
  }

  const webSite = {
    ...context,
    '@type': 'Website',
    name: site.siteMetadata.title,
    url: `https://jacobarriola.com`,
    publisher: {
      ...person,
    },
  }

  const webPage = {
    ...context,
    '@type': 'WebPage',
    url: `https://jacobarriola.com/${url}`,
    inLanguage: `en-US`,
    isPartOf: {
      ...webSite,
    },
  }

  const schema = [{ ...person }]

  if (pageType === 'blogPost') {
    schema.push({
      ...context,
      '@type': 'BlogPosting',
      datePublished,
      dateModified,
      headline,
      description,
      mainEntityOfPage: {
        ...webPage,
      },
      author: {
        ...person,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Jacob Arriola',
        logo: { ...image },
      },
      image: { ...image },
    })
  }

  if (pageType === 'webPage') {
    schema.push({ ...webPage })
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

StructuredData.propTypes = {
  description: PropTypes.string,
  datePublished: PropTypes.string,
  dateModified: PropTypes.string,
  headline: PropTypes.string,
  pageType: PropTypes.oneOf([`blogPost`, `webPage`]).isRequired,
  url: PropTypes.string,
}

export default StructuredData

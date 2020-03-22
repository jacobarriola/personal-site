import { graphql, useStaticQuery, Link } from 'gatsby'
import React from 'react'

function Header() {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className="border-b">
      <div className="flex flex-wrap items-center justify-between max-w-3xl mx-auto p-4 md:p-8">
        <Link className="font-bold text-xl tracking-tight no-underline" to="/">
          {site.siteMetadata.title}
        </Link>

        <nav aria-label="main nav" className="flex items-center">
          {[
            {
              route: `/`,
              title: `Home`,
            },
          ].map(link => (
            <Link
              className="inline-block  md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header

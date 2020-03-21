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
    <header className="bg-teal-700">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
        <Link
          className="font-bold text-xl tracking-tight no-underline text-white"
          to="/"
        >
          {site.siteMetadata.title}
        </Link>

        <nav className="flex items-center">
          {[
            {
              route: `/`,
              title: `Home`,
            },
          ].map(link => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-white"
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

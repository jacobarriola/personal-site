import PropTypes from 'prop-types'
import React from 'react'

import Header from './header'

function Layout({ children }) {
  return (
    <div className="flex flex-col font-inter min-h-screen text-gray-900">
      <Header />

      <main className="flex flex-col flex-1 md:justify-center max-w-3xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>

      <footer className="border-t">
        <nav className="flex justify-between max-w-3xl mx-auto p-4 md:p-8 text-sm">
          <p>Jacob Arriola</p>
          <ul className="flex">
            <li className="mr-4">
              <a
                className="font-bold no-underline"
                href="https://github.com/jacobarriola/personal-site"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="font-bold no-underline"
                href="https://twitter.com/jacobarriola"
              >
                Twitter
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

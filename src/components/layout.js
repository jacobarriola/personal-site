import PropTypes from 'prop-types'
import React from 'react'

import Header from './header'

function Layout({ children }) {
  return (
    <div className="flex flex-col font-inter min-h-screen text-gray-900">
      <Header />

      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>

      <footer className="bg-blue-700">
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
          <p className="text-white">Jacob Arriola</p>
          <ul className="flex">
            <li className="mr-4">
              <a
                className="font-bold no-underline text-white"
                href="https://github.com/jacobarriola/personal-site"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="font-bold no-underline text-white"
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

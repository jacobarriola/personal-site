import 'typeface-inter'
import '../css/style.css'

import PropTypes from 'prop-types'
import React from 'react'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'

import Header from './header'
import Footer from './footer'

function Layout({ children, pageType }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <SkipNavLink />
      <Header />
      <SkipNavContent />
      <div
        className={`${
          `default` === pageType ? `max-w-3xl mx-auto ` : ``
        }flex flex-col flex-1 md:justify-center px-4 py-8 w-full`}
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  pageType: `default`,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageType: PropTypes.oneOf([`default`, `post`]),
}

export default Layout

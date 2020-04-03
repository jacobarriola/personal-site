import 'typeface-inter'
import '../css/style.css'

import PropTypes from 'prop-types'
import React from 'react'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'

import Header from './header'
import Footer from './footer'

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <SkipNavLink />
      <Header />
      <SkipNavContent />
      <div className="flex flex-col flex-1 md:justify-center max-w-3xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

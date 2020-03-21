import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <h1>Not Found</h1>
      </div>
    </Layout>
  )
}

export default NotFoundPage

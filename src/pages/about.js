import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import StructuredData from '../components/structured-data'

function PageAbout() {
  return (
    <Layout>
      <SEO title="About" />
      <StructuredData pageType="webPage" />
      <main className="post-content md:text-xl">
        <h1
          aria-label="Jacob Arriola"
          className="text-3xl md:text-5xl mb-10 md:mb-20"
        >
          👋🏽 Hi, I&apos;m Jacob
        </h1>
        <p>
          I&apos;m a full stack developer at{' '}
          <a href="https://zeek.com">Zeek Interactive</a> in charge of bringing
          designs to life. I&apos;m passionate about the web, and am always
          learning new technologies or improving how to write code.
        </p>
        <p>
          These days, I spend most of my time writing JavaScript and some PHP to
          construct web sites and web applications.
        </p>
        <p>
          The web is fascinating because of its ability to communicate and bring
          ideas to life across the world. It&apos;s is a channel that helps with
          the manifestation of ideas.
        </p>
        <p>
          Outside of work, I&apos;m really passionate about cycling, backyard
          farming, yoga, and golf.
        </p>
        <p>
          If you&apos;d like to connect, feel free to reach me on{' '}
          <a
            aria-label="Twitter account for Jacob Arriola"
            href="https://twitter.com/jacobarriola"
          >
            Twitter
          </a>
          .
        </p>
      </main>
    </Layout>
  )
}

export default PageAbout

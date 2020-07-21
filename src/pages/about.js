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
          <a href="https://zeek.com">Zeek Interactive</a>, but lean more to the
          UI side of things 💅🏽.
        </p>
        <p>
          I focus on making 🚀 fast and ♿️ accessible web applications. These
          days, I spend most of my time writing JavaScript and some PHP to
          construct web sites and web applications. I&apos;m really curious
          about GraphQL and decoupled applications with JavaScript these days.
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
        <h2>More Stuff About Me</h2>
        <ul className="list-none">
          <li className="mb-2">
            🚴🏽‍♂️ JAMStack projects - I&apos;m working on a lot of these projects
            lately, especially with WordPress as a data source
          </li>
          <li>📕 Currently learning GraphQL, TypeScript and Laravel</li>
        </ul>
      </main>
    </Layout>
  )
}

export default PageAbout

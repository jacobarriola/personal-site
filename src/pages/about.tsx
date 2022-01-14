import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import StructuredData from '../components/structured-data'

const PageAbout: React.FC = () => {
  return (
    <Layout>
      <SEO title="👋🏽 About" />
      <StructuredData pageType="webPage" />
      <main className="post-content md:text-xl">
        <h1
          aria-label="Jacob Arriola"
          className="text-3xl md:text-5xl mb-10 md:mb-20"
        >
          👋🏽 Hi, I&apos;m Jacob
        </h1>
        <p>
          I&apos;m a full stack developer, but lean more to the
          UI side of things 💅🏽. I focus on making 🚀 fast and ♿️ accessible web
          applications with React and TypeScript.
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
        <ul className="list-none mb-10">
          <li className="mb-2">
            🚴🏽‍♂️ JAMStack projects - I&apos;m working on a lot of these projects
            lately, especially with WordPress as a data source
          </li>
          <li>📕 Currently learning Python</li>
        </ul>

        <h2>Latest podcast appearance</h2>
        <iframe
          src="https://open.spotify.com/embed/episode/03Coft6LSoEI8MDZZchMIQ?theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allowTransparency={true}
          allow="encrypted-media"
          title="Spotify media player"
          loading="lazy"
        />
      </main>
    </Layout>
  )
}

export default PageAbout

import { PageProps } from 'gatsby'
import React from 'react'

// Internal Dependencies
import Layout from '../components/layout'
import SEO from '../components/seo'
import StructuredData from '../components/structured-data'

const Talks: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="🗣 Talks" />
      <StructuredData pageType="webPage" />
      <main className="post-content md:text-xl">
        <h1 className="text-3xl md:text-5xl mb-10 md:mb-20">Talks</h1>
        <p>A collection of talks and appearances over the years.</p>
        <ul className="grid grid-cols-1 gap-10 list-none">
          <li>
            <h2>
              DE{'{'}CODE{'}'} Podcast: Headless WooCommerce
            </h2>
            <p>
              Link to WPEngine:{' '}
              <a
                href="https://developers.wpengine.com/podcast/9109673"
                aria-label="episode on decode's site`"
              >
                https://developers.wpengine.com/podcast/9109673
              </a>
            </p>
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
          </li>
          <li>
            <h2>Do The Woo Podcast: Headless WooCommerce</h2>
            <img
              src="https://res.cloudinary.com/jacobarriola/image/upload/f_auto/Personal%20Site/Do-the-Woo-Podcast-with-Jacob-Arriola-Episode-135_xtwjrj.jpg"
              alt="Do The Woo Podcast with Jacob Arriola"
              loading="lazy"
              width={1600}
              height={900}
            />
            <p className="text-xs italic">
              Image credit: <a href="https://dothewoo.io">Do The Woo</a>.
            </p>

            <iframe
              src="https://open.spotify.com/embed/episode/1EnUxEtO0qFQz8jciCYXdL?theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowTransparency={true}
              allow="encrypted-media"
              title="Spotify media player"
              loading="lazy"
            />
          </li>
          <li>
            <h2>Gatsby Conf 2021: WooCommerce + Gatsby E-Commerce</h2>
            <div className="responsive-embed">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Vb6ipdSHSYU?start=317"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </li>
          <li>
            <h2>Gatsby WooCommerce demo: OC WordPress Meetup</h2>
            <div className="responsive-embed">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ArZO3qtS7EQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </li>
          <li>
            <h2>WP Watercooler podcast: WPGraphQL</h2>
            <div className="responsive-embed">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/2qYn3VPcTpE"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </li>
          <li>
            <h2>WP Watercooler podcast: site performance</h2>
            <div className="responsive-embed">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/88DmiCugJV0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </li>
          <li>
            <h2>
              Registering types: pair programming with Jason Bahl from WPGraphQL
            </h2>

            <div className="responsive-embed">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/afEKFwGUiyE?start=207"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </li>
          <li>
            <h2>WordPress and Nuxt</h2>
            <div className="responsive-embed">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/B8SgHqlmkC8"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </li>
          <li>
            <div className="responsive-embed">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/w27KJ-4zV2w"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </li>
        </ul>
      </main>
    </Layout>
  )
}

export default Talks

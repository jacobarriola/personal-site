module.exports = {
  siteMetadata: {
    title: `Jacob Arriola`,
    description: `Website of Jacob Arriola, full stack web developer`,
    author: `@jacobarriola`,
  },
  plugins: [
    'gatsby-plugin-eslint',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4pywjkutx049`,
        accessToken: `94f5d6e83035005045aaa39a7147423d8cd2874d4f12e525d2faca27a027cb9e`,
        host: `preview.contentful.com`,
      },
    },
  ],
}

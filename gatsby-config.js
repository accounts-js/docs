module.exports = {
  siteMetadata: {
    siteUrl: `https://accounts-js.netlify.com`,
    title: `js-accounts`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          'gatsby-remark-prismjs'
        ],
      },
    },
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
  ],
}

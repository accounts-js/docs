module.exports = {
  siteMetadata: {
    title: `js-accounts`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.ts`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}

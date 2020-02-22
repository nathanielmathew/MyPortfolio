module.exports = {
  siteMetadata: {
    title: `Nathaniel Ryan Mathew`,
    description: `Personal Portfolio Web-page of Nathaniel Ryan Mathew, an Engineering Student Developer from Mangalore, with a passion for Front-End Web Development, UI/UX Design and Graphic Design; A Music & Art enthusiast, and a Guitarist by hobby`,
    author: `@nathanielmathew`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: `images`,
      },
    },
    `gatsby-plugin-google-analytics`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1d0a42`,
        theme_color: `#1d0a42`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

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
    {
      resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 590,
          },
        },
      ],
    },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.3, // Percentage of an element's area that needs to be visible to launch animation
          once: false, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      }
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1922635,
        sv: 6
      },
    },
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

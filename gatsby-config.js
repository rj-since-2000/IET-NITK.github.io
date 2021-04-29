module.exports = {
  pathPrefix: process.env.PATH_PREFIX || "",
  siteMetadata: {
    title: `IET NITK`,
    author: `Nirmal Khedkar`,
    description: `To inspire, inform and influence the global engineering community, supporting technology innovation to meet the needs of society. We are IET NITK.`,
    noticeBoard: [
      "Registrations for PATN Open! Click **[here](/events/patn)** to know more and **[here](https://bit.ly/3u7IufJ)** to register!",
    ],
    contactDetails: [
      {
        name: "Skanda Upadhyay",
        number: "9481141528",
      },
    ],
    contactEmail: "iet@nitk.edu.in",
    siteUrl: `https://iet.nitk.ac.in/`,
    smp: {
      allow: false,
      link: "",
    },
    join: {
      allow: false,
      link: "",
    },
    expo: {
      allow: false,
    },
  },

  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/events`,
        name: `events`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/img/siglogo`,
        name: `sig_logo`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/img`,
        name: `weblogo`,
      },
    },

    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/yml`,
        name: `yaml`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-187907527-1`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `ietnitk`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-firestore-easy`,
      options: {
        adminCredential: {
          credential: require("./credentials.json"), //See details for this option
          databaseURL: "https://ietnitk-web-default-rtdb.firebaseio.com",
        },
        collections: ["members", "projects"],
      },
    },
    {
      resolve: "gatsby-plugin-rollbar",
      options: {
        accessToken: "3aee484e0ba14579aaec98a9ef64224c",
        // For all configuration options, see https://docs.rollbar.com/docs/rollbarjs-configuration-reference
        captureUncaught: true,
        captureUnhandledRejections: true,
        payload: {
          environment: "production",
        },
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://ietnitk-cms.herokuapp.com",
        contentTypes: ["Blogs", "Events", "Members","Project-Reports","SMPS", "SIGS", "Projects"],
        singleTypes: [
          `recruitment-faq`,
          `about-club`,
          `expo`,
          `wit`,
          `summer-programs`,
        ],
        queryLimit: 10000,
      },
    },

    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     develop: true, // Enable while using `gatsby develop`
    //     // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
    //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    //     purgeCSSOptions: {
    //       // https://purgecss.com/configuration.html#options
    //       // safelist: ['safelist'], // Don't remove this selector
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

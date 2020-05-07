require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const queries = require("./src/utils/algolia_queries")

module.exports = {
  siteMetadata: {
    title: `PROSAUDE`,
    description: `Programa de assistência aos servidores de Catalão.`,
    address: 'Travessa Píres de Matos, 50 - Amambai, Campo Grande - MS, Brasil CEP: 79005-060',
    author: `@gatsbyjs`,
    siteUrl: 'https://www.prosaudecatalao.gov.br',
    menuHeader: [
      {
        link: '/institucional',
        label: 'Institucional',
        sublink: {
          link: '/',
          label: 'link 1',
        }
      },
      {
        link: '/noticias',
        label: 'Notícias e Novidades',
        sublink: {
          link: '/',
          label: 'link 2',
        }
      },
      {
        link: '/servicos',
        label: 'Serviços',
        sublink: {
          link: '/',
          label: 'link 3',
        }
      },
      {
        link: '/publicacoes',
        label: 'Publicações',
        sublink: {
          link: '/',
          label: 'link 4',
        }
      },
      {
        link: '/transparencia',
        label: 'Transparência',
        sublink: {
          link: '/',
          label: 'link 5',
        }
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `uploads`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagestoOriginal: false
            },
          },
          `gatsby-remark-lazy-load`,
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
   `gatsby-plugin-offline`,
  ],
}

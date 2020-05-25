module.exports = {
  siteMetadata: {
    title: `PROSAUDE`,
    description: `Programa de assistência aos servidores de Catalão.`,
    address: 'Travessa Píres de Matos, 50 - Amambai, Campo Grande - MS, Brasil CEP: 79005-060',
    author: `@gatsbyjs`,
    siteUrl: 'https://www.prosaudetest.netlify.app',
    menuHeader: [
      {
        label: 'Institucional',
        submenu: [
            {
                label: 'História',
                url: '/historia'
            },
            {
                label: 'Equipe',
                url: '/equipe'
            },
            {
                label: 'Junta Médica',
                url: '/junta-medica'
            }
        ]
      },
      {
        label: 'Serviços',
        submenu: [
            {
                label: 'Guia Médico',
                url: '/guia-medico/especialidades'
            },
        ]
      },
      {
        label: 'Publicações',
        submenu: [
            {
                label: 'Portarias do PROSAUDE',
                url: '/portarias-do-prosaude'
            },
            {
                label: 'Legislação Municipal',
                url: '/legislacao-municipal'
            },
            {
                label: 'Demonstrativos Contábeis',
                url: '/demonstrativos-contabeis'
            },
            {
              label: 'Conselho do PROSAUDE',
              url: '/conselho-do-prosaude'
          }
        ]
      },
      
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
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "prosaude-posts",
          "prosaude-guias"
        ],
        queryLimit: 1000,
      },
    },
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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}

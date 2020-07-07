module.exports = {
  siteMetadata: {
    title: `PROSAUDE`,
    description: `Programa de Assistência aos Servidores de Catalão.`,
    address: 'Rua Coronel Afonso Paranhos - St. Central, Catalão - GO, 75701-470',
    author: `Work - Informática`,
    siteUrl: 'https://www.prosaudecatalao.go.gov.br',
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
        apiURL: process.env.NODE_ENV === 'production' ? 
        'http://54.224.4.59:1337' : 'http://localhost:1337',
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
        name: `PROSAUDE - Programa de Assistência aos Servidores de Catalão.`,
        short_name: `PROSAUDE`,
        start_url: `/`,
        background_color: `#f4f9fc`,
        theme_color: `#f4f9fc`,
        display: `minimal-ui`,
        icon: `src/images/logo-prosaude.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}

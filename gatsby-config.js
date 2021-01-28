module.exports = {
  siteMetadata: {
    title: `PROSAUDE`,
    description: `Programa de Assistência aos Servidores de Catalão.`,
    address:
      "Rua Coronel Afonso Paranhos - St. Central, Catalão - GO, 75701-470",
    author: `Work - Informática`,
    siteUrl: "https://www.prosaudecatalao.go.gov.br",
    menuHeader: [
      {
        label: "Institucional",
        submenu: [
          {
            label: "História",
            url: "/historia",
          },
          {
            label: "Equipe",
            url: "/equipe",
          },
          {
            label: "Junta Médica",
            url: "/junta-medica",
          },
        ],
      },
      {
        label: "Serviços",
        submenu: [
          {
            label: "Guia Médico",
            url: "/guia-medico/especialidades",
          },
        ],
      },
      {
        label: "Publicações",
        submenu: [
          {
            label: "Portarias do PROSAUDE",
            url: "/portarias-do-prosaude",
          },
          {
            label: "Legislação Municipal",
            url: "/legislacao-municipal",
          },
          {
            label: "Demonstrativos Contábeis",
            url: "/demonstrativos-contabeis",
          },
          {
            label: "Conselho do PROSAUDE",
            url: "/conselho-do-prosaude",
          },
        ],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
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
        name: `assets`,
        path: `${__dirname}/static/assets/img`,
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
              checkSupportedExtensions: false,
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,

            },
          },
          `gatsby-remark-lazy-load`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PROSAUDE - Programa de Assistência aos Servidores de Catalão.`,
        short_name: `PROSAUDE`,
        start_url: `/`,
        background_color: `#f4f9fc`,
        theme_color: `#f4f9fc`,
        display: `minimal-ui`,
        icon: `static/assets/logo-img/logo-prosaude.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}

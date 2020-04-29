module.exports = {
  siteMetadata: {
    title: `PROSAUDE`,
    description: `Programa de assistência aos servidores de Catalão.`,
    address: 'Travessa Píres de Matos, 50 - Amambai, Campo Grande - MS, Brasil CEP: 79005-060',
    author: `@gatsbyjs`,
    menuHeader: [
      {
        link: '/institucional',
        label: 'Institucional'
      },
      {
        link: '/noticias',
        label: 'Notícias e Novidades'
      },
      {
        link: '/servicos',
        label: 'Serviços'
      },
      {
        link: '/publicacoes',
        label: 'Publicações'
      },
      {
        link: '/transparencia',
        label: 'Transparência'
      },
      {
        link: '/ouvidoria',
        label: 'Ouvidoria'
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
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

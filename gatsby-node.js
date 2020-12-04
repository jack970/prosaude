const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  return graphql(
    `
      {
        postRemark: allStrapiProsaudePosts(
          sort: { order: DESC, fields: data }
        ) {
          edges {
            node {
              id
              title
            }
            next {
              title
              id
            }
            previous {
              id
              title
            }
          }
        }
        tagsGroup: allStrapiProsaudePosts {
          group(field: tags) {
            fieldValue
            totalCount
          }
        }
        especialidadesGroup: allStrapiProsaudeGuias {
          group(field: Especialidade) {
            fieldValue
            totalCount
          }
        }
      }
    `
  ).then(result => {
    const posts = result.data.postRemark.edges
    const tags = result.data.tagsGroup.group
    const especialidades = result.data.especialidadesGroup.group

    //Gera página dos posts
    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: `/${_.kebabCase(node.title)}`,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          id: node.id,
          previous: previous,
          next: next,
        },
      })
    })

    //Gera uma página através de uma nova tag criada em um post
    const postsPerPage = 6

    tags.forEach((tag, i) => {
      const link = `/${_.kebabCase(tag.fieldValue)}`
      const numPages = Math.ceil(tag.totalCount / postsPerPage)

      Array.from({
        length: numPages,
      }).forEach((_, i) => {
        createPage({
          path: i === 0 ? link : `${link}/page/${i + 1}`,
          component: path.resolve("./src/templates/list-post-tag.js"),
          context: {
            tag: tag.fieldValue,
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        })
      })
    })

    especialidades.forEach(especialidade => {
      createPage({
        path: `/guia-medico/especialidades`,
        component: path.resolve("./src/templates/all-speciality.js"),
        context: {
          especialidades: especialidade,
        },
      })
    })

    especialidades.forEach(especialidade => {
      createPage({
        path: `/guia-medico/especialidades/${_.kebabCase(
          especialidade.fieldValue
        )}/`,
        component: path.resolve("./src/templates/specialityPost.js"),
        context: {
          speciality: especialidade.fieldValue,
        },
      })
    })
  })
}

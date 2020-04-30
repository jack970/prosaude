const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require(`gatsby-remark-relative-images`)
const path = require("path")
const _ = require("lodash")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ 
        node, 
        getNode, 
        basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: `/${slug.slice(12)}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    // Query for markdown nodes to use in creating pages.
    return graphql(
      `
      {
        postRemark: allMarkdownRemark(
          sort: {order: ASC, fields: [frontmatter___date]}
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
            next{
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
            previous {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
      `
    ).then(result => {
        const posts = result.data.postRemark.edges
        const tags = result.data.tagsGroup.group

        posts.forEach(({node, next, previous}) => {
            createPage ({
                path: node.fields.slug,
                component: path.resolve('./src/templates/blog-post.js'),
                context: {
                    slug: node.fields.slug,
                    previous: previous,
                    next: next
                }
            })
        })

        const postsPerPage = 6

        tags.forEach((tag, i) => {
          const link = `/${_.kebabCase(tag.fieldValue)}`
          const numPages = Math.ceil( tag.totalCount / postsPerPage)

          Array.from({
            length: numPages,
          }).forEach((_, i) => {
            createPage ({
              path: i === 0 ? link : `${link}/page/${i + 1}`,
              component: path.resolve('./src/templates/list-post-tag.js'),
              context: {
                tag: tag.fieldValue,
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1
              }
            })
          })
        })
    })
  }
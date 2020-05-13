const postQuery = `{
    posts: allMarkdownRemark(
      filter : {
        fileAbsolutePath: { glob: "**/posts/*.md" }
      }
      sort: { 
        fields: frontmatter___date, order: DESC 
      }){
      edges {
        node {
          objectID: id
          fields {
            slug
          }
          frontmatter {
            title
            date_timestamp: date
            thumbnail {
              publicURL
            }
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
          }
        }
      }
    }
  }`
  
  const flatten = arr =>
    arr.map(({ node: { frontmatter, ...rest } }) => ({
      ...frontmatter,
      date_timestamp: parseInt(
        (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
      ),
      ...rest,
    }))
  const settings = { attributesToSnippet: [`excerpt:20`] }
  
  const queries = [
    {
      query: postQuery,
      transformer: ({ data }) => flatten(data.posts.edges),
      indexName: `POSTS`,
      settings,
    },
  ]
  
  module.exports = queries
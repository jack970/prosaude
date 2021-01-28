import { graphql } from "gatsby"
import React from "react"
import Cards from "../components/Cards"
import CardsSection from "../components/Cards/CardsSection"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const SearchPage = ({data, location}) => {
  const allPosts = data.allMarkdownRemark.edges
  const params = new URLSearchParams(location.search.slice(1))
  const q = params.get("q") || ""

  const posts = allPosts || []

  const filteredData = posts.filter(post => {
    const { excerpt } = post.node
    const {title, description} = post.node.frontmatter
    
    return(
      title.toLowerCase().includes(q.toLowerCase()) ||
      description.toLowerCase().includes(q.toLowerCase()) ||
      excerpt.toLowerCase().includes(q.toLowerCase())
    )
    
  })

  const hasSearchResults = filteredData.length !== 0 && q !== ""
  const setposts = hasSearchResults ? filteredData : []

  return(
  <Layout>
    <SEO title="Pesquisa" />
    <CardsSection titleSection={`Busca por: ${q}`} flexWrap='inherit'>
          { hasSearchResults ? (
              setposts.map(({node}, id) => {
                return(
                <Cards key={id}
                  title={node.frontmatter.title}
                  description={node.excerpt}
                  image={node.frontmatter.image}
                  date={node.frontmatter.date}
                  slug={node.fields.slug}
                  />
              )
            })
          ) : (
           "NAda Encontrado"
          )}
    </CardsSection>
  </Layout>
)}

export default SearchPage

export const pageQuery = graphql`
  query SearchFilter {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            image
            description
            date(locale:"pt-br" ,formatString: "DD [de] MMMM [de] YYYY")
          }
          excerpt(pruneLength: 50)
        }
      }
    }
  }
`

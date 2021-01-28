import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Cards from "../components/Cards"
import CardsPub from "../components/Cards/CardsPub"
import CardsTransparencia from "../components/Cards/CardsTransparencia"
import CardsSection from "../components/Cards/CardsSection"

const IndexPage = ({ data }) => {
  const postList = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Início" />
      <CardsSection titleSection="Notícias">
        {postList.map(({ node }, i) => (
            <Cards
              key={i}
              image={node.frontmatter.image}
              title={node.frontmatter.title}
              description={node.excerpt}
              slug={node.fields.slug}
              date={node.frontmatter.date}
            />
          ))}
      </CardsSection>
      <CardsPub />
      <CardsTransparencia />
    </Layout>
  )
}

export default IndexPage

export const PostListQuery = graphql`
  query PostList {
    allMarkdownRemark(
      limit: 4
      filter: { frontmatter: { tags: { in: ["Notícias"] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            image
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            title
          }
          excerpt(pruneLength: 50)
        }
      }
    }
  }
`

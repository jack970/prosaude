import React from "react"
import { graphql } from "gatsby"

import { MDBRow, MDBCol } from "mdbreact"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import SectionNav from "../components/SectionNav"
import Cards from "../components/Cards"
import CardsPub from "../components/Cards/CardsPub"
import CardsTransparencia from "../components/Cards/CardsTransparencia"

const IndexPage = ({ data }) => {
  const postList = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Início" />
      <SectionNav />
      <MDBRow style={{ marginTop: "5rem" }}>
        <MDBCol>
          <h1 style={{ fontWeight: "500" }}>Notícias</h1>
          <hr style={{ borderTop: "2px solid #FD0" }} />
        </MDBCol>
      </MDBRow>
      <MDBRow>
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
      </MDBRow>
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
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            title
          }
          excerpt(pruneLength: 50)
        }
      }
    }
  }
`

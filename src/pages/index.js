import React from "react"
import { graphql } from 'gatsby'

import { MDBRow, MDBCol } from 'mdbreact'
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Cards from "../components/Cards"
import CarouselPage from "../components/CarouselAnuncios"
import CardsPub from "../components/CardsPub"
import CardsTransparencia from "../components/CardsTransparencia"

const IndexPage = ({data}) => {
  const postList = data.allMarkdownRemark.edges
  return (
  <Layout>
    <SEO title="Home" />
    <CarouselPage/> 
    <MDBRow style={{marginTop: '5rem'}}>
      <MDBCol>
        <h1 style={{fontWeight: '500'}}>Notícias</h1>
        <hr style={{borderTop: '2px solid #FD0'}} />
      </MDBCol>
    </MDBRow>
    <MDBRow>
        { postList.map(({node}, i) => (
          <Cards key={i}
          title={node.frontmatter.title}
          description={node.excerpt}
          thumbnail={node.frontmatter.thumbnail}
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
    allMarkdownRemark(limit: 3, 
      filter: {frontmatter: {tags: {eq: "Notícias"}}}
      sort: {order: DESC, fields: [frontmatter___date]}
      ) {
      edges {
        node {
          excerpt
          frontmatter {
            thumbnail
            date(locale:"pt-br" ,formatString: "DD [de] MMMM [de] YYYY")
            title
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

import React from "react"
import { graphql } from 'gatsby'

import { MDBRow, MDBCol } from 'mdbreact'
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Cards from "../components/Cards"
import CardsPub from "../components/CardsPub"
import CardsTransparencia from "../components/CardsTransparencia"

const IndexPage = ({data}) => {
  const postList = data.allStrapiPosts.edges
  return (
  <Layout>
    <SEO title="Início" />
    <MDBRow style={{marginTop: '5rem'}}>
      <MDBCol>
        <h1 style={{fontWeight: '500'}}>Notícias</h1>
        <hr style={{borderTop: '2px solid #FD0'}} />
      </MDBCol>
    </MDBRow>
    <MDBRow >
        { postList.map(({node}, i) => (
          <Cards key={i}
          title={node.title}
          description={node.excerpt}
          thumbnail={node.thumbnail.childImageSharp.fluid}
          slug={node.id}
          date={node.date}
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
    allStrapiPosts(limit: 3, 
      filter: {tags: {eq: "Notícias"}}
      sort: {order: DESC, fields: date}
      ) {
      edges {
        node {
            thumbnail {
              childImageSharp {
                  fluid(maxWidth: 1080) {
                      ...GatsbyImageSharpFluid_tracedSVG
                  }
              }
            }
            date(locale:"pt-br" ,formatString: "DD [de] MMMM [de] YYYY")
            title
            description
            id
        }
      }
    }
  }
`

import React from "react"
import Cards from "../index"
import { graphql, useStaticQuery } from "gatsby"
import { MDBRow, MDBCol } from "mdbreact"

const CardsPub = () => {
  const data = useStaticQuery(graphql`
    query CardsPub {
      allMarkdownRemark(
        limit: 4
        filter: { frontmatter: { tags: { in: ["Publicações"] } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
            }
          }
        }
      }
    }
  `)

  const cardsPub = data.allMarkdownRemark.edges
  return (
    <>
      <MDBRow style={{ marginTop: "5rem" }}>
        <MDBCol>
          <h1 style={{ fontWeight: "500" }}>Publicações</h1>
          <hr style={{ borderTop: "2px solid #FD0" }} />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        {cardsPub.map(({ node }, i) => (
          <Cards
            key={i}
            title={node.fronttmatter.title}
            description={node.fronttmatter.description}
            slug={node.fields.slug}
            date={node.fronttmatter.date}
          />
        ))}
      </MDBRow>
    </>
  )
}

export default CardsPub

import React from "react"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer,
} from "mdbreact"
import { useStaticQuery, graphql, Link } from "gatsby"

const CardsTransparencia = () => {
  const data = useStaticQuery(graphql`
    query CardsTransparencia {
      allMarkdownRemark(
        limit: 4
        filter: { frontmatter: { tags: { in: ["Transparência"] } } }
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

  const cadsTransparencia = data.allMarkdownRemark.edges
  return (
    <MDBContainer>
      <MDBRow style={{ marginTop: "4rem" }}>
        <MDBCol>
          <h1 style={{ fontWeight: "500" }}>Institucional</h1>
          <hr style={{ borderTop: "2px solid #FD0" }} />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        {cadsTransparencia.map(({ node }, i) => (
          <MDBCol sm="6" key={i} style={{ marginBottom: "2rem" }}>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>{node.frontmatter.title}</MDBCardTitle>
                <MDBCardText>{node.frontmatter.description}</MDBCardText>
                <Link to={node.fields.slug}>
                  <MDBBtn color="amber">Ver Mais</MDBBtn>
                </Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  )
}

export default CardsTransparencia

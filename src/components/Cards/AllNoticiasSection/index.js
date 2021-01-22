import React from "react"
import {
  MDBCard,
  MDBRow,
  MDBBtn,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact"
import { useStaticQuery, graphql, Link } from "gatsby"
import media from "styled-media-query"
import styled from "styled-components"
import kebabCase from "lodash/kebabCase"

export const Col = styled.div`
  width: 13rem;
  margin-left: 4rem;

  ${media.lessThan("765px")`
        width: 100%;
        margin-left: 0;
    `}
`

const SectionNoticias = () => {
  const data = useStaticQuery(graphql`
    query SectionNotices {
      allMarkdownRemark(
        limit: 4
        filter: {
          frontmatter: {
            tags: {in: ["Notícias"]}
        }}
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
  const info = data.allMarkdownRemark.edges
  return (
    <MDBRow
      style={{ textAlign: "-webkit-right", marginLeft: "0", marginRight: "0" }}
    >
      <Col>
        <div>
          <h2 className="h3-responsive">
            ÚLTIMAS <strong>NOTÍCIAS</strong>
            <hr style={{ borderBottom: "1px solid #FDB700" }} />
          </h2>
        </div>
        {info.map(({ node }, i) => (
          <MDBCard style={{ marginBottom: "2rem" }} key={i}>
            <Link to={`/${kebabCase(node.frontmatter.title)}`}>
              {/* <Img
                className="img-fluid"
                fluid={node.frontmatter.image.childImageSharp.fluid}
                waves
              /> */}
            </Link>
            <MDBCardBody>
              <MDBCardText>{node.frontmatter.date}</MDBCardText>
              <MDBCardTitle>{node.frontmatter.title}</MDBCardTitle>
              <MDBCardText>{node.frontmatter.description}</MDBCardText>
              <Link to={node.fields.slug}>
                <MDBBtn color="orange">Ler mais</MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCard>
        ))}
      </Col>
    </MDBRow>
  )
}

export default SectionNoticias

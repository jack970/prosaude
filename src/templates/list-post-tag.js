import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { MDBRow } from "mdbreact"
import Cards from "../components/Cards"
import styled from "styled-components"
import SectionNoticias from "../components/Cards/AllNoticiasSection"
import media from "styled-media-query"
import PaginationTags from "../components/Pagination"
import kebabCase from "lodash/kebabCase"

export const Divisao = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.lessThan("765px")`
        display:block;
    `}
`

export const DivPost = styled.div``

const ListTagsPosts = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { tag, currentPage, numPages } = props.pageContext
  const link = `/${kebabCase(tag)}`
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? `${link}` : `${link}/page/${currentPage - 1}`
  const nextPage = `${link}/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title={tag} description="Posts" />
      <Divisao>
        <DivPost>
          <div
            className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
            style={{ paddingLeft: "0" }}
          >
            <h2 style={{ fontWeight: "500" }}>{tag}</h2>
            <hr style={{ borderTop: "2px solid #FD0" }} />
          </div>
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
          <PaginationTags
            currentPage={currentPage}
            numPages={numPages}
            isFirst={isFirst}
            isLast={isLast}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        </DivPost>
        <SectionNoticias />
      </Divisao>
    </Layout>
  )
}

export const query = graphql`
  query Tags($tag: String!, $limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
            description
            title
          }
          excerpt(pruneLength: 50)
        }
      }
    }
  }
`

export default ListTagsPosts

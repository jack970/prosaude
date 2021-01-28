import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Cards from "../components/Cards"
import styled from "styled-components"
import SectionNoticias from "../components/Cards/AllNoticiasSection"
import media from "styled-media-query"
import PaginationTags from "../components/Pagination"
import kebabCase from "lodash/kebabCase"
import CardsSection from "../components/Cards/CardsSection"

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
          <CardsSection titleSection={tag} flexWrap="wrap">
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
            image
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

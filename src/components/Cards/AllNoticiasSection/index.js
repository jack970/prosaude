import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from './styled'
import { SectionDivider } from "../CardsSection/styled"

const SectionNoticias = () => {
  const data = useStaticQuery(graphql`
    query SectionNotices {
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
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
            }
            excerpt(pruneLength: 50)
          }
        }
      }
    }
  `)
  const info = data.allMarkdownRemark.edges
  return (
    <S.SectionWrapper>
      <S.CardsSectionTitle>ÚLTIMAS <strong>NOTÍCIAS</strong></S.CardsSectionTitle>
      <SectionDivider />
      {info.map(({ node }, i) => (
      <S.CardsSectionLink key={i} to={node.fields.slug}>
        <S.CardsSectionBody>
          <S.CardsSectionBodyDate>{node.frontmatter.date}</S.CardsSectionBodyDate>
          <S.CardsSectionBodyTitle>{node.frontmatter.title}</S.CardsSectionBodyTitle>
          <S.CardsSectionBodyDescription>{node.frontmatter.description}</S.CardsSectionBodyDescription>
          <S.CardsSectionBodyButton>LER MAIS</S.CardsSectionBodyButton>
        </S.CardsSectionBody>          
      </S.CardsSectionLink>
      ))}
    </S.SectionWrapper>
  )
}

export default SectionNoticias

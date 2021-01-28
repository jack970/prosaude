import React from "react"
import CardsSection from "../CardsSection"
import { useStaticQuery, graphql } from "gatsby"
import { CardsSectionBodyButton } from "../AllNoticiasSection/styled"
import * as S from './styled'

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
            excerpt(pruneLength: 50)
          }
        }
      }
    }
  `)

  const cadsTransparencia = data.allMarkdownRemark.edges
  return (
    <CardsSection titleSection="Transparência">
      <S.CardTransparenciaRow>
        {cadsTransparencia.map(({node}, i) => (
          <S.CardTransparenciaLink key={i} to={node.fields.slug}>
            <S.CardTransparenciaBody>
              <S.CardTransparenciaTitle>{node.frontmatter.title}</S.CardTransparenciaTitle>
              <S.CardTransparenciaDescription>{node.frontmatter.description}</S.CardTransparenciaDescription>
              <CardsSectionBodyButton>VER MAIS</CardsSectionBodyButton>
            </S.CardTransparenciaBody>
          </S.CardTransparenciaLink>
        ))}
      </S.CardTransparenciaRow>
    </CardsSection>
  )
}

export default CardsTransparencia

import React from "react"
import Cards from "../index"
import { graphql, useStaticQuery } from "gatsby"
import CardsSection from "../CardsSection"

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
              image
            }
            excerpt(pruneLength: 50)
          }
        }
      }
    }
  `)

  const cardsPub = data.allMarkdownRemark.edges
  return (
    <CardsSection titleSection="Publicações">
        {cardsPub.map(({ node }, i) => (
          <Cards
            key={i}
            image={node.frontmatter.image}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            slug={node.fields.slug}
            date={node.frontmatter.date}
          />
        ))}
    </CardsSection>
  )
}

export default CardsPub

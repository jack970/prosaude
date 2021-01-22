import React from "react"
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBMask,
  MDBCarouselItem,
  MDBView,
  MDBCarouselCaption,
} from "mdbreact"
import { useStaticQuery, graphql, Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

const SectionPage = () => {
  const data = useStaticQuery(graphql`
  query allPosts {
    allMarkdownRemark(limit: 3, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            title
          }
        }
      }
    }
  }
  
  `)

  return (
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
      slide
      style={{
        borderTop: "5px solid #f5d400",
        borderBottom: "6px solid #e2e2e2",
        marginBottom: "5rem",
      }}
    >
      <MDBCarouselInner>
        {data.allMarkdownRemark.edges.map(({ node }, i) => (
          <Link to={`/${kebabCase(node.frontmatter.title)}`} key={i}>
            <MDBCarouselItem itemId={i + 1}>
              <MDBView style={{ cursor: "pointer" }}>
                <MDBMask overlay="orange-slight" className="flex-center" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h4">{node.frontmatter.title}</h3>
                <h4 className="h4-responsive" style={{ fontWeight: "600" }}>
                  {node.frontmatter.description}
                </h4>
                <p>{node.frontmatter.data}</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </Link>
        ))}
      </MDBCarouselInner>
    </MDBCarousel>
  )
}

export default SectionPage

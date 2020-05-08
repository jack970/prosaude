import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBMask,MDBCarouselItem, MDBView, MDBCarouselCaption } from
"mdbreact";
import { useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'

const SectionPage = () => {
  const data = useStaticQuery(graphql`
    query allPosts {
      allMarkdownRemark(limit: 3, sort: {fields: frontmatter___date, order: DESC}
        filter: {
          fileAbsolutePath: { glob: "**/posts/*.md" }
        }) {
        edges {
          node {
            excerpt(pruneLength: 50)
            frontmatter {
              thumbnail {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              title
            }
            fields {
              slug
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
            borderTop: '5px solid #f5d400', 
            borderBottom: '6px solid #e2e2e2', 
            marginBottom: '5rem', 
          }}
      >
        <MDBCarouselInner>
          {data.allMarkdownRemark.edges.map(({node}, i) => (
            <MDBCarouselItem itemId={i + 1} key={i}>
              <Link to={node.fields.slug}>
                <MDBView style={{cursor: 'pointer'}}>
                    <Img
                      fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                      alt={node.frontmatter.title}

                      style={{height: '15rem'}}
                    />
                    <MDBMask overlay="orange-slight" className="flex-center"/>
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h4">{node.frontmatter.title}</h3>
                  <h4 className='h4-responsive' style={{fontWeight: '600'}}>{node.excerpt}</h4>
                  <p>{node.frontmatter.date}</p>
                </MDBCarouselCaption>
              </Link>
            </MDBCarouselItem>
          ))}
        </MDBCarouselInner>
      </MDBCarousel>
  );
}

export default SectionPage;
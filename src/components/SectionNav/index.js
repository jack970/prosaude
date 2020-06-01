import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBMask,MDBCarouselItem, MDBView, MDBCarouselCaption } from
"mdbreact";
import { useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import kebabCase from "lodash/kebabCase"

const SectionPage = () => {
  const data = useStaticQuery(graphql`
    query allPosts {
      allStrapiProsaudePosts(limit: 3, sort: {fields: date, order: DESC}) {
        edges {
          node {
              thumbnail {
                childImageSharp {
                    fluid(maxWidth: 1000, maxHeight: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                  }
              }
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              title
              id
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
          {data.allStrapiProsaudePosts.edges.map(({node}, i) => (
              <Link to={`/${kebabCase(node.title)}`} key={i}>
                <MDBCarouselItem itemId={i + 1}>
                  <MDBView style={{cursor: 'pointer'}}>
                      <Img
                        fluid={node.thumbnail.childImageSharp.fluid}
                        alt={node.title}

                        style={{height: '15rem'}}
                      />
                      <MDBMask overlay="orange-slight" className="flex-center"/>
                  </MDBView>
                  <MDBCarouselCaption>
                    <h3 className="h4">{node.title}</h3>
                    <h4 className='h4-responsive' style={{fontWeight: '600'}}>{node.description}</h4>
                    <p>{node.date}</p>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
              </Link>
          ))}
        </MDBCarouselInner>
      </MDBCarousel>
  );
}

export default SectionPage;
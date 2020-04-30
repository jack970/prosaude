import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBCarouselCaption } from
"mdbreact";
import { useStaticQuery, graphql, Link} from 'gatsby'

const SectionPage = () => {
  const data = useStaticQuery(graphql`
    query allPosts {
      allMarkdownRemark(limit: 3, sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            excerpt(pruneLength: 50)
            frontmatter {
              thumbnail
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
                    <img
                      className="d-block w-100"
                      src={node.frontmatter.thumbnail}
                      alt={node.frontmatter.title}

                      style={{height: '15rem'}}
                    />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h4">{node.frontmatter.title}</h3>
                  <h4 className='h4-responsive'>{node.excerpt}</h4>
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
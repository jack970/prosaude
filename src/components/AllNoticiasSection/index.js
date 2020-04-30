import React from 'react';
import { MDBCard, MDBRow, MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText} from 'mdbreact';
import { useStaticQuery, graphql, Link } from 'gatsby'
import media from 'styled-media-query'
import styled from 'styled-components'
import Img from 'gatsby-image'

export const Col = styled.div`
    width: 15rem;
    margin-left: 4rem;

    ${media.lessThan('765px')`
        width: 100%;
        margin-left: 0;
    `}
`


const SectionNoticias = () => {

    const data = useStaticQuery(graphql`
        query SectionNotices {
            allMarkdownRemark(limit: 2, 
            filter: {frontmatter: {tags: {eq: "Notícias"}}}
            sort: {order: DESC, fields: [frontmatter___date]}
            ) {
            edges {
                node {
                excerpt
                frontmatter {
                    thumbnail {
                        childImageSharp {
                            fluid(maxWidth: 300) {
                                ...GatsbyImageSharpFluid_tracedSVG
                            }
                        }
                    }
                    date(locale:"pt-br" ,formatString: "DD [de] MMMM [de] YYYY")
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
    const info = data.allMarkdownRemark.edges
  return (
    <MDBRow style={{textAlign: '-webkit-right',
    marginLeft: '0',
    marginRight: '0'}}>
        <Col>
            <div>
                <h2 className='h3-responsive'>
                    ÚLTIMAS <strong>NOTÍCIAS</strong> 
                    <hr style={{borderBottom:'1px solid #FDB700'}}/>
                </h2>
            </div>
            {info.map(({node}, i) =>(
            <MDBCard style={{ marginBottom: '2rem' }} key={i}>
                <Link to={node.fields.slug}>
                    <Img className="img-fluid" 
                    fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                    waves />
                </Link>
                <MDBCardBody>
                    <MDBCardText>{node.frontmatter.date}</MDBCardText>
                    <MDBCardTitle>{node.frontmatter.title}</MDBCardTitle>
                    <MDBCardText>{node.excerpt}</MDBCardText>
                    <Link to={node.fields.slug}>
                        <MDBBtn color='elegant'>Ler mais</MDBBtn>
                    </Link>
                </MDBCardBody>
            </MDBCard>
            ))}
        </Col>
    </MDBRow>
  )
}

export default SectionNoticias;
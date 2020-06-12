import React from 'react';
import { MDBCard, MDBRow, MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText} from 'mdbreact';
import { useStaticQuery, graphql, Link } from 'gatsby'
import media from 'styled-media-query'
import styled from 'styled-components'
import Img from 'gatsby-image'
import kebabCase from "lodash/kebabCase"

export const Col = styled.div`
    width: 13rem;
    margin-left: 4rem;

    ${media.lessThan('765px')`
        width: 100%;
        margin-left: 0;
    `}
`


const SectionNoticias = () => {

    const data = useStaticQuery(graphql`
        query SectionNotices {
            allStrapiProsaudePosts(limit: 4, 
                filter: {tags: {eq: "Notícias"}}
                sort: {order: DESC, fields: date}
            ) {
            edges {
                node {
                    thumbnail {
                        childImageSharp {
                            fluid(maxWidth: 300, maxHeight: 240) {
                                ...GatsbyImageSharpFluid_tracedSVG
                            }
                        }
                    }
                    date(locale:"pt-br" ,formatString: "DD [de] MMMM [de] YYYY")
                    title
                    id
                }
                }
            }
            }
    `)
    const info = data.allStrapiProsaudePosts.edges
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
                <Link to={`/${kebabCase(node.title)}`}>
                    <Img className="img-fluid" 
                    fluid={node.thumbnail.childImageSharp.fluid}
                    waves />
                </Link>
                <MDBCardBody>
                    <MDBCardText>{node.date}</MDBCardText>
                    <MDBCardTitle>{node.title}</MDBCardTitle>
                    <MDBCardText>{node.description}</MDBCardText>
                    <Link to={`/${kebabCase(node.title)}`}>
                        <MDBBtn color='orange'>Ler mais</MDBBtn>
                    </Link>
                </MDBCardBody>
            </MDBCard>
            ))}
        </Col>
    </MDBRow>
  )
}

export default SectionNoticias;
import React from 'react';
import { MDBCard, MDBRow, MDBBtn, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol} from 'mdbreact';
import { useStaticQuery, graphql, Link } from 'gatsby';

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
                    thumbnail
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
    <MDBRow style={{textAlign: '-webkit-right'}}>
        <MDBCol>
        <div>
            <h2>
                ÚLTIMAS <strong>NOTÍCIAS</strong> <hr style={{borderBottom:'1px solid #FDB700'}}/>
            </h2>
        </div>
            {info.map(({node}, i) =>(
            <MDBCard style={{ marginBottom: '2rem' }} key={i}>
                <MDBCardImage className="img-fluid" src={node.frontmatter.thumbnail}
                waves />
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
        </MDBCol>
    </MDBRow>
  )
}

export default SectionNoticias;
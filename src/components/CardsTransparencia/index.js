import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow, MDBContainer } from "mdbreact";
import { useStaticQuery, graphql, Link} from 'gatsby'
const CardsTransparencia = () => {

    const data = useStaticQuery(graphql`
        query CardsTransparencia {
            allMarkdownRemark(limit: 2, 
            filter: {frontmatter: {tags: {eq: "Category"}}}
            sort: {order: DESC, fields: [frontmatter___date]}
            ) {
            edges {
                node {
                excerpt
                frontmatter {
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

    const cadsTransparencia = data.allMarkdownRemark.edges
return (
<MDBContainer>
    <MDBRow style={{marginTop: '4rem'}}>
        <MDBCol>
            <h1 style={{fontWeight: '500'}}>Serviços</h1>
            <hr style={{borderTop: '2px solid #FD0'}} />
        </MDBCol>
    </MDBRow>
    <MDBRow>
      {cadsTransparencia.map(({node}, i) =>(
        <MDBCol sm="6" key={i}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>{node.frontmatter.title}</MDBCardTitle>
              <MDBCardText>
                {node.excerpt}
              </MDBCardText>
              <Link to={node.fields.slug}>
                <MDBBtn color="elegant">Ver Mais</MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
    
</MDBContainer>
);
};

export default CardsTransparencia;
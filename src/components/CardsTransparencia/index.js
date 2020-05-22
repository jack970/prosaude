import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow, MDBContainer } from "mdbreact";
import { useStaticQuery, graphql, Link} from 'gatsby'
const CardsTransparencia = () => {

    const data = useStaticQuery(graphql`
      query CardsTransparencia {
        allStrapiPosts(limit: 2, 
        filter: {tags: {eq: "Serviços"}}
        sort: {order: DESC, fields: date}
        ) {
        edges {
            node {
              title
              description
              id
            }
        }
        }
    }
    `)

    const cadsTransparencia = data.allStrapiPosts.edges
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
        <MDBCol sm="6" key={i} style={{marginBottom: '2rem'}}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>{node.title}</MDBCardTitle>
              <MDBCardText>
                {node.excerpt}
              </MDBCardText>
              <Link to={node.id}>
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
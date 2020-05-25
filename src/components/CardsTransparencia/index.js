import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow, MDBContainer } from "mdbreact";
import { useStaticQuery, graphql, Link} from 'gatsby'
import kebabCase from "lodash/kebabCase"

const CardsTransparencia = () => {

    const data = useStaticQuery(graphql`
      query CardsTransparencia {
        allStrapiProsaudePosts(limit: 2, 
        filter: {tags: {eq: "Institucional"}}
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

    const cadsTransparencia = data.allStrapiProsaudePosts.edges
return (
<MDBContainer>
    <MDBRow style={{marginTop: '4rem'}}>
        <MDBCol>
            <h1 style={{fontWeight: '500'}}>Institucional</h1>
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
                {node.description}
              </MDBCardText>
              <Link to={`/${kebabCase(node.title)}`}>
                <MDBBtn color="amber">Ver Mais</MDBBtn>
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
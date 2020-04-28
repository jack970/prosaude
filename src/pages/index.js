import React from "react"

import { MDBRow, MDBCol, MDBCardTitle } from 'mdbreact'
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Cards from "../components/Cards"
import CarouselPage from "../components/CarouselAnuncios"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CarouselPage/>
    <MDBRow style={{marginTop: '5rem'}}>
      <MDBCol>
        <MDBCardTitle style={{fontWeight: '500'}}>SERVIDORA MUNICIPAL</MDBCardTitle>
        <hr style={{borderTop: '2px solid #FD0'}} />
      </MDBCol>
    </MDBRow>
    <Cards 
        title='Título do Card.'
        description='Descrição do Card.'/>
    <MDBRow style={{marginTop: '5rem'}}>
      <MDBCol>
        <MDBCardTitle style={{fontWeight: '500'}}>SERVIDORA MUNICIPAL</MDBCardTitle>
        <hr style={{borderTop: '2px solid #FD0'}} />
      </MDBCol>
    </MDBRow>
    <Cards 
        title='Título do Card.'
        description='Descrição do Card.'/>
    <MDBRow style={{marginTop: '5rem'}}>
      <MDBCol>
        <MDBCardTitle style={{fontWeight: '500'}}>SERVIDORA MUNICIPAL</MDBCardTitle>
        <hr style={{borderTop: '2px solid #FD0'}} />
      </MDBCol>
    </MDBRow>
    <Cards 
        title='Título do Card.'
        description='Descrição do Card.'/>
  </Layout>
)

export default IndexPage

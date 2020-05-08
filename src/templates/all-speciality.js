import React from 'react'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import {MDBCardGroup, MDBCard, MDBCardBody, MDBCardTitle, MDBRow, MDBCol,MDBBtn} from 'mdbreact'

const especialidadePage = ({ data }) => {
    const especialidades = data.allMarkdownRemark.group

    return(
        <Layout>
            <SEO title="Todas as Especialidades"/>
            <MDBRow>
                <MDBCol>
                    <h1 style={{fontWeight: '500'}}>Especialidades</h1>
                    <hr style={{borderTop: '2px solid #FD0'}} />
                </MDBCol>
            </MDBRow>
            <ul className='list-unstyled list-inline text-center'>
            <MDBCardGroup>
                {especialidades.map((especialidade, i) => {
                    return(
                    <Link className='w-25 mr-5' to={`/guia-medico/especialidades/${kebabCase(especialidade.fieldValue)}`}>
                        <MDBCard>
                            <MDBCardBody>
                            <MDBCardTitle tag="h5">{especialidade.fieldValue}</MDBCardTitle>
                            <MDBBtn color="primary" size="md">Ler Mais</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </Link>
                )})}
            </MDBCardGroup>
            </ul>
        </Layout>
    )
}

export default especialidadePage

export const query = graphql`
    query allPage {
        allMarkdownRemark {
            group(field: frontmatter___speciality) {
                fieldValue
                totalCount
            }
        }
    }`
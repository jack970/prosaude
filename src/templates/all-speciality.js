import React from 'react'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import CardsEspecialidade from '../components/CardsEspecialidade'
import { MDBRow, MDBCol, MDBCardGroup} from 'mdbreact'

const especialidadePage = ({ data }) => {
    const especialidades = data.allStrapiProsaudeGuias.group

    return(
        <Layout>
            <SEO title="Todas as Especialidades"/>
            <MDBRow>
                <MDBCol>
                    <h1 style={{fontWeight: '500'}}>Guia-Médico </h1>
                    <hr style={{borderTop: '2px solid #FD0'}} />
                </MDBCol>
            </MDBRow>
            <ul className='list-unstyled list-inline text-center'>
            <MDBCardGroup>
                {especialidades.map((especialidade, i) => {
                    return(
                    <Link className='w-25 mr-5' key={i}
                    to={`/guia-medico/especialidades/${kebabCase(especialidade.fieldValue)}`}>
                        <CardsEspecialidade
                            title={especialidade.fieldValue}
                        />
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
        allStrapiProsaudeGuias {
            group(field: Especialidade) {
                fieldValue
                totalCount
            }
        }
    }`
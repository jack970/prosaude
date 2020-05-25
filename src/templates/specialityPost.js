import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import SpecialityItem from '../components/SpecialityItem'
import {MDBCard, MDBCardBody} from 'mdbreact'


const Speciality = ({ data, pageContext }) => {
    const { speciality } = pageContext
    const postList = data.allStrapiProsaudeGuias.edges

    return(
        <Layout>
            <SEO title={speciality}
            description='Post'/>
            <MDBCard>
                <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    { speciality }
                </h2>
                <p className="text-center w-responsive mx-auto mb-5">
                    Todas as Clínicas
                </p>
                    { postList.map(({node}, i) =>(
                        <SpecialityItem key = {i}
                            doctor={node.Medico}
                            clinic={node.Clinica}
                            speciality={node.Especialidade}
                            address={node.Endereco}
                            tel={node.Telefone}
                        />
                    ))}
                </MDBCardBody>
            </MDBCard>
        </Layout>
    )
}

export const query = graphql`
    query Speciality($speciality: String!) {
        allStrapiProsaudeGuias(limit: 2000, filter: {Especialidade: {in: [$speciality]}}) {
        edges {
            node {
                Medico
                Telefone
                Endereco
                Clinica
                Especialidade
            }
        }
        }
    }
`

export default Speciality
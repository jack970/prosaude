import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import SpecialityItem from '../components/SpecialityItem'
import {MDBCard, MDBCardBody} from 'mdbreact'


const Speciality = ({ data, pageContext }) => {
    const { speciality } = pageContext
    const postList = data.allMarkdownRemark.edges

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
                            doctor={node.frontmatter.doctor}
                            clinic={node.frontmatter.clinic}
                            speciality={node.frontmatter.speciality}
                            address={node.frontmatter.address}
                            tel={node.frontmatter.tel}
                        />
                    ))}
                </MDBCardBody>
            </MDBCard>
        </Layout>
    )
}

export const query = graphql`
    query Speciality($speciality: String!) {
        allMarkdownRemark(limit: 2000, sort: {fields: [frontmatter___date], order: DESC}, 
        filter: {
            fileAbsolutePath: { glob: "**/guia-medico/*.md" }
            frontmatter: {speciality: { in: [$speciality]
            }
        }}) {
            edges {
                node {
                    frontmatter {
                        doctor
                        clinic
                        speciality
                        address
                        tel
                    }
                }
            }
        }
    }
`

export default Speciality
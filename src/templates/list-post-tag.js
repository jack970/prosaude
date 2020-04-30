import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import { MDBRow} from 'mdbreact'
import Cards from '../components/Cards'
import styled from 'styled-components'
import SectionNoticias from '../components/AllNoticiasSection'
import media from 'styled-media-query'

export const Divisao = styled.div`
    display: flex;
    justify-content: space-between;

    ${media.lessThan('765px')`
        display:block;
    `}
`

export const DivPost = styled.div``

const ListTagsPosts = props => {
    const postList = props.data.allMarkdownRemark.edges

    const { tag } = props.pageContext
    return(
        <Layout>
            <SEO title={tag}
            description='Posts'/>
            <Divisao>
                <DivPost>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'
                        style={{paddingLeft: '0'}}
                    >
                            <h2 style={{fontWeight: '500'}}>{tag}</h2>
                            <hr style={{borderTop: '2px solid #FD0'}} />
                    </div>
                    <MDBRow >
                    { postList.map(({node}, i) => (
                    <Cards key={i}
                    title={node.frontmatter.title}
                    description={node.frontmatter.description}
                    thumbnail={node.frontmatter.thumbnail}
                    slug={node.fields.slug}
                    date={node.frontmatter.date}
                    />
                    ))}
                    </MDBRow>
                </DivPost>
                <SectionNoticias />
            </Divisao>
        </Layout>
    )
}

export const query = graphql`
    query Tags($tag: String!, 
                $limit: Int!, 
                $skip: Int!) {
        allMarkdownRemark(
            limit: $limit, 
            skip: $skip
            sort: {fields: [frontmatter___date], 
            order: DESC}, 
            filter: {frontmatter: {tags: { in: [$tag]}}}) {
                edges {
                    node {
                        frontmatter {
                            title
                            thumbnail
                            description
                            date(locale:"pt-br" ,formatString: "DD [de] MMMM [de] YYYY")
                            tags
                        }
                        fields {
                            slug
                        }
                    }
                }
        }
    }
`

export default ListTagsPosts
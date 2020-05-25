import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import { MDBRow} from 'mdbreact'
import Cards from '../components/Cards'
import styled from 'styled-components'
import SectionNoticias from '../components/AllNoticiasSection'
import media from 'styled-media-query'
import PaginationTags from '../components/Pagination'
import kebabCase from 'lodash/kebabCase'

export const Divisao = styled.div`
    display: flex;
    justify-content: space-between;

    ${media.lessThan('765px')`
        display:block;
    `}
`

export const DivPost = styled.div``

const ListTagsPosts = props => {
    const postList = props.data.allStrapiPosts.edges

    const {tag, currentPage, numPages } = props.pageContext
    const link = `/${kebabCase(tag)}`
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? `${link}` : `${link}/page/${currentPage - 1}`
    const nextPage = `${link}/page/${currentPage + 1}`

    return(
        <Layout>
            <SEO title={tag}
            description='Posts'/>
            <Divisao>
                <DivPost>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'
                        style={{paddingLeft: '0'}}>
                        <h2 style={{fontWeight: '500'}}>{tag}</h2>
                        <hr style={{borderTop: '2px solid #FD0'}} />
                    </div>
                    <MDBRow>
                        { postList.map(({node}, i) => (
                            <Cards key={i}
                            title={node.title}
                            description={node.description}
                            thumbnail={node.thumbnail.childImageSharp.fluid}
                            slug={`/${kebabCase(node.title)}`}
                            date={node.date}
                            />
                        ))}
                    </MDBRow>
                    <PaginationTags
                            currentPage={currentPage}
                            numPages={numPages}
                            isFirst={isFirst}
                            isLast={isLast}
                            prevPage={prevPage}
                            nextPage={nextPage}
                        />
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
        allStrapiPosts(
            limit: $limit, 
            skip: $skip
            sort: {fields: [date], 
            order: DESC}, 
            filter: {tags: { in: [$tag]}}) {
                edges {
                    node {
                        title
                        thumbnail {
                            childImageSharp {
                                fluid(maxWidth: 1080, maxHeight: 1080) {
                                    ...GatsbyImageSharpFluid_tracedSVG
                                }
                            }
                        }
                        description
                        date(locale:"pt-br" ,formatString: "DD [de] MMMM [de] YYYY")
                        tags
                        id
                    }
                }
        }
    }
`

export default ListTagsPosts
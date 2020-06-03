import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import RecomendPosts from '../components/RecomendPosts'
import * as S from '../components/Post/style'
import styled from 'styled-components'
import SectionNoticias from '../components/AllNoticiasSection'
import media from 'styled-media-query'
import kebabCase from "lodash/kebabCase"
import {MDBBadge} from 'mdbreact'
import Reactmarkdown from 'react-markdown'

export const Divisao = styled.div`
    display: flex;
    justify-content: space-between;

    ${media.lessThan('large')`
        display:block;
    `}
    `

export const DivPost = styled.div``

const BlogPost = ({data, pageContext}) => {
    const post = data.strapiProsaudePosts
    const next = pageContext.next
    const previous = pageContext.previous

    return(
        <Layout>
            <SEO title={post.title} 
            description={post.description}
            image={post.thumbnail.publicURL} />
            <Divisao>
                <DivPost>
                    <S.PostHeader>
                        <S.PostCategory>
                            <strong>Categorias:</strong>&nbsp;{` `}
                            <Link to={`/${kebabCase(post.tags)}`}>
                                <MDBBadge color="warning">{post.tags}</MDBBadge>&nbsp;
                            </Link>
                        </S.PostCategory>
                        <S.PostDate>
                            Publicado em {post.date}
                        </S.PostDate>
                        <S.PostTitle>
                            {post.title}
                        </S.PostTitle>
                        <S.PostDescription>
                            {post.description}
                        </S.PostDescription>
                    </S.PostHeader>
                    <S.MainContent>
                        <Reactmarkdown source={post.content}/>
                    </S.MainContent>
                    <RecomendPosts next={next} previous={previous}/>
                </DivPost>
                <SectionNoticias />
            </Divisao>
        </Layout>
    )
}

export const query = graphql`
    query Post($id: String!) {
        strapiProsaudePosts(id: {eq: $id}) {
            title
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            content
            tags
            thumbnail {
                childImageSharp {
                    fluid(maxWidth: 1000, maxHeight: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
    `

export default BlogPost
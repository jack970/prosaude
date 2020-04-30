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

export const Divisao = styled.div`
    display: flex;

    ${media.lessThan('large')`
        display:block;
    `}
    `

export const DivPost = styled.div``

const BlogPost = ({data, pageContext}) => {
    const post = data.markdownRemark
    const next = pageContext.next
    const previous = pageContext.previous
    return(
        <Layout>
            <SEO title={post.frontmatter.title} 
            description={post.frontmatter.description} />
            <Divisao>
                <DivPost>
                    <S.PostHeader>
                        <S.PostDate>
                            {post.frontmatter.tags.map((cat, i) => (
                                <Link to={`/${kebabCase(cat)}`} key={i}>
                                    <strong><u>{cat}</u> &nbsp;</strong>
                                </Link>
                            ))}
                            <br/>
                            <br/>
                            Publicado em {post.frontmatter.date}
                        </S.PostDate>
                        <S.PostTitle>
                            {post.frontmatter.title}
                        </S.PostTitle>
                        <S.PostDescription>
                            {post.frontmatter.description}
                        </S.PostDescription>
                    </S.PostHeader>
                    <S.MainContent>
                        <div dangerouslySetInnerHTML={{__html: post.html}}></div>
                    </S.MainContent>
                    <RecomendPosts next={next} previous={previous}/>
                </DivPost>
                <SectionNoticias />
            </Divisao>
        </Layout>
    )
}

export const query = graphql`
    query blogPost($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                date(locale:"pt-br" ,formatString: "DD [de] MMMM [de] YYYY")
                description
                title
                tags
            }
            html
        }
    }
    `

export default BlogPost
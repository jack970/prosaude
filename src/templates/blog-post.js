import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import RecomendPosts from '../components/RecomendPosts'
import * as S from '../components/Post/style'

const BlogPost = ({data, pageContext}) => {
    const post = data.markdownRemark

    const next = pageContext.next
    const previous = pageContext.previous
    return(
        <Layout>
            <SEO title={post.frontmatter.title} 
            description={post.frontmatter.description} />
            <S.PostHeader>
                <S.PostDate>
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
            }
            html
        }
    }
    `

export default BlogPost
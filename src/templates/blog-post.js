import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import RecomendPosts from "../components/RecomendPosts"
import * as S from "../components/Post/style"
import styled from "styled-components"
import SectionNoticias from "../components/Cards/AllNoticiasSection"
import kebabCase from "lodash/kebabCase"
import media from "styled-media-query"
import { MDBBadge } from "mdbreact"

export const Divisao = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.lessThan("large")`
        display:block;
    `}
`

export const DivPost = styled.div``

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.next
  const previous = pageContext.previous

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <Divisao>
        <DivPost>
          <S.PostHeader>
            <S.PostCategory>
              <strong>Categorias:</strong>&nbsp;{` `}
              <Link to={`/${kebabCase(post.frontmatter.tags)}`}>
                <MDBBadge color="warning">{post.frontmatter.tags}</MDBBadge>&nbsp;
              </Link>
            </S.PostCategory>
            <S.PostDate>Publicado em {post.frontmatter.date}</S.PostDate>
            <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
            <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
          </S.PostHeader>
          <S.MainContent>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </S.MainContent>
          <RecomendPosts next={next} previous={previous} />
        </DivPost>
        <SectionNoticias />
      </Divisao>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        description
        title
        tags
      }
    }
  }
`

export default BlogPost

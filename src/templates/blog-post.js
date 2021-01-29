import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import RecomendPosts from "../components/RecomendPosts"
import * as S from "../components/Post/style"
import styled from "styled-components"
import SectionNoticias from "../components/Cards/AllNoticiasSection"
import kebabCase from "lodash/kebabCase"
import media from "styled-media-query"
import ButtonModalPdf from "../components/ButtonModal"

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
  const tag = post.frontmatter.tags
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
            <S.PostBadge>
              <strong>Categorias:</strong>&nbsp;{` `}
              {tag.map((label, i) => 
                <S.PostBadgetLink key={i} to={`/${kebabCase(label)}`}>
                    {label}
                </S.PostBadgetLink>
              )}
            </S.PostBadge>
            &nbsp;
            <S.PostDate>Publicado em {post.frontmatter.date}</S.PostDate>
            <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
            <S.PostDescription>
              {post.frontmatter.description}
            </S.PostDescription>
          </S.PostHeader>
          <S.MainContent>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </S.MainContent>
          <S.PostBadge>
          <S.PostBadge>
            {
                post.frontmatter.pdf && post.frontmatter.pdf > 0 && (
                <div>Baixar PDF: &nbsp;
                    {post.frontmatter.pdf.map((pdf, i) => (
                    <ButtonModalPdf key={i} pdfAlt={pdf.alt} pdfUrl={pdf.url}/>
                    ))}
                </div>
                )
            }
          </S.PostBadge>
          </S.PostBadge>
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
        pdf {
          alt
          url
        }
      }
    }
  }
`

export default BlogPost

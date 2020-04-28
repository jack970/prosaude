import React from 'react';
import Cards from '../Cards'
import { graphql, useStaticQuery } from 'gatsby'
import { MDBRow, MDBCol } from 'mdbreact';

const CardsPub = () => {

    const data = useStaticQuery(graphql`
        query CardsPub {
            allMarkdownRemark(limit: 3, 
            filter: {frontmatter: {tags: {eq: "Category"}}}
            sort: {order: DESC, fields: [frontmatter___date]}
            ) {
            edges {
                node {
                excerpt
                frontmatter {
                    thumbnail
                    date(locale:"pt-br" ,formatString: "DD [de] MMMM [de] YYYY")
                    title
                    description
                }
                fields {
                    slug
                }
                }
            }
            }
        }
    `)

    const cardsPub = data.allMarkdownRemark.edges
    return (
    <>
        <MDBRow style={{marginTop: '5rem'}}>
              <MDBCol>
                <h1 style={{fontWeight: '500'}}>Publicações</h1>
                <hr style={{borderTop: '2px solid #FD0'}} />
            </MDBCol>
        </MDBRow>
        <MDBRow>
            { cardsPub.map(({node}, i) => (
                <Cards key={i}
                title={node.frontmatter.title}
                description={node.excerpt}
                thumbnail={node.frontmatter.thumbnail}
                slug={node.fields.slug}
                date={node.frontmatter.date}
                />
            ))}
        </MDBRow>
    </>

  )
}

export default CardsPub;
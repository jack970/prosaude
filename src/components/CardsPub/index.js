import React from 'react';
import Cards from '../Cards'
import { graphql, useStaticQuery } from 'gatsby'
import { MDBRow, MDBCol } from 'mdbreact';

const CardsPub = () => {

    const data = useStaticQuery(graphql`
    query CardsPub {
        allStrapiPosts(limit: 3, 
        filter: {tags: {eq: "Publicações"}}
        sort: {order: DESC, fields: date}
        ) {
        edges {
            node {
                thumbnail {
                    childImageSharp {
                        fluid(maxWidth: 300) {
                           src
                        }
                    }
                }
                date(locale:"pt-br" ,formatString: "DD [de] MMMM [de] YYYY")
                title
                description
                  id
            }
          }
        }
    }
    `)

    const cardsPub = data.allStrapiPosts.edges
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
                title={node.title}
                description={node.excerpt}
                thumbnail={node.thumbnail.childImageSharp.fluid}
                slug={node.id}
                date={node.date}
                />
            ))}
        </MDBRow>
    </>

  )
}

export default CardsPub;
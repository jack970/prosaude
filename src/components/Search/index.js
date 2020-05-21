import React, {useState} from "react"

import PostItem from '../PostItem'
import {MDBInput} from 'mdbreact' 
import * as S from './style'
import { useStaticQuery, graphql } from "gatsby";

const Search = () => {
    const data = useStaticQuery(graphql`
    {
        posts: allMarkdownRemark(
            filter : {
                fileAbsolutePath: { glob: "**/posts/*.md" }
            }
            sort: { 
                fields: frontmatter___date, order: DESC 
            }){
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        thumbnail {
                            childImageSharp {
                                fluid(maxWidth: 300) {
                                    ...GatsbyImageSharpFluid_tracedSVG
                                }
                            }
                        }
                        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                        description
                    }
                }
            }
        }
    }`)

    const allPosts = data.posts.edges
    
    const emptyQuery = ""
    
    const [state, setState] = useState({
        filteredData: [],
        query: emptyQuery,
    })
    
    const handleInputChange = event => {
        console.log(event.target.value)
        const query = event.target.value
    
        const posts = allPosts || []
    
        const filteredData = posts.filter(post => {
        const { title, description, tags } = post.node.frontmatter
        return (
            description.toLowerCase().includes(query.toLowerCase()) ||
            title.toLowerCase().includes(query.toLowerCase()) ||
            (tags &&
            tags
                .join("")
                .toLowerCase()
                .includes(query.toLowerCase()))
        )
        })
    
        setState({
        query,
        filteredData,
        })
    }

    const { filteredData, query } = state
    const hasSearchResults = filteredData && query !== emptyQuery
    const posts = hasSearchResults ? filteredData : []

return(
    <S.SearchWrapper>
        <MDBInput label="Pesquisar..." icon="search" background size="lg" onChange={handleInputChange}/>
        {posts.map(({node}, i) => {
            const {slug} = node.fields
            const {fluid} = node.frontmatter.thumbnail.childImageSharp
            const { title, date, description } = node.frontmatter

            return(
            <PostItem key={i}
                slug={slug}
                thumbnail={fluid}
                title={title}
                date={date}
                description={description}
            />
        )
        })}
  </S.SearchWrapper>
)}

export default Search

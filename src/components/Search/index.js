import React, {useState} from "react"

import PostItem from '../PostItem'
import {MDBInput} from 'mdbreact' 
import * as S from './style'
import { useStaticQuery, graphql } from "gatsby";

const Search = () => {
    const data = useStaticQuery(graphql`
    {
        posts: allStrapiPosts(
            sort: { 
                fields: date, order: DESC 
            }){
            edges {
                node {
                    id
                    title
                    thumbnail {
                        childImageSharp {
                            fluid(maxWidth: 300, maxHeight: 200) {
                                ...GatsbyImageSharpFluid_tracedSVG
                            }
                        }
                    }
                    date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                    description
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
        const { title, description, tags } = post.node
        return (
            title.toLowerCase().includes(query.toLowerCase()) ||
            description.toLowerCase().includes(query.toLowerCase()) ||
            (tags &&
            tags
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
            const {fluid} = node.thumbnail.childImageSharp
            const { title, date, description, id } = node

            return(
            <PostItem key={i}
                slug={id}
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

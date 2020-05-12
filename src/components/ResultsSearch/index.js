import React from 'react'
import PostItem from '../PostItem'

const ResultSearch = () => {
    
    return(
        <PostItem
            slug={ResultSearch.fields.slug}
            thumbnail={ResultSearch.thumbnail.publicURL}
            title={ResultSearch.title}
            date={ResultSearch.date}
            description={ResultSearch.description}
        />
    )
}

export default ResultSearch
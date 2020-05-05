import React from 'react'
import PostItem from '../PostItem'

const Hit = ({ hit}) => {
    console.log(hit.thumbnail)

    return(
    <PostItem
        slug={hit.fields.slug}
        thumbnail={hit.thumbnail.publicURL}
        title={hit.title}
        date={hit.date}
        description={hit.description}
    />
    )
}

export default Hit
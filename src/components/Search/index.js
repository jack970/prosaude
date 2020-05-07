import React from "react"

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom';
import Hit from './hit'

import * as S from './style'

const algolia = {
    appId: 'BNUSOSS8HW',
    searchOnlyApiKey: '484155039faeec00af4ca229b3866195',
    indexName: 'POSTS'

}

const Search = () => {
    const searchClient = algoliasearch(
        algolia.appId,
        algolia.searchOnlyApiKey
    )

return(
    <S.SearchWrapper>
        <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
            <SearchBox translations={{ placeholder: "Pesquisar..." }} />
            <Stats
                translations={{
                stats(nbHits) {
                    return `${nbHits} resultados encontrados`
                }}}
            />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </S.SearchWrapper>
)}

export default Search

import React, { useRef, useState } from 'react'
import * as S from './styled'
import { navigate } from "@reach/router"

const InputSearch = ({initialQuery=""}) => {
    const [query, setQuery] = useState(initialQuery)

    const inputEl = useRef(null)

    const handleChange = e => {
        setQuery(e.target.value)
      }

    const handleSubmit = e => {
        e.preventDefault()
        const q = inputEl.current.value
        navigate(`/pesquisa?q=${q.trim()}`)
    }

    return (
        <S.WrapperSearch onSubmit={handleSubmit}>
            <S.InputSearch 
                ref={inputEl}
                value={query}
                onChange={handleChange}/>
        </S.WrapperSearch>
    )
}

export default InputSearch

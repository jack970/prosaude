import { Link } from 'gatsby'
import styled from 'styled-components'
import media from 'styled-media-query'

export const CardTransparenciaRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 90%;
`

export const CardTransparenciaBody = styled.div`
    margin: 1rem .4rem;
    font-weight: 400;
    border: 0;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    border-radius: .25rem;
    min-height: 1px;
    
    padding: 1.25rem;
`

export const CardTransparenciaTitle = styled.h1`
    color: #333;
    font-weight: 400;
    font-size: 1.6rem;
`

export const CardTransparenciaLink = styled(Link)`
    margin: .5rem 1rem;
    width: 46%;

    ${media.lessThan("large")`
        width: 100%;
    
    `}
`

export const CardTransparenciaDescription = styled.p`
    font-size: .9rem;
    font-weight: 400;
    color: #747373;
`

export const CardTransparenciaButton = styled.button``
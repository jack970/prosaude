import styled from 'styled-components'
import media from 'styled-media-query'

export const SectionWrapper = styled.div`
`

export const SectionTitle = styled.h1`
    font-weight: 500;
`

export const SectionDivider = styled.div`
    border: 0;
    margin: 1rem auto;
    border-top: 2px solid rgb(255, 221, 0);
`

export const SectionRow = styled.div`
    display: flex;
    flex-wrap: ${props => props.themeCards.flexWrap};

    ${media.lessThan("medium")`
        display: block;
    `}
`

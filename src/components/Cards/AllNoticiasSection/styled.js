import { Link } from 'gatsby'
import styled from 'styled-components'

export const SectionWrapper = styled.div`
    width: 13rem;
    min-width: 13rem;
    flex-wrap: wrap;
    text-align: -webkit-right;
`

export const CardsSectionTitle = styled.h1`
    font-size: 28px;
`

export const CardsSectionLink = styled(Link)`
`

export const CardsSectionBody = styled.div`
    min-height: 1px;
    padding: 1.25rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
`

export const CardsSectionBodyTitle = styled.h1`
    font-weight: 400;
    color: black;
    font-size: 1.7rem;
    margin-bottom: .75rem;
`

export const CardsSectionBodyDate = styled.p`
    font-size: .9rem;
    font-weight: 400;
    color: #747373;
`

export const CardsSectionBodyDescription = styled.p`
    color: #747373;
    font-weight: 400;
    font-size: .9rem;
`

export const CardsSectionBodyButton = styled.button`
    margin: .375rem;
    color: #fff;
    background-color: #f57c00;
    border: 0;
    border-radius: .125rem;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
    padding: .84rem 2.14rem;
    font-size: .81rem;

    :hover {
        outline: 0;
        box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
    }
`
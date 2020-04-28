import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const MenuLinksWrapper = styled.nav`
    background-color: #FDB700;
`

export const MenuLinksList = styled.ul`
    color: #ececec;
    font-size: 13px;
    height: 2rem;
    padding: 0 5rem 0;
    display: flex;
    max-width: 100rem;
    margin: 0 auto;

    #title {
        float: left;
        line-height: 1.6rem;

        ${media.lessThan('large')`
        float:none;
        text-align: center;
        `}
    }

    #ul-tema{
        padding: .3rem;
        width: 22rem;

        ${media.lessThan('large')`
        width: 100%;
        `}
    }
    
    .list-title {
        display: flex;
        ${media.lessThan('large')`
            display: block;
        `}
    }

`

export const MenuLinksItem = styled.li`
    color: #fff;
    padding: .3rem;
    float: right;
    display: list-item;
    transition: all ease 0.5s;
    line-height: 0.3rem;
`

export const MenuLinksIcon = styled.i`
    padding: 2px 2px 0;
    float: left;
    width: 22px;
    height: 22px;
    
`

export const MenuLinksLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 10px;

`

export const MenuLinksGroup = styled.div`
    width: -webkit-fill-available;

    ${media.lessThan('large')`
        display: none
    
    `}
`
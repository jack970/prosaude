import { Link } from "gatsby"
import styled from "styled-components"
import media from 'styled-media-query'

export const HeaderWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
  
  #mobile {
    display: none;
  }

`

export const HeaderContainer = styled.div`
  min-height: 7rem;
  margin: 0 auto;
  display: flex;
  max-width: 70rem;
  justify-content: space-between;

  ${media.lessThan("large")`
  width: 100%;
  max-width: none;
  display: inline-flex;
  justify-content: space-between;
  padding: 2rem 0 2rem;
  #mobile {
      display: block;
  }
`}
`

export const HeaderTitle = styled.h1`
  color: #fdb700;
  font-weight: 600;
  text-align: center;
`

export const HeaderDescription = styled.p`
  color: #333;

  text-align: center;
`

export const HeaderLogo = styled(Link)`
  margin-top: auto;
  margin-bottom: auto;
`

export const HeaderMenuContents = styled.div`
  align-items: flex-end;
  display: flex;
  

  ${media.lessThan("large")`
        padding: 0;
        display: none;
    `}
`

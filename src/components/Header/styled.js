import { Link } from "gatsby"
import styled from "styled-components"

export const HeaderWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
`

export const HeaderContainer = styled.div`
  min-height: 7rem;
  margin: 0 auto;
  display: flex;
  max-width: 70rem;
  justify-content: space-between;
`

export const HeaderTitle = styled.h1`
  color: #fdb700;
  font-weight: 600;
  text-align: center;
`

export const HeaderDescription = styled.p`
  color: #333;
`

export const HeaderLogo = styled(Link)`
  margin-top: auto;
  margin-bottom: auto;
`

export const HeaderMenuContents = styled.div`
  align-items: flex-end;
  display: flex;
`

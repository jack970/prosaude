import styled from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const Col = styled.div`
  width: 14rem;
  margin-right: 4rem;
  margin-bottom: 4rem;

  ${media.lessThan("765px")`
        width: 100%;
        margin-right: 0;
    `}
`

export const CardWrapper = styled.div`
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 0.25rem;
`

export const CardLink = styled(Link)``

export const CardBody = styled.div`
  min-height: 1px;
  padding: 1.25rem;
  word-break: break-all;
`

export const CardDivider = styled.hr``

export const CardImage = styled.img`
  width: 100%;
`

export const CardTitle = styled.h1`
  font-weight: 400;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
`

export const CardDescription = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  color: #747373;
`

export const CardView = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: black;
  text-align: right;

  ::after {
    font-weight: 400;
    content: ">>";
  }
`

export const CardDate = styled.div`
  border-radius: 0.25rem;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  padding: 4px;
  background-color: #ffa000;
  color: #fff;
`

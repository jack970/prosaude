import styled from 'styled-components'
import media from 'styled-media-query'

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid #3E4551;
  color: #3E4551;
  display: flex;
  padding: 1.5rem 3rem;
  padding-bottom: 0;
  justify-content: space-between;
  ${media.lessThan('large')`
    font-weight: 700;
    padding: 1rem;
    margin-bottom: 4rem;
  `}
  a {
    color: #3E4551;
    text-decoration: none;

    &:hover {
      color: #FFB300;
    }
  }
`
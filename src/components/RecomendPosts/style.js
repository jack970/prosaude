import styled from 'styled-components'
import { Link } from 'gatsby'

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  background: white;
  display: flex;
  margin-bottom: 2rem;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: white;
  color: black;
  display: flex;
  padding: 2rem 1rem;
  text-decoration: none;
  width: 50%;
 
  &:hover {
    background: #dbe2e8;
  }
  &.previous {
    border-right: 1px solid #dbe2e8;
  }
  &.next {
    justify-content: flex-end;
  }
  &.next:only-child {
    margin-left: auto;
    border-left: 1px solid #dbe2e8;
  }
  &.previous:before {
    content: '\\2190';
    margin-right: 0.5rem;
  }
  &.next:after {
    content: '\\2192';
    margin-left: 0.5rem;
  }
`
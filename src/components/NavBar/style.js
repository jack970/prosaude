import styled from 'styled-components'
import media from 'styled-media-query'

export const AcessarClasses = styled.div`
  #search {
    padding: 0;
  }
  #link {
    padding: 0;
  }
`
export const Span = styled.span`
  transition: display 4s ease-in-out;

  position: absolute;
  right: 1rem;
  line-height: 2.2rem;
  pointer-events: none;

  ${media.lessThan("767px")`
        left: .6rem;
  `}
`

export const Input = styled.input`
    background: #FFF;
    padding: 5px 1px 5px 5px;
    position: relative; top: 0; left: 0;
    width: 40px;
    outline: none;
    color: #fff;
    border: 1px solid #fff;
    cursor: pointer;
    border-radius: 6px;
    -webkit-transition: all .5s ease-in-out;
    -moz-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;

    :focus {
        background: #FFF;
        width: 200px;
        color: #222;
        border: 1px solid #fdb700;
          top: 0;
          right: 100%;    
    }

    ${media.lessThan("767px")`
        :focus {
          width: 100%;
      }
  `}

    :focus+${Span},
    :active+${Span} {
      display: none;
    }
`
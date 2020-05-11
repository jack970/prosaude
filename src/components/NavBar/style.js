import styled from 'styled-components'
import media from 'styled-media-query'


export const Span = styled.span`
  position: absolute;
  right: 1.5rem;
  line-height: 1.8rem;
  pointer-events: none;

  ${media.lessThan("767px")`
        left: 1.5rem;
  `}
`

export const Input = styled.input`
    background: #FFF;
    padding: 1px 1px 1px 5px;
    position: relative; top: 0; left: 0;
    width: 40px;
    outline: none;
    border: 1px solid #fff;
    cursor: pointer;
    border-radius: 6px;
    -webkit-transition: all .5s ease-in-out;
    -moz-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;

    :focus {
        background: #FFF;
        padding: 1px 1px 1px 5px;
        width: 200px;
        border: 1px solid #fdb700;
          top: 0;
          right: 100%;    
        }
    :focus+${Span},
    :active+${Span} {
      display: none;
    }
`
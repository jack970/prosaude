import React from 'react'
import * as S from './style'
import { Link } from 'gatsby'

const HeaderNav = ({title}) => (
    <S.MenuLinksWrapper>
        <S.MenuLinksList>
            <div id='ul-tema'>
                <li className='list-title'>
                    <p id='title'>
                        <Link to='/' style={{color: '#fff', textDecoration: 'none'}}>
                            <b style={{fontWeight: '700'}}>{title}</b> {` `}
                            • Sites Municipais 
                        </Link>
                    </p>
                </li>
            </div>
            <S.MenuLinksGroup>
            <ul style={{padding: '.3rem', float: 'right'}}>
                <li>
                    <p id='title'>
                        <a href='https://webmail.prosaudecatalao.go.gov.br/#/login' style={{color: '#fff', textDecoration: 'none'}}>
                            <b>WEBMAIL</b>
                        </a>
                    </p>
                </li>
            </ul>
            </S.MenuLinksGroup>
        </S.MenuLinksList>
    </S.MenuLinksWrapper>
)

export default HeaderNav
import React from 'react'
import * as S from './style'

const HeaderNav = ({title}) => (
    <S.MenuLinksWrapper>
        <S.MenuLinksList>
            <div id='ul-tema'>
                <li style={{ display: 'flex'}}>
                    <p id='title'>
                        <strong>{title}</strong> {` `}
                        • Sites Municipais 
                    </p>
                </li>
            </div>
            <S.MenuLinksGroup>
                <S.MenuLinksItem>
                    <S.MenuLinksLink className="active" to='/'>Ouvidoria</S.MenuLinksLink>
                </S.MenuLinksItem>
                <S.MenuLinksItem>
                    <S.MenuLinksLink className="active" to='/'>PMCG</S.MenuLinksLink>
                </S.MenuLinksItem>
                <S.MenuLinksItem>
                    <S.MenuLinksLink className="active" to='/'>Cerimonial</S.MenuLinksLink>
                </S.MenuLinksItem>
            </S.MenuLinksGroup>
        </S.MenuLinksList>
    </S.MenuLinksWrapper>
)

export default HeaderNav
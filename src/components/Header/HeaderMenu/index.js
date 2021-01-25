import React from 'react'
import * as S from './styled'

const HeaderMenu = ({menu}) => {
    return (
        <S.MenuDropdown>
            {menu.map((link, i) => (
            <S.MenuContent key={i}>
                <S.MenuDropdownButton>{link.label}</S.MenuDropdownButton>
                <S.MenuDropdownContent>
                    {link.submenu.map((subLink, i) => (
                        <S.MenuDropdownLink key={i} to={subLink.url}>{subLink.label}</S.MenuDropdownLink>
                    ))}
                </S.MenuDropdownContent>
            </S.MenuContent>
            ))}
        </S.MenuDropdown>
    )
}

export default HeaderMenu

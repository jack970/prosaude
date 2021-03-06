import React from "react"
import InputSearch from "../Search"
import HeaderMenu from "./HeaderMenu"
import * as S from "./styled"
import MenuMobile from './MenuMobile'

const Header = ({ title, description, menu }) => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderLogo to="/">
          <S.HeaderTitle>{title}</S.HeaderTitle>
          <S.HeaderDescription>{description}</S.HeaderDescription>
        </S.HeaderLogo>
        <div id="mobile">
          <MenuMobile links={menu} className=".mobile" />
        </div>
        <S.HeaderMenuContents>
          <HeaderMenu menu={menu} />
          <InputSearch />
        </S.HeaderMenuContents>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header

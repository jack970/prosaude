import React from "react"
import formatDate from "../../utils/formatDate"
import * as S from './styled'

const Footer = ({ title, description, address }) => {
  return (
    <S.FooterWrapper>
      <S.FooterWrapperInfo>
        <S.FooterTitle>{title}</S.FooterTitle>
        <S.FooterDescription>{description}</S.FooterDescription>
        <S.FooterDescription>{address}</S.FooterDescription>
      </S.FooterWrapperInfo>
      <S.FooterWrapperDate>
        <S.FooterDate>&copy; {formatDate(Date())}</S.FooterDate>
      </S.FooterWrapperDate>
    </S.FooterWrapper>
  )
}

export default Footer

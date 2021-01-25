import React from "react"
import * as S from "./styled"

const Cards = ({ title, description, image, slug, date }) => {
  return (
    <S.Col>
      <S.CardLink to={slug}>
        <S.CardWrapper>
          <S.CardImage top fluid={image.childImageSharp.fluid} hover waves />
          <S.CardBody>
            <S.CardTitle>{title}</S.CardTitle>
            <S.CardDivider />
            <S.CardDescription>{description}</S.CardDescription>
            <S.CardView>Ler Mais</S.CardView>
          </S.CardBody>
          <S.CardDate>{date}</S.CardDate>
        </S.CardWrapper>
      </S.CardLink>
    </S.Col>
  )
}

export default Cards

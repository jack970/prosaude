import React from 'react'
import * as S from './styled'

const CardsSection = ({children, titleSection, flexWrap="inherit"}) => {
    return (
        <S.SectionWrapper>
            <S.SectionTitle>{titleSection}</S.SectionTitle>
            <S.SectionDivider />
            <S.SectionRow themeCards={{ flexWrap: flexWrap}}>
                {children}
            </S.SectionRow>
        </S.SectionWrapper>
    )
}

export default CardsSection

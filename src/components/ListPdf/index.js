import React from 'react'
import * as S from '../Post/style'

const ListPdf = ({PDFGenerator}) => {
    return (
        <S.PostBadge>
            {
            PDFGenerator && PDFGenerator.length > 0 && 
                <div>
                    Baixar PDF:  &nbsp;  
                    {PDFGenerator.map((pdf, i) => 
                        <S.PostBadgetLink 
                            key={i} 
                            to={pdf.url}
                        >
                            {pdf.alt}
                        </S.PostBadgetLink>
                    )}
                </div>
            }
        </S.PostBadge>
    
    )
}

export default ListPdf
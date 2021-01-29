import React, { useState } from 'react'
import { ButtonPDF } from "../Post/style"
import * as S from './styled'

const theme = {
    primaryColor: {
        background: "#007bff", borderColor: "#007bff"
    }
}

const ButtonModalPdf = ({pdfUrl, pdfAlt}) => {
    const [openModal, setOpenModal] = useState(false)
    return (
    <>
        <ButtonPDF onClick={() => setOpenModal(true)}>
            {pdfAlt}
        </ButtonPDF>
        {openModal && 
            <S.ModalWrapper>
                <S.ModalContent>
                    <S.ModalHeader>
                        <S.ModalTitle>{pdfAlt}</S.ModalTitle>
                        <S.ModalButtonClose onClick={() => setOpenModal(!openModal)}>×</S.ModalButtonClose>
                    </S.ModalHeader>
                    <S.ModalBody>
                        <embed src={pdfUrl} type="application/pdf" width="100%" height="600px" />
                    </S.ModalBody>
                    <S.ModalFooter>
                        <S.ModalButtonDownload href={pdfUrl} theme={theme.secondColor} download={pdfAlt}>Baixar</S.ModalButtonDownload>
                        <S.ModalButton theme={theme.primaryColor} onClick={() => setOpenModal(!openModal)}>Fechar</S.ModalButton>
                    </S.ModalFooter>
                </S.ModalContent>
            </S.ModalWrapper>}
    </>
    )
}

const OpenModalButton = ({pdfGenerator}) => {
    return(
        <div>
            {
            pdfGenerator && pdfGenerator.length > 0 && (
            <div>Baixar PDF: &nbsp;
                {pdfGenerator.map((pdf, i) => (
                <ButtonModalPdf key={i} pdfAlt={pdf.alt} pdfUrl={pdf.url}/>
                ))}
            </div>
            )
            }
        </div>
    )
}

export default OpenModalButton

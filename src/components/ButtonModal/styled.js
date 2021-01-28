import styled from 'styled-components'

export const ModalWrapper = styled.div`
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    background:rgba(0, 0, 0, 0.53);
    flex-flow: column nowrap;
    justify-content: center; /* aligns on vertical for column */
    align-items: center; /* aligns on horizontal for column */  
`

export const ModalHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(.3rem - 1px);
    border-top-right-radius: calc(.3rem - 1px);
`

export const ModalContent = styled.div`
    width: 50%;
    background-color: #fff;
    pointer-events: auto;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
`

export const ModalBody = styled.div`
    padding: 1rem;
`

export const ModalFooter = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    padding: .75rem;
    border-top: 1px solid #dee2e6;
`

export const ModalTitle = styled.h1``

export const ModalButtonDownload = styled.a`
    background-color: #6c757d;
    border-color: #6c757d;
    font-weight: 600;
    color: #fff;
    margin: .25rem;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

export const ModalButton = styled.button`
    color: #fff;
    background-color: ${props => props.theme.background};
    border-color: ${props => props.theme.borderColor};

    margin: .25rem;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

export const ModalButtonClose = styled.button`
    font-size: 1.9rem;
    background-color: transparent;
    font-weight: 700;
    border: none;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
`
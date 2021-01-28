import styled from 'styled-components'

export const WrapperSearch = styled.form`
    margin-bottom: 1rem;
`

export const InputSearch = styled.input`
    cursor: pointer;
    margin-bottom: 1rem;
    width: 0px;
    box-sizing: border-box;
    border-radius: 10px;
    border-color: transparent;
    font-size: 16px;
    background-color: transparent;
    background-image: url(https://i.imgur.com/MACjo6S.png);
    background-position: 10px 10px; 
    background-repeat: no-repeat;
    padding: 10px 20px 10px 40px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: all 0.9s ease-in-out;
    transform: translateY(50%);

    :focus {
        width: 300px;
        border: 2px solid #FDB700;
    }
`
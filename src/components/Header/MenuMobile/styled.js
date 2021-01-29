import styled from 'styled-components'

export const Title = styled.p`
    font-size: 1.5em;
    font-weight: 700;
    color: black;
`

export const MenuWrapper = styled.div`
    body {
        background-color: #f9f9f9;
        margin: 0;
        padding: 0;
        transition: all .25s ease-in-out !important;
    }
    a {
        text-decoration: none;
        color: #fff;
        opacity:1;
        transition: 200ms;
    }
    a:hover {
        opacity:0.5;
    }
    ul {
        padding: 0;
        list-style-type: none;
    }
    .container {
        display: flex;
        justify-content: left;
        align-items: center;
    }

    .content {
        width: 94%;
        height: 91%;
    }
    nav {
        height: 65px;
        width: 75px;
    }
    
    
    #menuToggle {
        display: flex;
        flex-direction: column;
        position: relative;
        top: 25px;
        z-index: 1;
        -webkit-user-select: none;
        user-select: none;
    }
    
    #menuToggle input
    {
        display: flex;
        -webkit-tap-highlight-color: transparent;
        width: 40px;
        height: 32px;
        position: absolute;
        cursor: pointer;
        opacity: 0;
        z-index: 2;
    }
    
    #menuToggle span
    {
        display: flex;
        width: 29px;
        height: 2px;
        margin-bottom: 5px;
        position: relative;
        background: black;
        border-radius: 3px;
        z-index: 1;
        transform-origin: 5px 0px;
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    opacity 0.55s ease;

    }
    
    #menuToggle span:first-child
    {
        transform-origin: 0% 0%;
    }
    
    #menuToggle span:nth-last-child(2)
    {
        transform-origin: 0% 100%;
    }
    
    #menuToggle input:checked ~ span
    {
        opacity: 1;
        transform: rotate(45deg) translate(-3px, -1px);
        background: black;
    }
    #menuToggle input:checked ~ span:nth-last-child(3)
    {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }
    
    #menuToggle input:checked ~ span:nth-last-child(2)
    {
        transform: rotate(-45deg) translate(0, -1px);
    }
    
    #menu
    {
        position: fixed;
        width: 210px;
        box-shadow: 0 0 10px #85888C;
        margin: -60px 0 0 -260px;
        padding: 250px 250px 50px 40px;
        padding-top: 2.5rem;
        background-color: #FDB700;
        opacity: 0.95;
        overflow-x: hidden;
        height: 100%;
        -webkit-font-smoothing: antialiased;
        transform-origin: 0% 0%;
        transform: translate(100%, 0);
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    }

    #menu li:last-child {
        padding-bottom: 2rem; 
    }

    #submenu 
    {
        display: none;
    }
    
    #menu li
    {
        padding: 10px 0;
        transition-delay: 2s;
        text-transform: uppercase;
        text-align: left;
    }
    
    #menuToggle input:checked ~ ul
    {
        transform: none;
        display: block;
    }`


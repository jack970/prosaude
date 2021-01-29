import React from 'react'
import * as S from './styled'
import {Link} from 'gatsby'

const MenuMobile = ({links}) => (
    <S.MenuWrapper>
        <div className="container">
            <div className="content">
            <nav role="navigation">
                <div id="menuToggle">
                <input type="checkbox" style={{ color: 'black'}}/>
                    <span></span>
                    <span></span>
                    <span></span>
                <ul id="menu">
                    {links.map((link, i) => (
                        <li key={i}>
                            <input type="checkbox" style={{'width':'200px'}}/>
                            <S.Title>{link.label}</S.Title>
                            <ul id="submenu">
                            {
                                link.submenu.map((sublink, i) => (
                                <li key={i}>
                                    <Link to={sublink.url} style={{'fontWeight':'700', color: 'black'}}>
                                        {sublink.label}
                                    </Link>
                                </li>
                                ))
                            }
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            </nav>
            </div>
        </div>
    </S.MenuWrapper>
)

export default MenuMobile
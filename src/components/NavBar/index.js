import React, { useState } from "react";
import * as S from './style'
import {MDBNavbar, 
  MDBNavbarNav, 
  MDBDropdownItem, 
  MDBDropdownMenu, 
  MDBNavItem, 
  MDBNavbarToggler, 
  MDBCollapse, 
  MDBDropdown, 
  MDBDropdownToggle} from "mdbreact";
import { useStaticQuery, graphql, Link } from 'gatsby'

const NavBar = () => {
  const data = useStaticQuery(graphql`
  query SiteHeaderQuery {
    site {
      siteMetadata {
        menuHeader {
          label
          submenu {
            url
            label
          }
        }
      }
    }
  }
  `)

  const menuLink = data.site.siteMetadata
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <MDBNavbar color="transparent" light text='center' expand="md">
      <MDBNavbarToggler onClick={toggle} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav> 
        { menuLink.menuHeader.map((menu, i) => (
          <MDBNavItem key={i}>
           <MDBDropdown>
             <MDBDropdownToggle nav caret>
               <span >{menu.label}</span>
             </MDBDropdownToggle>
             <MDBDropdownMenu>
               {menu.submenu.map((subMenu, i) => (
                  <MDBDropdownItem key={i}>
                    <Link to={subMenu.url}>
                      {subMenu.label}
                    </Link>
                  </MDBDropdownItem>
               ))}
             </MDBDropdownMenu>
           </MDBDropdown>
         </MDBNavItem>
          ))}
        </MDBNavbarNav>
        <MDBNavbarNav right>
            <form action='/pesquisa'
                      method='GET'>
              <S.Input
                type="text" 
                placeholder="Pesquisar" 
                aria-label="Search"
              />
            </form>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}
export default NavBar;
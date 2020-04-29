import React, { useState } from "react";
import {MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline} from "mdbreact";
import { Link, useStaticQuery, graphql } from 'gatsby'

const NavBar = () => {
  const { site } = useStaticQuery(graphql`
    query SiteHeaderQuery {
      site {
        siteMetadata {
          menuHeader {
            link
            label
          }
        }
      }
    }
  `)
  
    
  const menuLink = site.siteMetadata
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <MDBNavbar color="elegant-color" dark text='center' expand="md" >
      <MDBNavbarToggler onClick={toggle} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav center='true'>
        { menuLink.menuHeader.map((menu) => (
            <MDBNavItem>
              <Link to={menu.link}>{menu.label}</Link>
            </MDBNavItem>
          ))}
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBFormInline waves>
              <div className="md-form my-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Pesquisar" aria-label="Search" />
              </div>
            </MDBFormInline>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}

export default NavBar;
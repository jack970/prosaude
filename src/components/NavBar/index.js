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
    <MDBNavbar color="transparent" light text='center' expand="md">
      <MDBNavbarToggler onClick={toggle} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav center='true'>
        { menuLink.menuHeader.map((menu, i) => (
            <MDBNavItem key={i}>
              <Link className="text-dark" to={menu.link} style={{fontWeight: "700"}}>{menu.label}</Link>
            </MDBNavItem>
          ))}
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBFormInline className="md-form mr-auto m-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" 
            onChange={() => {}} />
          </MDBFormInline>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}

export default NavBar;
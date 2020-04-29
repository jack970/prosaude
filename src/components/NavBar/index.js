import React, { useState } from "react";
import {MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline} from "mdbreact";
import { Link } from 'gatsby'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggle = () => setIsOpen(!isOpen);

  return (
    <MDBNavbar color="elegant-color" dark text='center' expand="md" >
      <MDBNavbarToggler onClick={toggle} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav center='true'>
          <MDBNavItem active>
            <Link to='#!'>Link</Link>
          </MDBNavItem>
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
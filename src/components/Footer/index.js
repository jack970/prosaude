import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import formatDate from '../../utils/formatDate'

const Footer = ({title, description, address}) => {
  return (
    <MDBFooter color="#ffb300 amber darken-1" className="font-small pt-4 mt-4 border-top border-light">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol className='text-center mb-4'>
            <h3 className="title"><strong>{title}</strong></h3>
            <p>
              {description}
            </p>
            <p>
                {address}
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {formatDate(Date())} 
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
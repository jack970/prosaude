import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from 'mdbreact';
import { Link } from 'gatsby'

const Cards = ({title, description, thumbnail, slug, date}) => {

  return (
      <MDBCol md="4">
        <MDBCard>
        <Link to={slug}>
          <MDBCardImage
            top
            src={thumbnail}
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
        </Link>
          <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <hr />
            <MDBCardText>
              {description}
            </MDBCardText>
            <Link to={slug} className='black-text d-flex justify-content-end'>
              <h5>
                Ler Mais
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </Link>
          </MDBCardBody>
          <div className='rounded-bottom mdb-color #ffa000 amber darken-2 text-center p-1'>
            <ul className='list-unstyled list-inline font-small'>
              <li className='list-inline-item pr-2 white-text'>
                <MDBIcon far icon='clock' className='pr-2' /> 
                  {date}
              </li>
            </ul>
          </div>
        </MDBCard>
      </MDBCol>
  )
}

export default Cards;
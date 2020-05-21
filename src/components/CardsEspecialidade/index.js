import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const CardsEspecialidade = ({title}) => {
  return (
    <MDBRow>
    <MDBCol className="hoverCards">
      <MDBCard
        className='card-image'
        style={{
          backgroundImage:
            "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
        }}
      >
        <div className='text-white text-center align-items-center rgba-black-strong py-5 px-4'>
          <div>
            <MDBCardTitle tag='h3' className='pt-2'>
              <strong>{title}</strong>
            </MDBCardTitle>
           
            <MDBBtn color='orange'>
              <MDBIcon icon='clone left' /> VER MAIS
            </MDBBtn>
          </div>
        </div>
      </MDBCard>
    </MDBCol>
  </MDBRow>
  )
}

export default CardsEspecialidade;
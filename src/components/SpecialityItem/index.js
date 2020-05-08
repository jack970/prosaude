import React from "react";
import { MDBRow, MDBCol } from "mdbreact";

const SpecialityItem = ({ doctor, clinic, speciality, address, tel, description}) => {
  return (
        <MDBRow className="pb-5">
          <MDBCol lg="7" xl="8">
            <h3 className="font-weight-bold mb-3 p-0">
              <p>Clínica: {clinic}</p>
            </h3>
            <h5 className='mb-3 p-0'>
              <p>Especialidade: {speciality}</p>
                Doutor: {doctor}
            </h5>
            <p className="dark-grey-text">
              {description}
            </p>
            <p>
              Telefone: <a href="#!" className="font-weight-bold">{tel}</a><br/>Endereço: {address}
            </p>
          </MDBCol>
        </MDBRow>
  )
}

export default SpecialityItem;
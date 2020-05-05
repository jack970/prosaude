import React from "react";
import { MDBRow, MDBCol, MDBMask, MDBView, MDBBtn } from "mdbreact";
import { Link } from 'gatsby'

const PostItem = ({ title, thumbnail, description, date, slug}) => {
  return (
        <MDBRow className="pb-5">
          <MDBCol lg="5" xl="4">
            <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                <img
                    className="img-fluid"
                    src={thumbnail}
                    alt=""
                />
                <Link to={slug}>
                    <MDBMask overlay="white-slight" />
                </Link>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7" xl="8">
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>{title}</strong>
            </h3>
            <p>
                {date}
            </p>
            <p className="dark-grey-text">
              {description}
            </p>
            <Link to={slug} >
              <MDBBtn className="btn btn-blue btn-rounded btn-md waves-effect waves-light" size="md">
                Ler Mais
              </MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
  )
}

export default PostItem;
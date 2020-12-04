import React from "react"
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact"

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={1}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="http://www.campogrande.ms.gov.br/impcg/wp-content/uploads/2017/11/campogrande-drone-1.jpg"
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <p>First text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  )
}

export default CarouselPage

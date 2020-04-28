import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from
"mdbreact";

const SectionPage = () => {
  return (
      <MDBCarousel
        activeItem={1}
        length={1}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
        style={{borderTop: '5px solid #f5d400', borderBottom: '6px solid #e2e2e2', marginBottom: '5rem'}}
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100 h-30"
                src="http://www.campogrande.ms.gov.br/impcg/wp-content/uploads/2017/11/campogrande-drone-1.jpg"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
  );
}

export default SectionPage;
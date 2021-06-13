import React from "react";
import { OurServicesStyled } from "../../styles/pages";
import { NavLink } from "react-router-dom";
function OurServices({ data }) {
  return (
    <OurServicesStyled>
      <div className='container'>
        <h1>خدماتنا</h1>
        <div className='row mb-4'>
          {data &&
            data[0].services.map((item) => (
              <div
                className='col-sm-12 col-md-6 col-lg-3 position-relative mb-4'
                key={item.id}
              >
                <NavLink to={{ pathname: "/sac-ekimi" }}>
                  <div className='img-hover-zoom'>
                    <img
                      src={
                        process.env.REACT_APP_API_URL + item.service_image.url
                      }
                      alt='saçekimi'
                    />
                    <h6>{item.service_title}</h6>
                    <div className='overlay'></div>
                  </div>
                </NavLink>
              </div>
            ))}
        </div>
      </div>
    </OurServicesStyled>
  );
}

export default OurServices;

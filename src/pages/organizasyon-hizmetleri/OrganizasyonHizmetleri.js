import React, { useContext, useEffect } from "react";
import { OrganizasyonHizmetleriStyled } from "../../styles/pages";
import DataContext from "../../context/dataContext";
import Markdown from "markdown-to-jsx";

const OrganizasyonHizmetleri = () => {
  const dataContext = useContext(DataContext);
  const { openHandleState, getOrganizations, organizationsState } = dataContext;

  useEffect(() => {
    getOrganizations();
    // eslint-disable-next-line
  }, []);
  return (
    <OrganizasyonHizmetleriStyled>
      <div
        className='masthead'
        style={{
          backgroundImage:
            organizationsState &&
            `url(${
              process.env.REACT_APP_API_URL +
              organizationsState[0]?.header_image?.url
            })`,
        }}
      >
        <h1>{organizationsState && organizationsState[0]?.header_title}</h1>
      </div>

      <div className='content'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-right'>
              <h4>{organizationsState && organizationsState[0]?.motto}</h4>
            </div>
          </div>
        </div>

        <div className='organization-images'>
          <div className='container'>
            <div className='row '>
              {organizationsState &&
                organizationsState[0]?.images.map((item) => (
                  <div className='col-sm-12 col-md-6 col-lg-3'>
                    <img
                      src={process.env.REACT_APP_API_URL + item?.image?.url}
                      alt='güzellik merkezi'
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className='container text-right'>
          {organizationsState && organizationsState[0]?.descrption && (
            <Markdown className='desc'>
              {organizationsState && organizationsState[0]?.descrption}
            </Markdown>
          )}
          <button
            className='appointment-button'
            onClick={() => openHandleState("block")}
          >
            احصل على موعد
          </button>
        </div>
      </div>
    </OrganizasyonHizmetleriStyled>
  );
};

export default OrganizasyonHizmetleri;

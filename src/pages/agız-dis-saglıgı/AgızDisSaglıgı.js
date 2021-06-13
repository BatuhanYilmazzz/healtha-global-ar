import React, { useContext, useEffect } from "react";
import { AgızDisSaglıgıStyled } from "../../styles/pages";
import DataContext from "../../context/dataContext";
import Markdown from "markdown-to-jsx";

function AgızDisSaglıgı() {
  const dataContext = useContext(DataContext);
  const { openHandleState, getAgızDis, agızVeDisState } = dataContext;

  useEffect(() => {
    getAgızDis();
    // eslint-disable-next-line
  }, []);
  return (
    <AgızDisSaglıgıStyled>
      <div
        className='masthead'
        style={{
          backgroundImage:
            agızVeDisState &&
            `url(${
              process.env.REACT_APP_API_URL +
              agızVeDisState[0]?.header_image?.url
            })`,
        }}
      >
        <h1>{agızVeDisState && agızVeDisState[0].header_title}</h1>
      </div>
      <div className='row'>
        <div className='col-12 content'>
          <div className='container'>
            <p className='comment'>
              {agızVeDisState && agızVeDisState[0]?.main_part.description && (
                <Markdown>{agızVeDisState[0]?.main_part.description}</Markdown>
              )}
            </p>
            <div className='row'>
              <div className='col-sm-12 col-md-6'>
                {agızVeDisState && agızVeDisState[0]?.main_part?.img_1 && (
                  <img
                    className='w-100'
                    src={
                      process.env.REACT_APP_API_URL +
                      agızVeDisState[0]?.main_part?.img_1.url
                    }
                    alt=''
                  />
                )}
                {agızVeDisState && agızVeDisState[0]?.main_part?.img_2 && (
                  <img
                    className='w-100'
                    src={
                      process.env.REACT_APP_API_URL +
                      agızVeDisState[0]?.main_part?.img_2.url
                    }
                    alt=''
                  />
                )}
              </div>
              <div className='col-sm-12 col-md-6'>
                <ul>
                  <ul>
                    {agızVeDisState && agızVeDisState[0]?.main_part.topics && (
                      <Markdown>{agızVeDisState[0]?.main_part.topics}</Markdown>
                    )}
                  </ul>
                </ul>
                <button
                  className='appointment-button'
                  onClick={() => openHandleState("block")}
                >
                  احصل على موعد
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AgızDisSaglıgıStyled>
  );
}

export default AgızDisSaglıgı;

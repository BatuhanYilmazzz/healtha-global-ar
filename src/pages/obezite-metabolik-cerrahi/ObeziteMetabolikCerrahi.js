import React, { useContext, useEffect } from "react";
import { ObeziteMetabolikCerrahiStyled } from "../../styles/pages";
import DataContext from "../../context/dataContext";
import Markdown from "markdown-to-jsx";

function ObeziteMetabolikCerrahi() {
  const dataContext = useContext(DataContext);
  const { openHandleState, getObeziteMetabolikCer, obeziteMetabolikCerState } =
    dataContext;

  useEffect(() => {
    getObeziteMetabolikCer();
    // eslint-disable-next-line
  }, []);
  return (
    <ObeziteMetabolikCerrahiStyled>
      <div
        className='masthead'
        style={{
          backgroundImage:
            obeziteMetabolikCerState &&
            `url(${
              process.env.REACT_APP_API_URL +
              obeziteMetabolikCerState[0]?.header_image?.url
            })`,
        }}
      >
        <h1>
          {obeziteMetabolikCerState && obeziteMetabolikCerState[0].header_title}
        </h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col content'>
            <p className='comment'>
              {obeziteMetabolikCerState &&
                obeziteMetabolikCerState[0]?.main_part.description && (
                  <Markdown>
                    {obeziteMetabolikCerState[0]?.main_part.description}
                  </Markdown>
                )}
            </p>
            <div className='row'>
              <div className='col-sm-12 col-md-6'>
                {obeziteMetabolikCerState &&
                  obeziteMetabolikCerState[0]?.main_part?.img_1 && (
                    <img
                      className='w-100'
                      src={
                        process.env.REACT_APP_API_URL +
                        obeziteMetabolikCerState[0]?.main_part?.img_1.url
                      }
                      alt=''
                    />
                  )}
                {obeziteMetabolikCerState &&
                  obeziteMetabolikCerState[0]?.main_part?.img_2 && (
                    <img
                      className='w-100'
                      src={
                        process.env.REACT_APP_API_URL +
                        obeziteMetabolikCerState[0]?.main_part?.img_2.url
                      }
                      alt=''
                    />
                  )}
              </div>
              <div className='col-sm-12 col-md-6'>
                <ul>
                  {obeziteMetabolikCerState &&
                    obeziteMetabolikCerState[0]?.main_part.topics && (
                      <Markdown>
                        {obeziteMetabolikCerState[0]?.main_part.topics}
                      </Markdown>
                    )}
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
    </ObeziteMetabolikCerrahiStyled>
  );
}

export default ObeziteMetabolikCerrahi;

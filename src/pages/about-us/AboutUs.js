import React, { useContext, useEffect } from "react";
import { AboutUsStyled } from "../../styles/pages";
import DataContext from "../../context/dataContext";
import Markdown from "markdown-to-jsx";

function AboutUs() {
  const dataContext = useContext(DataContext);
  const { getHakkımızda, hakkımızdaState } = dataContext;

  useEffect(() => {
    getHakkımızda();
    // eslint-disable-next-line
  }, []);

  return (
    <AboutUsStyled>
      <div
        className='masthead'
        style={{
          backgroundImage:
            hakkımızdaState &&
            `url(${
              process.env.REACT_APP_API_URL +
              hakkımızdaState[0]?.header_image?.url
            })`,
        }}
      >
        <h1>{hakkımızdaState && hakkımızdaState[0].header_title}</h1>
      </div>
      <div className='container'>
        {hakkımızdaState && hakkımızdaState[0]?.description && (
          <Markdown>{hakkımızdaState[0]?.description}</Markdown>
        )}
      </div>
    </AboutUsStyled>
  );
}

export default AboutUs;

import React, { Fragment, useState, useEffect, useContext } from "react";
import Lightbox from "react-image-lightbox";
import DataContext from "../../context/dataContext";
import "react-image-lightbox/style.css";

///
const Gallery = () => {
  const dataContext = useContext(DataContext);
  const { getGaleri, galeriState } = dataContext;

  useEffect(() => {
    getGaleri();
    // eslint-disable-next-line
  }, []);

  const swiperimages =
    galeriState &&
    galeriState[0].gallery_images.map(
      (item) => process.env.REACT_APP_API_URL + item?.image?.url
    );
  // images && images.map((e) => process.env.REACT_APP_API_URL + e.url);
  const [state, setState] = useState({
    photoIndex: 0,
    isOpen: false,
  });
  const { photoIndex, isOpen } = state;
  return (
    <Fragment>
      <div
        className='masthead'
        style={{
          backgroundImage:
            galeriState &&
            `url(${
              process.env.REACT_APP_API_URL + galeriState[0]?.header_image?.url
            })`,
        }}
      >
        <h1> {galeriState && galeriState[0].header_title}</h1>
      </div>
      <div className='gallery'>
        <div className='content'>
          <div className='container'>
            <div className='row'>
              {swiperimages &&
                swiperimages.map((item, index) => (
                  <div className='col-sm-12 col-md-6 col-lg-3 mb-4' key={index}>
                    <img
                      src={item}
                      alt={item}
                      onClick={() =>
                        setState({ photoIndex: index, isOpen: true })
                      }
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={swiperimages[photoIndex]}
            nextSrc={swiperimages[(photoIndex + 1) % swiperimages.length]}
            prevSrc={
              swiperimages[
                (photoIndex + swiperimages.length - 1) % swiperimages.length
              ]
            }
            onCloseRequest={() => setState({ ...state, isOpen: false })}
            onMovePrevRequest={() =>
              setState({
                ...state,
                photoIndex:
                  (photoIndex + swiperimages.length - 1) % swiperimages.length,
              })
            }
            onMoveNextRequest={() =>
              setState({
                ...state,
                photoIndex: (photoIndex + 1) % swiperimages.length,
              })
            }
          />
        )}
      </div>
    </Fragment>
  );
};

export default Gallery;

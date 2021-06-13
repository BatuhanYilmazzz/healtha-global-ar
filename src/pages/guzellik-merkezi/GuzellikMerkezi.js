import React, { useContext, useEffect } from "react";
import { GuzellikMerkeziStyled } from "../../styles/pages";
import DataContext from "../../context/dataContext";

function GuzellikMerkezi() {
  const dataContext = useContext(DataContext);
  const { openHandleState, guzellikMerkeziState, getGuzellikMerkezi } =
    dataContext;

  useEffect(() => {
    getGuzellikMerkezi();
    // eslint-disable-next-line
  }, []);
  return (
    <GuzellikMerkeziStyled>
      <div
        className='masthead'
        style={{
          backgroundImage:
            guzellikMerkeziState &&
            `url(${
              process.env.REACT_APP_API_URL +
              guzellikMerkeziState[0]?.header_image?.url
            })`,
        }}
      >
        <h1>{guzellikMerkeziState && guzellikMerkeziState[0].header_title}</h1>
      </div>

      <div className='content'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <ul>
                <li>الحد الأدنى للرموش</li>
                <li>تشكيل الحجاب</li>
                <li>ميزوثيرابي الحجاب</li>
                <li>الميكروبلايدينك للحاجب</li>
              </ul>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <ul>
                <li>رموش حريرية</li>
                <li>رفع الرموش</li>
                <li>العناية بالبشرة</li>
                <li>(العناية بالبشرة (علاجات الرفع</li>
              </ul>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <ul>
                <li>إزالة الشعر بالليزر</li>
                <li>معاجين التخسيس</li>
                <li>( التدليك (العلاج بالروائح</li>
                <li>مكياج محترف</li>
              </ul>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <ul>
                <li>ماكياج الزفاف</li>
                <li>تقليم الاظافر</li>
                <li>تجميل الاقدام</li>
                <li>برامج التخلص من السموم</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='güzellik-images'>
          <div className='container'>
            <div className='row '>
              {guzellikMerkeziState &&
                guzellikMerkeziState[0].beauty_photos.map((item) => (
                  <div className='col-sm-12 col-md-6 col-lg-3'>
                    <img
                      src={process.env.REACT_APP_API_URL + item.image.url}
                      alt='güzellik merkezi'
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className='container'>
          <button
            className='appointment-button'
            onClick={() => openHandleState("block")}
          >
            احصل على موعد
          </button>
        </div>
      </div>
    </GuzellikMerkeziStyled>
  );
}

export default GuzellikMerkezi;

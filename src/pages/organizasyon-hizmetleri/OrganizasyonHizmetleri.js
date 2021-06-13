import React, { useContext } from 'react';
import { OrganizasyonHizmetleriStyled } from '../../styles/pages';
import DataContext from '../../context/dataContext';

const OrganizasyonHizmetleri = () => {
  const dataContext = useContext(DataContext);
  const { openHandleState } = dataContext;
  return (
    <OrganizasyonHizmetleriStyled>
      <div
        className='masthead'
        style={{
          backgroundImage: `url(/images/organizasyon-hizmetleri/organizasyonhizmetleri.jpg)`,
        }}
      >
        <h1>(خدمات إضافية (خدمات التنظيم</h1>
      </div>

      <div className='content'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-right'>
              <h4>
                .نحن نخطط لجميع العمليات قبل العلاج وأثنائه وبعده بطريقة صحية
              </h4>
            </div>
          </div>
        </div>

        <div className='organization-images'>
          <div className='container'>
            <div className='row '>
              <div className='col-sm-12 col-md-6 col-lg-3'>
                <img
                  src='/images/organizasyon-hizmetleri/organizasyonhizmetleri1.jpg'
                  alt='güzellik merkezi'
                />
              </div>
              <div className='col-sm-12 col-md-6 col-lg-3'>
                <img
                  src='/images/organizasyon-hizmetleri/organizasyonhizmetleri2.jpg'
                  alt='güzellik merkezi'
                />
              </div>
              <div className='col-sm-12 col-md-6 col-lg-3'>
                <img
                  src='/images/organizasyon-hizmetleri/organizasyonhizmetleri3.jpg'
                  alt='güzellik merkezi'
                />
              </div>
              <div className='col-sm-12 col-md-6 col-lg-3'>
                <img
                  src='/images/organizasyon-hizmetleri/organizasyonhizmetleri4.jpg'
                  alt='güzellik merkezi'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='container text-right'>
          <p>
            ننا نود أن نحافظ على الروح المعنوية عالية لكل مريض يثق بنا، لذا نقوم
            عادة بالتخطيط لجميع المراحل سواء كانت ما قبل العلاج أوما بعده بحرص
            فائق يمائل دقة الجراح.
          </p>
          <p>
            نقوم بإجراء الاستشارات الطبية من أجل مرضانا مع أطباء متخصصين وفي
            مستشفيات من الدرجة الأولى. كما نوفر النقل لهم وأقاربهم في سيارات
            مريحة مخصصة لكبار الشخصيات منذ لحظة وصولهم، ليشعروا بالراحة بعد عناء
            السفر، ونستضيفهم في فنادق من 3 إلى 5 نجوم. أما عقب العلاج فنقدم خدمة
            استشارية مجانية على مدار الساعة طوال أيام الأسبوع ولمدة عام واحد.
          </p>
          <button
            className='appointment-button'
            onClick={() => openHandleState('block')}
          >
            احصل على موعد
          </button>
        </div>
      </div>
    </OrganizasyonHizmetleriStyled>
  );
};

export default OrganizasyonHizmetleri;

import styled from "styled-components";

/****************** HOMEPAGE STYLES********************/
export const HomePageStyled = styled.div``;

export const HeaderStyled = styled.div`
  margin-top: -230px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  min-width: 100vw;
  background-image: url("/images/homepage/header.jpg");
  direction: rtl;
  @media (max-width: 768px) {
    margin-top: 0;
    text-align: center;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 110vh;
    @media (max-width: 768px) {
      min-height: 90vh;
    }
    color: #fff;
    .title {
      font-size: 2rem;
      margin-top: 8rem;
    }
    .description {
      font-size: 1.25rem;
      max-width: 600px;
      margin: 2rem auto;
      text-align: center;
    }
    button {
      border: 2px solid #fff;
      font-size: 1.1rem;
      margin-top: 2rem;
      padding: 0.7rem 5rem;
      color: #fff;
      background-color: transparent;
      border-radius: 60px;
      transition: all 0.3s ease;
      outline: none;
      &:hover {
        border-color: #47b9bb;
        background-color: #47b9bb;
      }
    }
  }
`;
export const WhyAksanHealtStyled = styled.div`
  padding: 14.5rem 0 12rem 0;
  text-align: center;
  @media (max-width: 600px) {
    padding: 6rem 0 4rem 0;
  }
  h1 {
    font-size: 2.5rem;
    color: #47b9bb;
    margin-bottom: 3rem;
  }
  p {
    font-size: 1.25rem;
    color: #818386;
  }
`;
export const WhyTurkeyStyled = styled.div`
  padding: 10rem 0 8rem 0;
  background-origin: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;

  @media (max-width: 600px) {
    padding: 6rem 0 4rem 0;
  }
  h1 {
    font-size: 2.5rem;
    color: #47b9bb;
    margin-bottom: 3rem;
    direction: rtl;
  }
  h3 {
    font-size: 2rem;
    color: #818386;
    direction: rtl;
    margin-bottom: 3rem;
  }
  p {
    font-size: 1.25rem;
    color: #818386;
    margin-bottom: 2.5rem;
    direction: rtl;
  }
`;

export const OurServicesStyled = styled.div`
  text-align: center;
  background-color: #47b9bb;
  padding: 8rem 0;
  z-index: 2;
  margin-top: -1.5rem;
  position: relative;
  .services {
    max-width: 310px;
    width: 100%;
    height: 310px;
    height: 100%;
  }
  h1 {
    margin-bottom: 3rem;
    color: #fff;
    font-size: 2rem;
  }
  h6 {
    max-width: 230px;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    font-size: 2rem;
    color: #fff;
    margin: auto;
    text-align: center;
    font-size: 1.25rem;
    line-height: 2rem;
  }

  img {
    width: 100%;
    margin: 0.5rem auto;
  }
  .row {
    text-align: center;
  }
  .img-hover-zoom {
    height: 300px; /* [1.1] Set it as per your need */
    overflow: hidden; /* [1.2] Hide the overflowing of child elements */
    @media (max-width: 420px) {
      height: 150px;
    }
  }
  .img-hover-zoom:hover .overlay {
    opacity: 0.2;
  }
  .overlay {
    z-index: 5;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #47b9bb;
    margin-right: -15px;
    margin-left: -15px;
  }
  /* [2] Transition property for smooth transformation of images */
  .img-hover-zoom img {
    transition: transform 0.5s ease;
  }

  /* [3] Finally, transforming the image when container gets hovered */
  .img-hover-zoom:hover img {
    transform: scale(1.2);
  }
`;
export const ConsultancyStyled = styled.div`
  background-image: url("/images/homepage/form.jpg");
  background-origin: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 6rem 0 8rem 0;
  margin-top: -2rem;
  text-align: center;

  button {
    border: 2px solid #fff;
    font-size: 1.1rem;
    margin-top: 2rem;
    padding: 0.7rem 5rem;
    color: #fff;
    background-color: transparent;
    border-radius: 60px;
    transition: all 0.3s ease;
    outline: none;
    &:hover {
      border-color: #47b9bb;
      background-color: #47b9bb;
    }
  }
  h1 {
    max-width: 700px;
    color: #fff;
    font-size: 2rem;
    margin: 3rem auto;
    line-height: 4rem;
  }
  input,
  textarea {
    display: block;
    width: 100%;
    max-width: 850px;
    margin: 3rem auto;
    border: none;
    padding: 1rem 0;
    color: #fff;
    background-color: transparent;
    border-bottom: 1px solid #fff;
    &::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #fff;
    }
    &::placeholder {
      color: #fff !important;
    }
  }
  button {
    border: 2px solid #fff;
    font-size: 1.1rem;
    margin-top: 2rem;
    padding: 0.7rem 5rem;
    color: #fff;
    background-color: transparent;
    border-radius: 60px;
    transition: all 0.3s ease;
    outline: none;
    &:hover {
      border-color: #47b9bb;
      background-color: #47b9bb;
    }
  }
`;
export const TestimonialsStyled = styled.div`
  margin: 2rem auto;
  padding: 6rem 1rem;

  h1 {
    margin-bottom: 5rem;
  }
  .slider-item {
    padding: 3rem;
  }
  .slick-dots {
    bottom: -50px !important;
  }
  .slick-dots li button:before {
    font-size: 12px;
  }
  .aligment {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 5rem;
    img {
      margin-left: 1rem;
    }
  }
`;
/****************** ABOUTUS STYLES********************/

export const AboutUsStyled = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  text-align: center;
  padding-bottom: 3rem;

  h1 {
    font-size: 2rem;
    color: #47b9bb;
  }
  p {
    color: #818386;
    font-size: 1.1rem;
    margin: 4rem auto;
    direction: rtl;
  }
`;
/****************** CONTACTUS STYLES********************/

export const ContactUsStyled = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  text-align: center;
  padding-bottom: 3rem;
  text-align: left;
  .contact {
    p {
      margin-bottom: 3rem;
      color: #818386;
      direction: rtl;
    }
    h1 {
      color: #47b9bb;
      font-size: 2rem;
    }
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  .map {
    p {
      color: #818386;
      @media (max-width: 768px) {
        max-width: 300px;
        margin: 2rem auto;
      }
    }
    @media (max-width: 768px) {
      text-align: center;
      padding: 3rem 0;
    }
  }
  input,
  textarea {
    padding: 0.5rem 0;
    width: 100%;
    display: block;
    margin-bottom: 2rem;
    border: none;
    color: #000;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }
`;
/****************** OBEZITE VE METABOLIK CERRAHI STYLES********************/

export const ObeziteMetabolikCerrahiStyled = styled.div`
  direction: rtl;
  text-align: right;
  @media (max-width: 768px) {
    text-align: center;
    img {
      margin-bottom: 1.5rem;
    }
  }
  ul {
    @media (max-width: 768px) {
      padding-top: 1rem;
    }
    li {
      font-size: 1.1rem;
      color: #47b9bb;
      margin-bottom: 2rem;
    }
  }
  p {
    color: #818386;
    margin-bottom: 4rem;
    font-size: 1.1rem;
    direction: rtl;
  }
`;
/****************** AGIZ VE DİŞ SAĞLIĞI STYLES********************/

export const AgızDisSaglıgıStyled = styled.div`
  direction: rtl;
  text-align: right;
  @media (max-width: 768px) {
    text-align: center;
    img {
      margin-bottom: 1.5rem;
    }
  }
  ul {
    @media (max-width: 768px) {
      padding-top: 1rem;
    }
    li {
      font-size: 1.1rem;
      color: #47b9bb;
      margin-bottom: 2rem;
    }
  }
  p {
    margin-bottom: 3rem;
    color: #818386;
    font-size: 1.1rem;
  }
`;
/****************** KULAK BURUN BOĞAZ STYLES********************/

export const KbbStyled = styled.div`
  text-align: right;
  @media (max-width: 768px) {
    text-align: center;
    img {
      margin-bottom: 1.5rem;
    }
  }
  ul {
    li {
      font-size: 1.1rem;
      color: #47b9bb;
      margin-bottom: 2rem;
    }
  }
`;
/****************** GÜZELLIK MERKEZI STYLES********************/

export const GuzellikMerkeziStyled = styled.div`
  text-align: right;
  @media (max-width: 768px) {
    text-align: center;
  }
  ul {
    li {
      font-size: 1.1rem;
      color: #47b9bb;
      margin-bottom: 2rem;
    }
  }
  .güzellik-images {
    padding: 5rem 0;
    background-color: #f2f2f2;
    margin: 2rem auto;
    img {
      margin-bottom: 1rem;
    }
  }
`;
/****************** ORGANIZASYON HIZMETLERI STYLES********************/

export const OrganizasyonHizmetleriStyled = styled.div`
  p {
    direction: rtl;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
  h4 {
    font-size: 1.1rem;
    color: #47b9bb;
    margin-bottom: 2rem;
    direction: rtl;
  }

  .organization-images {
    padding: 5rem 0;
    background-color: #f2f2f2;
    margin: 2rem auto;
    img {
      max-width: 100%;
      @media (max-width: 768px) {
        margin-bottom: 2rem;
      }
    }
  }
  p {
    color: #818386;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`;
/****************** SAC EKIMI STYLES********************/

export const SacEkimiStyled = styled.div`
  text-align: right;
  @media (max-width: 768px) {
    text-align: center;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 3rem;
    color: #47b9bb;
  }
  p {
    margin-bottom: 3rem;
    color: #818386;
    font-size: 1.1rem;
  }
  img {
    margin-bottom: 2rem;
  }
  .organic-hair {
    background-color: #47b9bb;
    padding: 3rem 2rem;
    margin-bottom: 2rem;
    h5 {
      color: #fff;
      margin-bottom: 3rem;
      direction: rtl;
    }
    p {
      color: #fff;
      font-size: 1.1rem;
      line-height: 2.5rem;
      color: #818386;
      direction: rtl;
    }
  }
`;
/****************** GÖZ SAGLIGI VE ESTETİĞİ STYLES********************/

export const GozSaglıgıStyled = styled.div`
  text-align: right;
  @media (max-width: 768px) {
    text-align: center;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 3rem;
    color: #47b9bb;
  }
  p {
    margin-bottom: 3rem;
    color: #818386;
    font-size: 1.1rem;
    direction: rtl;
  }
  img {
    margin-bottom: 2rem;
  }
`;
/****************** ESTETIK PLASTIK CERRAHI STYLES********************/

export const EstetikPlastikCerrahiStyled = styled.div`
  text-align: right;
  @media (max-width: 768px) {
    text-align: center;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 3rem;
    color: #47b9bb;
  }
  p {
    margin-bottom: 3rem;
    color: #818386;
    font-size: 1.1rem;
    direction: rtl;
  }
  img {
    margin-bottom: 2rem;
  }
`;

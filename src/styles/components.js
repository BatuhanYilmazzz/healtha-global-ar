import styled from "styled-components";

export const NavbarStyled = styled.div`
  direction: rtl;
  position: sticky !important;
  top: -2px;
  right: 0;
  left: 0;
  z-index: 999;
  background-color: transparent;
  padding: 0 !important;
  text-align: right;
  @media (max-width: 768px) {
    position: fixed !important;
    background-color: #fff;
  }
  .navbar {
    padding: 0 !important;
    @media (max-width: 768px) {
      padding: 0.5rem 1rem !important;
      border-bottom: 1px solid #eaeaea;
    }
  }
  .navbar-animate {
    padding-bottom: 0.8rem;
    @media (max-width: 768px) {
      padding-bottom: 0;
    }
  }
  .navbar-nav {
    @media (max-width: 768px) {
      height: 100vh;
    }
  }
  .dropdown-toggle::after {
    margin-right: 0.5rem !important;
  }
  .navbar-brand {
    fill: #fff;
    width: 15rem;
    margin-right: 0 !important;
    @media (max-width: 768px) {
      text-align: right;
      fill: #47b9bb;
    }
    svg {
      @media (max-width: 768px) {
        width: 10rem;
      }
    }
  }
  .navbar-collapse {
    padding-top: 1.5rem;
  }
  .navbar-nav .dropdown-menu {
    background-color: rgba(71, 185, 187, 0.8);
    border: none;
    border-radius: 0;
    margin-top: 2.55rem;
    min-width: 20rem !important;
    left: -50% !important;
    .show {
      border-bottom: 1px solid #fff;
    }
    @media (max-width: 768px) {
      color: #47b9bb;
      margin-top: 0;
      text-align: left;
      margin-bottom: 1rem;
      background-color: #fff;
    }
    .dropdown-item {
      margin-bottom: 0.7rem;
      padding: 0.5rem 1rem;
      @media (max-width: 768px) {
        color: #818386;
        margin: 0 auto;
        padding: 0.2rem 1rem;
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.3) !important;
        color: #fff !important;
        border: none !important;
      }
    }
  }

  .navbar-toggler-icon {
    color: #47b9bb;
  }
  .active {
    background-color: transparent !important;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #eaeaea;
    @media (max-width: 768px) {
      color: #47b9bb;
    }
  }

  .nav-link {
    padding: 0 0.3rem !important;
    font-size: 0.8rem;
    border-left: 1px solid #eaeaea;
    text-align: right;
    text-transform: capitalize;
    @media (max-width: 768px) {
      color: #47b9bb;
      margin: 0.8rem auto;
      border: none;
      font-size: 1.3rem;
    }
  }
  .dropdown-item {
    color: #eaeaea;
    padding: 0.2rem 0.2rem 0 0.5rem;
    text-align: right;
  }
  a {
    padding-right: 0.5rem;
    color: #eaeaea;
    font-size: 0.9rem;
  }
  .navbar-mobile-social {
    padding-left: 0.5rem;
    svg {
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }
  }
  .mobile-nav-social {
    margin-top: 0.7rem;
    margin-bottom: 0.7rem;
    button,
    a {
      border: none;
      color: #47b9bb;
      margin-left: 1.5rem;
      font-size: 1.3rem;
      background-color: transparent;
    }
  }
`;
export const NavbarSocialStyled = styled.div`
  text-align: left;
  padding: 0 0.5rem 0 0.5rem;
  position: relative;
  z-index: 999;
  background-color: transparent;
  color: #eaeaea;
  font-size: 5px;
  @media (max-width: 768px) {
    display: none;
  }

  .langactive {
    font-weight: bold;
  }
  .header-icon {
    color: #eaeaea;
    transition: all 0.3s ease;
    &:hover {
      color: #47b9bb !important;
    }
  }
  a {
    margin-left: 1rem;
    color: #eaeaea;
    font-size: 0.9rem;
  }
  button,
  a {
    outline: none;
    margin-left: 0.5rem;
    border: none;
    color: #eaeaea;
    font-size: 1.1rem;
    background-color: transparent;
  }
`;

export const FooterStyled = styled.div`
  padding: 5rem 0;
  background-color: #818386;
  .row {
    padding-bottom: 4rem;
  }

  input {
    width: 20.5rem;
    height: 3rem;
    border: 1px solid #fff;
    padding: 1rem;
    background-color: transparent;
    outline: none;
    text-align: center;
    &::placeholder {
      color: #fff;
    }
    &:focus {
      outline: none;
    }

    @media (max-width: 420px) {
      max-width: 25rem;
      width: 100%;
      margin-top: 0.7rem auto 0 auto;
      text-align: center;
    }
  }
  button {
    background: #fff;
    color: #47b9bb;
    width: 10rem;
    height: 3rem;
    font-size: 0.8rem;
    border: 1px solid #fff;
    text-align: center;
    @media (max-width: 420px) {
      max-width: 25rem;
      width: 100%;
      margin-top: 0.7rem;
      margin-bottom: 2rem;
    }
  }
  button:hover {
    background-color: #eaeaea;
  }

  ul {
    list-style-type: none;
    li {
      font-size: 0.8rem;
      margin-bottom: 1rem;
      color: #fff;
      @media (max-width: 420px) {
        text-align: center;
        margin-bottom: 2.5rem;
        max-width: 15rem;
        margin: 2.5rem auto;
      }
    }
  }

  .footer__links {
    text-align: right;
    max-width: 250px;
    margin-left: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    svg {
      font-size: 25px;
      transition: all 0.2s ease-in;
      &:hover {
        color: #47b9bb;
      }
    }
    @media (max-width: 600px) {
      text-align: center;
      max-width: 300px;
      margin: auto;
    }
  }
  .footer__kvkk {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
    flex-direction: row-reverse;
    border-top: 1px solid #fff;
    @media (max-width: 420px) {
      display: block;
      text-align: center;
      flex-direction: row;
      padding: 0.3rem 0;
      margin: 0 1rem;
    }
    a {
      text-decoration: none;
      color: #fff !important;
      font-weight: bold;
      @media (max-width: 420px) {
        display: block;
        margin: 1rem 0;
      }
    }
    p {
      margin-bottom: 0;
      color: #fff !important;
    }
  }
`;
export const SpinnerStyled = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ContactFormStyled = styled.div`
  transition: all 0.2s ease;
  position: fixed;
  left: 0;
  top: 220px;
  overflow: hidden;
  z-index: 10;
  @media (max-width: 768px) {
    top: 150px;
  }
  p {
    margin-bottom: 0 !important;
    display: none;
    opacity: 0;
    margin-left: 1rem;
    font-size: 15px;
    letter-spacing: 1px;
  }
  img {
    transition: all 0.5s ease;
  }
  .contact-form-icon {
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    width: 80px;
    height: 76px;
    background-color: #47b9bb;
    border: none;
    color: #fff;
    padding: 1rem 0.5rem;
    @media (max-width: 768px) {
      padding: 1rem 0.1rem 1rem 0.5rem;
      width: 55px;
      height: 56px;
      img {
        max-width: 2rem;
      }
    }
    &:hover {
      width: 200px;
      img {
        transform: scale(0.8);
      }
      p {
        display: block;
        opacity: 1;
        margin-right: 0.5rem;
      }
    }
  }
`;
export const ContactFormBodyStyled = styled.div`
  animation: formScale 0.3s ease-in-out;
  transition: all 0.3s ease-in;
  padding-top: 10rem;
  background-image: url("/images/appointform.png");
  background-origin: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  @media (max-width: 768px) {
    padding: 6rem 2rem 2rem 2rem;
  }
  h1 {
    text-align: center;
    color: #fff;
  }
  .close-button {
    position: fixed;
    left: 10px;
    top: 20px;
    padding: 1.5rem 1.7rem;
    border: 1px solid #fff;
    color: #47b9bb;
    background-color: #fff;
    @media (max-width: 768px) {
      padding: 1rem 1.2rem;
    }
  }
  .messages {
    display: inline-block !important;
    width: unset !important;
    max-width: 20px !important;
    margin: 1rem !important;
  }
  .messages-wrapper {
    color: #fff;
    display: block;
    align-items: center;
    justify-content: flex-start;
    max-width: 850px;
    margin: 1rem auto;
  }
  input {
    display: block;
    width: 100%;
    max-width: 850px;
    margin: 3rem auto;
    border: none;
    color: #fff !important;
    padding: 1rem 0;
    background-color: transparent;
    border-bottom: 1px solid #fff;
    &::placeholder {
      color: #fff !important;
    }
  }
  .contact-us {
    display: block;
    border: 2px solid #fff;
    font-size: 1.1rem;
    padding: 1rem 5rem;
    background-color: transparent;
    border-radius: 50px;
    color: #fff;
    transition: all 0.3s ease-in;
    margin: 3rem auto 2rem auto;
    @media (max-width: 768px) {
      padding: 0.7rem 3rem;
    }
    &:hover {
      background-color: #47b9bb;
      color: #fff;
    }
  }
  @keyframes formScale {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;
export const WhatsappStyled = styled.a`
  position: fixed;
  left: 0;
  bottom: 10px;
  z-index: 99;
  width: 6rem;
  @media (max-width: 768px) {
    width: 5rem;
    right: 2px;
    bottom: 20px;
  }
`;

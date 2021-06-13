import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarStyled } from "../styles/components";
import { handleScroll } from "../animations/animation";
import EventListener, { withOptions } from "react-event-listener";
import NavbarSocial from "./NavbarSocial";
import Brand from "./Brand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import $ from "jquery";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  $(function () {
    var navMain = $(".navbar-collapse");

    navMain.on("click", "a", null, function () {
      navMain.collapse("hide");
    });
  });
  return (
    <NavbarStyled>
      <EventListener
        target='window'
        onScroll={withOptions(handleScroll, {
          passive: true,
          capture: false,
        })}
      />
      <div className='navbar-animate'>
        <NavbarSocial />
        <div className='container'>
          <nav className='navbar navbar-expand-lg'>
            <NavLink className='navbar-brand' to='/'>
              <Brand />
            </NavLink>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <FontAwesomeIcon icon={faBars} color='#47b9bb' />
            </button>

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item dropdown'>
                  <NavLink className='nav-link' to='/sac-ekimi'>
                    زراعة الشعر
                  </NavLink>
                </li>
                <li className='nav-item dropdown'>
                  <NavLink className='nav-link' to='/estetik-plastik-cerrahi'>
                    فعالياتنا في مجال التجميل
                  </NavLink>
                </li>

                <li className='nav-item'>
                  <NavLink
                    className='nav-link nav-drop'
                    to='/obezite-metabolik-cerrahi'
                  >
                    جراحة السمنة والإستقلاب (أيضية)
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link nav-drop'
                    to={{
                      pathname: "/agız-dis-saglıgı",
                    }}
                  >
                    صحة الأسنان التجميلية
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link nav-drop'
                    to='/kulak-burun-bogaz'
                  >
                    صحة الأنف والأذن والحنجرة
                  </NavLink>
                </li>
                <li className='nav-item dropdown'>
                  <NavLink className='nav-link nav-drop' to='/goz-saglıgı'>
                    صحة العيون
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link border-0 nav-drop'
                    to='/guzellik-merkezi'
                  >
                    مركز التجميل
                  </NavLink>
                </li>
                <li className='nav-item d-lg-none'>
                  <NavLink
                    to='/about-us'
                    className='nav-link border-0 nav-drop'
                  >
                    معلومات عنا
                  </NavLink>
                </li>
                <li className='nav-item d-lg-none'>
                  <NavLink to='/gallery' className='nav-link border-0 nav-drop'>
                    صالة عرض
                  </NavLink>
                </li>
                <li className='nav-item d-lg-none'>
                  <NavLink
                    to='/contact-us'
                    className='nav-link border-0 nav-drop'
                  >
                    اتصل
                  </NavLink>
                </li>
                <li className='nav-item d-lg-none my-3'>
                  <div className='text-left navbar-mobile-social text-right'>
                    <a
                      href='https://www.linkedin.com/company/71556627'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} color='#47b9bb' />
                    </a>
                    <a
                      href='https://www.facebook.com/healthaglobal'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FontAwesomeIcon icon={faFacebook} color='#47b9bb' />
                    </a>
                    <a
                      href='https://twitter.com/GlobalHealtha'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FontAwesomeIcon icon={faTwitter} color='#47b9bb' />
                    </a>
                    <a
                      href='https://www.instagram.com/healthaglobal/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FontAwesomeIcon icon={faInstagram} color='#47b9bb' />
                    </a>
                    <a
                      href='https://www.youtube.com/channel/UCIAIYuuD09u0Kb44kUddPGg'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FontAwesomeIcon icon={faYoutube} color='#47b9bb' />
                    </a>
                  </div>
                </li>
                <li className='nav-item d-lg-none d-flex align-items-start justify-content-start mobile-nav-social'>
                  <a href='https://healthaglobal.com/'>TR</a>
                  <a href='https://healthaglobal.com/'> EN</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </NavbarStyled>
  );
}

export default Navbar;

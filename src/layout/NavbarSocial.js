import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarSocialStyled } from '../styles/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

//
//
function NavbarSocial() {
  return (
    <NavbarSocialStyled>
      <div className='row language-animate'>
        <div className='text-left col py-2'>
          <div className='container'>
            <NavLink to='/contact-us' className='mr-4 animate-link'>
              اتصل
            </NavLink>
            <NavLink to='/gallery' className='animate-link'>
              صالة عرض
            </NavLink>
            <NavLink to='/about-us' className='animate-link'>
              معلومات عنا
            </NavLink>
            <a
              className={`animate-link`}
              href='https://healthaglobal.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              TR
            </a>
            <a
              className={`animate-link `}
              href='https://healthaglobal.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
               EN
            </a>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='text-left col pt-2 px-0'>
          <div className='container'>
            <a
              href='https://www.linkedin.com/company/71556627'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                color='white'
                size='lg'
                className='header-icon'
              />
            </a>
            <a
              href='https://www.facebook.com/healthaglobal'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faFacebook}
                color='white'
                size='lg'
                className='header-icon'
              />
            </a>
            <a
              href='https://twitter.com/GlobalHealtha'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faTwitter}
                color='white'
                size='lg'
                className='header-icon'
              />
            </a>
            <a
              href='https://www.instagram.com/healthaglobal/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faInstagram}
                color='white'
                size='lg'
                className='header-icon'
              />
            </a>
            <a
              href='https://www.youtube.com/channel/UCIAIYuuD09u0Kb44kUddPGg'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faYoutube}
                color='white'
                size='lg'
                className='header-icon'
              />
            </a>
          </div>
        </div>
      </div>
    </NavbarSocialStyled>
  );
}

export default NavbarSocial;

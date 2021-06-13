import React from 'react';
import { WhatsappStyled } from '../styles/components';

function Whatsapp() {
  return (
    <WhatsappStyled target='_blank' href='https://wa.me/05323997632'>
      <img src='/images/whatsapp.png' alt='whatsapp' />
    </WhatsappStyled>
  );
}

export default Whatsapp;

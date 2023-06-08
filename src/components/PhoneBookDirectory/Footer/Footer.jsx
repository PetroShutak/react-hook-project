import React from 'react';
import { FooterStyled, FooterContent } from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContent>
        © 2023 Phonebook. All rights reserved. <br />
        Created by Petro Shutak
      </FooterContent>
    </FooterStyled>
  );
};

export default Footer;

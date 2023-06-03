import { Component } from 'react';
import PropTypes from 'prop-types';
import { FooterStyled, FooterContent } from './Footer.styled';

export default class Footer extends Component {
  render() {
    return (
      <FooterStyled>
        <FooterContent>
          © 2023 Phonebook. All rights reserved. <br />
          Created by Petro Shutak
        </FooterContent>
      </FooterStyled>
    );
  }
}

Footer.propTypes = {
  children: PropTypes.node,
};

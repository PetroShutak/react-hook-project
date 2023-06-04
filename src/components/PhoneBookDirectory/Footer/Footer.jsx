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


// import { Component } from 'react';
// import PropTypes from 'prop-types';
// import { FooterStyled, FooterContent } from './Footer.styled';

// export default class Footer extends Component {
//   render() {
//     return (
//       <FooterStyled>
//         <FooterContent>
//           © 2023 Phonebook. All rights reserved. <br />
//           Created by Petro Shutak
//         </FooterContent>
//       </FooterStyled>
//     );
//   }
// }

// Footer.propTypes = {
//   children: PropTypes.node,
// };

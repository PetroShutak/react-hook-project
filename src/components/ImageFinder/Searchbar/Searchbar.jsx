import React, { useState } from 'react';
import { SearchbarStyled } from './Searchbar.styled';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      toast.error('Please input tag for searching images');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchbarStyled>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <span className="button-label">Search</span>
        </button>

        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;


// import { Component } from 'react';
// import { SearchbarStyled } from './Searchbar.styled';
// import PropTypes from 'prop-types';

// export default class Searchbar extends Component {
//   state = {
//     query: '',
//   };

//   handleChange = event => {
//     this.setState({ query: event.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state.query);
//     this.setState({ query: '' });
//   };

//   render() {
//     return (
//       <SearchbarStyled>
//         <form onSubmit={this.handleSubmit}>
//           <button type="submit">
//             <span className="button-label">Search</span>
//           </button>

//           <input
//             name="query"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.query}
//             onChange={this.handleChange}
//           />
//         </form>
//       </SearchbarStyled>
//     );
//   }
// }

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };


// // <header class="searchbar">
// //   <form class="form">
// //     <button type="submit" class="button">
// //       <span class="button-label">Search</span>
// //     </button>

// //     <input
// //       class="input"
// //       type="text"
// //       autocomplete="off"
// //       autofocus
// //       placeholder="Search images and photos"
// //     />
// //   </form>
// // </header>

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Footer from './Footer/Footer';
import { Wraper as Wrapper } from './App.styled';

const PhoneBook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleAddContact = newContact => {
    const isExistingContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExistingContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onAddContact={handleAddContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </Wrapper>
      <Footer />
    </>
  );
};

PhoneBook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default PhoneBook;



// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import Footer from './Footer/Footer';
// import { Wraper } from './App.styled';

// const PhoneBook = () => {
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     const savedContacts = localStorage.getItem('contacts');
//     if (savedContacts) {
//       setContacts(JSON.parse(savedContacts));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const handleFilterChange = event => {
//     setFilter(event.target.value);
//   };

//   const handleAddContact = newContact => {
//     const isExistingContact = contacts.some(
//       contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
//     );

//     if (isExistingContact) {
//       alert(`${newContact.name} is already in contacts`);
//       return;
//     }

//     setContacts(prevContacts => [...prevContacts, newContact]);
//   };

//   const handleDeleteContact = contactId => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== contactId)
//     );
//   };

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <>
//       <Wraper>
//         <h1>Phonebook</h1>
//         <ContactForm contacts={contacts} onAddContact={handleAddContact} />

//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={handleFilterChange} />
//         <ContactList
//           contacts={filteredContacts}
//           onDeleteContact={handleDeleteContact}
//         />
//       </Wraper>
//       <Footer />
//     </>
//   );
// };

// PhoneBook.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };

// export default PhoneBook;


// import { Component } from 'react';
// import PropTypes from 'prop-types';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import Footer from './Footer/Footer';
// import { Wraper } from './App.styled';

// export default class PhoneBook extends Component {
//   state = {
//     contacts: [
//       // { id: 'id-1', name: 'Pete Che', number: '459-12-56' },
//       // { id: 'id-2', name: 'Toha Aladin', number: '443-89-12' },
//       // { id: 'id-3', name: 'Golden Fish', number: '645-17-79' },
//       // { id: 'id-4', name: 'Tati Tereshenko', number: '227-91-26' },
//       // { id: 'id-5', name: 'Sergiy Kotkov', number: '217-91-29' },
//       // { id: 'id-6', name: 'Barcode', number: '287-91-26' },
//       // { id: 'id-7', name: 'Shutak P', number: '361-73-83' },
//     ],
//     filter: '',
//   };

//   handleFilterChange = event => {
//     this.setState({ filter: event.target.value });
//   };

//   handleAddContact = newContact => {
//     const { contacts } = this.state;
//     const isExistingContact = contacts.some(
//       contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
//     );

//     if (isExistingContact) {
//       alert(`${newContact.name} is already in contacts`);
//       return;
//     }
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };

//   handleDeleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   componentDidMount() {
//     const savedContacts = localStorage.getItem('contacts');
//     if (savedContacts) {
//       this.setState({ contacts: JSON.parse(savedContacts) });
//     }
//   }

//   componentDidUpdate(prevState) {
//     const { contacts } = this.state;
//     if (prevState.contacts !== contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }

//   render() {
//     const { contacts, filter } = this.state;
//     const filteredContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     return (
//       <>
//         <Wraper>
//           <h1>Phonebook</h1>
//           <ContactForm
//             contacts={contacts}
//             onAddContact={this.handleAddContact}
//           />

//           <h2>Contacts</h2>
//           <Filter value={filter} onChange={this.handleFilterChange} />
//           <ContactList
//             contacts={filteredContacts}
//             onDeleteContact={this.handleDeleteContact}
//           />
//         </Wraper>
//         <Footer />
//       </>
//     );
//   }
// }

// PhoneBook.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };

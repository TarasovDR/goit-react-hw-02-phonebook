import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Container from 'components/Container';
import Filter from 'components/Filter';
import Section from 'components/Section';
import Title from 'components/Title';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    this.state.contacts.find(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() &&
        contact.number === newContact.number,
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  visibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <Section>
        <Container>
          <Title text={'Phonebook'} />
          <ContactForm onSubmit={this.addContact} />
          <Title text={'Contacts'} />
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={this.visibleContacts()}
            onDeleteContact={this.deleteContact}
          />
        </Container>
      </Section>
    );
  }
}

export default App;

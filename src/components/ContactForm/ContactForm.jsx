import React, { Component } from 'react';
import SubTitle from 'components/SubTitle';

import { Form, Label, Input, AddButton } from './ContactForm.styled';
import { TiUserAdd, TiUser, TiPhone } from 'react-icons/ti';


class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  
  render() {
    return (
    <Form onSubmit={this.handleSubmit}>
      <Label>
        <SubTitle text={'Name'}/>
        <TiUser/>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.handleChange}
          placeholder="Name"
          value={this.state.name}
        />
      </Label>
      <Label>
        <SubTitle text={'Number'}/>
        <TiPhone/>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={this.handleChange}
          placeholder="+xxx xx xxx-xx-xx"
          value={this.state.number}
        />
      </Label>

      <AddButton type="submit">
        <TiUserAdd/>
        Add contact</AddButton>
    </Form>
    )
  }
}

export default ContactForm;
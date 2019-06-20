import React, {Component } from 'react';
import './App.css';
import { Container, Header, } from "semantic-ui-react";
import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";

class App extends Component {
  state = {
    contacts: [
      { id: 1, firstName: "Jerry", phone: "801-121-5656", },
      { id: 2, firstName: "Sarah", phone: "801-241-5246", },
      { id: 3, firstName: "Alex", phone: "801-186-5627", },
    ],
  };


  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addContact = (contactData) => {
    let newContact = { id: this.getId(), ...contactData }
    this.setState({ contacts: [newContact, ...this.state.contacts]})
  }

  removeContact = (id) => {
    const contacts = this.state.contacts.filter( contact => {
      if (contact.id !== id)
        return contact
    })
      this.setState({ contacts: [...contacts] })
  }


  render() {
    const { contacts } = this.state
    return (
      <Container style={{ paddingTop: "25px"}}>
        <Header as="h1">React Contact List</Header>
        <br />
        <ContactForm add={this.addContact} />
        <br />
        <Contacts contacts={contacts} remove={this.removeContact} />
      </Container>
    )
  }
}

export default App;

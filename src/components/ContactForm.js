import React, { Component } from "react";
import { Form, } from "semantic-ui-react";

class ContactForm extends Component {
  state = { firstName: '', phone: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    const { add } = this.props
    add(this.state)
    this.setState({ firstName: '', phone: ''})
  }

handleChange = (e) => {
  const { name, value } = e.target
  this.setState({ [name]: value })
}

render() {
  const { firstName, phone } = this.state
  return(
    <Form onSubmit={this.handleSubmit}>
      <Form.Input
        label='First Name'
        required
        name='firstName'
        value={firstName}
        onChange={this.handleChange}
        />
      <Form.Input
        label='Phone'
        required
        name='phone'
        value={phone}
        onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
    </Form>

  ) 
 }
}

export default ContactForm;
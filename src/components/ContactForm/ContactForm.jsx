import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleChange = (e) =>{
    const {name, value} = e.target
    this.setState({
        [name]: value
    })
  }

  handleSubmision = (e) =>{
    e.preventDefault();
    console.log('Form submitted');
    this.props.handleAddContacts(this.state);
    this.setState({
        name: '',
        number: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmision}>
      <label>Name
        <input
          value={this.state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          onChange={this.handleChange}
        /></label>
        <label>Number
        <input
          value={this.state.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
        /></label>
        <button type='submit'>Add contacts</button>
      </form>
    );
  }
}

import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";

export class App extends Component{
  state = {
    contacts: [],
    filter: ''
  }

  handleAddContacts = (newContact) => {

   this.setState((prevState) => ({
    contacts: [...prevState.contacts, newContact]
   }))
  }

  render(){
    return(
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleAddContacts={this.handleAddContacts}/>
      </div>
    )
  }
}

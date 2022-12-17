import shortid from "shortid";
import { Component } from "react";
import { Form } from "./Form/Form";
import {Contacts } from "./Contacts/Contacts";
import {InputFilter} from "./InputFilter/InputFilter";
import {Container,Title} from "./App.styled";



export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', telephone: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', telephone: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', telephone: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', telephone: '227-91-26'},
    ],
    filter: ''
  }
  deleteFromContacts = (contactToDelete) =>{
    const contacts = this.state.contacts.filter(contact => contact.id !== contactToDelete.id);
    this.setState({ contacts });

  }
  checkIsInContacts = (value) => {
    return this.state.contacts.find(contact => contact.name === value) !== undefined;
  }
  addFilter = (value) => {
      this.setState({
        filter: `${value}`,
      });
  }
 addContact = (name,telephone) =>{
   if (this.checkIsInContacts(name) ) {
     alert("adas")
     return
   }
    const contact = {
      id : shortid.generate(),
      name,
      telephone,
    }
  
    this.setState(p => ({
      contacts: [contact, ...p.contacts]
    })) }
    contactsFilter = () =>{   
      const contacts = this.state.contacts;
      const filter = this.state.filter
      const filtered = contacts.filter(contact => contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()));
      return filtered
  
     }
    render(){

      return (
      <Container>
        <Form onSubmit = {this.addContact}/>
        <Title>Contacts</Title>
        <InputFilter onInput = {this.addFilter}/>
        <Contacts contacts = {this.contactsFilter()} deleteFromContacts = {this.deleteFromContacts}/>
        </Container>

      )
    }

}





// {this.countTotalFeedback() > 0 ? (
//   <Statistic good={this.state.good}
//   neutral={this.state.neutral} 
//   bad={this.state.bad} 
//   total={this.countTotalFeedback()}/>
// ) : (<Notification message={"There is no feedback"}/>)
// } 
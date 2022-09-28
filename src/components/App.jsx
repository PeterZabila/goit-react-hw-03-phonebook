import { Component } from 'react';
import { Wrapper, Container } from './Main.styled';
import ContactList from './ContactList/ContactList';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount () {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if(contacts?.length) {
      this.setState({contacts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  addContact = ({ name, number }) => {
    if (this.state.contacts.find(contact => contact.name.toLowerCase === name.toLowerCase)) {
      alert(name + ' is already in contacts');
      return;
    }

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };


  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ 
        [name]: value,
    })
}

  getFilteredContacts() {
    const { contacts, filter } = this.state;

    if(!filter) {
      return contacts;
    } 
        const normalizedFilter = filter.toLowerCase();
        
        const filteredContacts = contacts.filter(({name}) => {
            const normalizedName = name.toLowerCase();
            const result = normalizedName.includes(normalizedFilter);
          return result;
        })
    return filteredContacts;
  }

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }))
}
  
  render () {
    const { addContact } = this;
    const contacts = this.getFilteredContacts();
    return (
      <Wrapper>
        <Container>
          <Form onSubmit={addContact}/>
        </Container>
        
        <Container>

          <Filter onChange={this.handleChange} value={this.state.filter}/>
        </Container>
        <Container>
          <ContactList
            contacts={contacts}
            onDeleteContact={this.onDeleteContact}
          />
        </Container>
      </Wrapper>
    )
  }
};

export default App;
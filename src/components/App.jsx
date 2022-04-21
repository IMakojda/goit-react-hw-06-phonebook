import { useState} from "react";
import useLocalStorage from "../hooks/localStorageHooks";
import Form from "./form/form";
import { nanoid } from 'nanoid'
import Section from "./section/section";
import ContactList from "./contacts/contactsList";
import FilterContacts from "./filter/filterInput";
import Notiflix from 'notiflix';

export default function App() {

  const [contacts, setContacts] = useLocalStorage('contacts');
  const [filter, setFilter] = useState('');

  const formSubmitContactAdd = ({name,number}) => {
    const contact = {
      name,
      number,
      id:nanoid(),
    };

    if (
        contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()) ||
        contacts.find(contact => contact.number === number)
        )
    {
      return Notiflix.Notify.failure(`${name} is already in contacts`);
    }

    setContacts([contact, ...contacts]);

  }

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

  const  onHandleFilter = e => {
    setFilter(e.currentTarget.value);
  }

  const filteredContacts = contacts.filter(contact =>contact.name.toLowerCase().includes(filter.toLowerCase()));
  
     return (
      <>
        <Section title="PhoneBook">
          <Form onSubmit={formSubmitContactAdd} />
        </Section>

        <Section title="Contacts">
          <FilterContacts
            value={filter}
            onChange={onHandleFilter}
          />
          <ContactList
            contactList={filteredContacts}
            onDelete={deleteContact}
          /> 
        </Section>
      </>
    )
 
};

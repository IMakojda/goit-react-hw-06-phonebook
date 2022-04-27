import Form from "./form/form";
import Section from "./section/section";
import ContactList from "./contacts/contactsList";
import FilterContacts from "./filter/filterInput";

export default function App() {

  return (
    <>
      <Section title="PhoneBook">
        <Form />
      </Section>

      <Section title="Contacts">
        <FilterContacts/>
        <ContactList/> 
      </Section>
    </>
  )
}
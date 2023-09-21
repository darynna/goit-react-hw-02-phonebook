import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { nanoid } from 'nanoid'
import {ContactsList} from "./ContactList.styled"

export const ContactList = ({ contacts, handleDeleteContacts }) => {
  return (
    <ContactsList>
      {contacts.map(contact => (
        <ContactListItem key={nanoid()} contact={contact} handleDeleteContacts={handleDeleteContacts}/>
      ))}
    </ContactsList>
  );
};

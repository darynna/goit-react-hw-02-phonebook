import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { nanoid } from 'nanoid'

export const ContactList = ({ contacts, handleDeleteContacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem key={nanoid()} contact={contact} handleDeleteContacts={handleDeleteContacts}/>
      ))}
    </ul>
  );
};

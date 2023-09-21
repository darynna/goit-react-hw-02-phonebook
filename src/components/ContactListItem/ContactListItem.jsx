export const ContactListItem = ({contact, handleDeleteContacts}) =>{
    return(
        <li><p>{contact.name}: {contact.number}</p><button type="button" onClick={() => handleDeleteContacts(contact.name)}>Delete</button></li>
    )
}
export const ContactListItem = ({contact}) =>{
    return(
        <li>{contact.name}: {contact.phone}</li>
    )
}
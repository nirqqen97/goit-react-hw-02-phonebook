import { ContactItem } from "../contactItem/contactItem";
import { FormList } from "./contacts.styled";

export const Contacts = ({contacts,deleteFromContacts}) =>{
    return <FormList>
        {contacts.map(c =>{
            return (<ContactItem key={c.id} c = {c} deleteFromContacts = {deleteFromContacts}/>)
        })}
    </FormList>
}
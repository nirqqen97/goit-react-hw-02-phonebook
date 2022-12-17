import { ContactItem } from "../ContactItem/ContactItem";
import { FormList } from "./Contacts.styled";

export const Contacts = ({contacts,deleteFromContacts}) =>{
    return <FormList>
        {contacts.map(c =>{
            return (<ContactItem key={c.id} c = {c} deleteFromContacts = {deleteFromContacts}/>)
        })}
    </FormList>
}
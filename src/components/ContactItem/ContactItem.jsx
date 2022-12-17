import { Item,Name,Phone,Btn } from "./ContactItem.styled"

export const ContactItem = ({c, deleteFromContacts}) =>{
    
    function handleClick(e) {
        deleteFromContacts(c)
    }
    return <Item>
        <Name>{c.name}:</Name>
        <Phone>{c.telephone}</Phone>
        <Btn type="button" onClick={handleClick}>Delete</Btn>
        </Item>
}
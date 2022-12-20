import PropTypes from "prop-types";
import { Input, Label } from "./InputFilter.styled";
export const InputFilter = ({onInput}) => {
 function handeInput ({target}) {
        onInput(target.value);}
 return ( 
         <Label>
             Find contacts by name
             <Input 
             onInput={handeInput}
             pattern={"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}/>
         </Label>)
}

InputFilter.propTypes = {
    addFilter: PropTypes.func
}
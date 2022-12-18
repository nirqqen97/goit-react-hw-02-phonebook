import { Component } from "react";
import PropTypes from "prop-types";

import {FormWrap,SubmitBtn,Input, Label} from "./Form.styled";

export class Form extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const {name,telephone} = e.target.elements;
        this.setState({ name: name.value })
        this.props.onSubmit(name.value,telephone.value)
        e.target.reset();
        }
    render(){
        return(
            <FormWrap autoComplete="off" onSubmit={this.handleSubmit}>
            <Label>
                Name
                <Input type={"text"} 
                       name ={"name"}
                       pattern={"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}
                       title = {"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}
                       required/>
                       
            </Label>
            <Label>
                Phone
                <Input type={"text"} 
                       name ={"telephone"}
                    //    pattern = {"\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"}
                       title = {"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}
                       required/>
            </Label>
            <SubmitBtn>Submit</SubmitBtn>
        </FormWrap>
        )
    }
} 

Form.propTypes = {
    addContact: PropTypes.func
}

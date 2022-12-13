import { Component } from "react";
import {FormWrap,SubmitBtn,Input, Label} from "./form.styled";

export class Form extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const {name,telephone} = e.target.elements;
        this.setState({ name: name.value })
        this.props.onSubmit(name.value,telephone.value)
        console.log(this.props.onSubmit);
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
                       title = {"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}
                       required/>
            </Label>
            <SubmitBtn>Submit</SubmitBtn>
        </FormWrap>
        )
    }
} 
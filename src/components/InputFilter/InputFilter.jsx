import { Component } from "react";
import PropTypes from "prop-types";
import { Input, Label } from "./InputFilter.styled";

export class InputFilter extends Component {
   handeInput = ({target}) =>{
     this.props.onInput(target.value);
   }
  render(){
      return ( 
        <Label>
            Find contacts by name
            <Input 
            onInput={this.handeInput}
            pattern={"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}/>
        </Label>)
  }
}

InputFilter.propTypes = {
    addFilter: PropTypes.func
}


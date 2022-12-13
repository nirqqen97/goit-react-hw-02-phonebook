import { Component } from "react";
import { Input, Label } from "./inputFilter.styled";

export class InputFilter extends Component {
   handeInput = ({target}) =>{
     this.props.onInput(target.value);
   }
  render(){
      return ( 
        <Label>
            Find contacts by name
            <Input onInput={this.handeInput}/>
        </Label>)
  }
}

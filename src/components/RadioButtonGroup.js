import React from 'react';
import RadioButton from "./RadioButton.js";

function RadioButtonGroup (props) {

    const choiceItems = props.choices.map(choice => {
      const {value, label} = choice;
      const checked = value === props.checkedValue;

      return (<RadioButton key={`radio-button-${value}`} label={label} name={props.name} value={value} checked={checked} onChange={props.onChange}/>);
    });
    return (<div>
      {choiceItems}
    </div>);


}
export default RadioButtonGroup;

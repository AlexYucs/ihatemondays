import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import RadioButtonGroup from '../components/RadioButtonGroup';
import PollSubmitButton from '../components/PollSubmitButton';
import CurrentChoice from '../components/CurrentChoice';

class PollContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      header: "Welcome1",
      question: "What is better",
      checkedValue: "",
      correctAnswer: "Dog"
    };
    this.setCheckedValue = this.setCheckedValue.bind(this);

  }

  setCheckedValue(value){
    this.setState({
        checkedValue: value
    });
    console.log("current choice: " + value);
}


  render() {
    const choices = [
	{value: 'Dog', label: 'Dog'},
	{value: 'Cat', label: 'Cat'},
	{value: 'Parrot', label: 'Parrot'}
	];

    var rowStyle = {
      backgroundColor: '#dadada',
      border: '1px solid black',
      borderRadius: '6px',
      padding: '10px'
    };

    return (<div className="container">
      <div className="jumbotron"><PollHeader text={this.state.header}/></div>
      <div className="row" style={rowStyle}>
        <div className="col-sm-4 col-sm-offset-4">

          <form>
            <PollQuestion text={this.state.question}/>
            <RadioButtonGroup name='answer' onChange = {this.setCheckedValue} checkedValue={this.state.checkedValue} choices={choices}/>
            <CurrentChoice text={this.state.checkedValue}/>
            <PollSubmitButton/>
          </form>
        </div>
      </div>
    </div>);
  }
}

export default PollContainer;

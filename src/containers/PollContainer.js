import React from 'react';
import $ from 'jquery';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import RadioButtonGroup from '../components/RadioButtonGroup';
import PollSubmitButton from '../components/PollSubmitButton';
import CurrentChoice from '../components/CurrentChoice';
import data from '../data/data.json';

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

  UNSAFE_componentWillMount() {
    console.log('componentWillMount()');
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.serverRequest = $.get('http://localhost:8080/data/data.json', function(result) {
      var data = result;
      this.setState({header: data.poll.header, question: data.poll.questions[0].question, choices: data.poll.questions[0].choices, correctAnswer: data.poll.questions[0].correctAnswer});
    }.bind(this));
  }

  UNSAFE_componentWillReceiveProps() {
    console.log('componentWillReceiveProps()');
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate()');
    return true;
  }
  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate()');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate()');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

  setCheckedValue(value) {
    this.setState({checkedValue: value});
    console.log("current choice: " + value);
  }

  render() {
    //   const choices = [
    // {value: 'Dog', label: 'Dog'},
    // {value: 'Cat', label: 'Cat'},
    // {value: 'Parrot', label: 'Parrot'}
    // ];

    const choices = data.poll.questions[0].choices;

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
            <RadioButtonGroup name='answer' onChange={this.setCheckedValue} checkedValue={this.state.checkedValue} choices={choices}/>
            <CurrentChoice text={this.state.checkedValue}/>
            <PollSubmitButton/>
          </form>
        </div>
      </div>
    </div>);
  }
}

export default PollContainer;

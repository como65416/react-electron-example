import React from 'react';
import AddButton from './components/AddButton.js';
import SubButton from './components/SubButton.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countA: 15,
      countB: 25,
      selectedDate: new Date().toString()
    };
  }

  onDateChange(date) {
    this.setState(function(prevState, props) {
        return {
            selectedDate: date.toString()
        };
    });
  }

  show () {
    alert("A:" + this.state.countA + " B:" + this.state.countB);
  }

  onAddButtonCountChange(count) {
    this.setState(function(prevState, props) {
        return {
            countA: count
        };
    });
  }

  onSubButtonCountChange(count) {
    this.setState(function(prevState, props) {
        return {
            countB: count
        };
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World !!</h1>
        <AddButton count={this.state.countA} onCountChange={this.onAddButtonCountChange.bind(this)}></AddButton>
        <SubButton count={this.state.countB} onCountChange={this.onSubButtonCountChange.bind(this)}></SubButton><br />
        { this.state.countA + this.state.countB }<br />{this.state.selectedDate}<br />
        <button onClick={this.show.bind(this)}>Show Parent Values</button>
      </div>
    )
  }
}
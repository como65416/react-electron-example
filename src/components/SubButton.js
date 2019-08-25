import React from 'react';

const buttonStyle = {
  color: 'blue'
};

export default class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
      onCountChange: props.onCountChange,
      msg: '--'
    };
  }

  sub() {
    this.setState((prevState, props) => ({
      count: prevState.count - 1
    }));
  }

  handleCountChange() {
    if (this.state.onCountChange != null) {
      this.state.onCountChange(this.state.count);
    }
  }

  // 監聽state的變化
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count != this.state.count) {
      this.handleCountChange();
    }
  }

  render() {
    return (
      <button style={buttonStyle} onClick={(e) => this.sub(e)}>
        { this.state.count } { this.state.msg }
      </button>
    );
  }
}
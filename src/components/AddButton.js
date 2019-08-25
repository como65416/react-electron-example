import React from 'react';
import styles from "./css/AddButton.css";

export default class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
      onCountChange: props.onCountChange,
      msg: '++'
    };
  }

  add() {
    this.setState((prevState, props) => ({
      count: prevState.count+1
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
      <button className={styles.my_button} onClick={this.add.bind(this)}>
        { this.state.count } { this.state.msg }
      </button>
    );
  }
}
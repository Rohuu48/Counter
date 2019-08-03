import React, { Component } from "react";
import { increment, decrement, incrementAsync } from "./Action";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const mapStateToProps = store => {
  return {
    counter: store.counter
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      increment,
      decrement,
      incrementAsync
    },
    dispatch
  );
};
class App extends Component {
  render() {
    return (
      <div>
        <p>{this.props.counter}</p>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <button onClick={this.props.incrementAsync}>+Async</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

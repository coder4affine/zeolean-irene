import React, { Component } from "react";
import PropTypes from "prop-types";

export default class index extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(props, state) {
    return {
      hasError: true
    };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Oops! something went wrong try after sometime</h2>;
    }
    return this.props.children;
  }
}

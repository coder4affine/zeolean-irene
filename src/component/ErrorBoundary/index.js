import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class index extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h2>Oops! something went wrong try after sometime</h2>;
    }
    return children;
  }
}

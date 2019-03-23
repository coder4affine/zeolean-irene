/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const { Provider, Consumer: ThemeConsumer } = React.createContext();

export default class themeContext extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  state = {
    theme: 'dark',
    changeTheme: theme => this.setState({ theme }),
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

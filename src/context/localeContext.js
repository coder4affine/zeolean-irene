import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const { Provider, Consumer: LocaleConsumer } = React.createContext();

export default class localeContext extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  state = {
    locale: 'en',
    changeLocale: locale => this.setState({ locale }),
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

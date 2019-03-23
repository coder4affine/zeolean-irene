/* eslint-disable */
import React, { Component } from 'react';
// import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { LocaleConsumer } from '../../context/localeContext';
import { ThemeConsumer } from '../../context/themeContext';

class index extends Component {
  state = {};

  render() {
    return (
      <div>
        <h2>About Page</h2>
        <span>{this.props.theme.theme}</span>
        <LocaleConsumer>{value => <span>{value.locale}</span>}</LocaleConsumer>
        <ThemeConsumer>{value => <span>{value.theme}</span>}</ThemeConsumer>
        <h2>{this.props.data}</h2>
      </div>
    );
  }
}

index.propTypes = {};

function mapStateToProps(state) {
  return {
    theme: state.theme,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(PropertiesActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(index);

import React, { Component } from "react";
// import PropTypes from "prop-types";

class index extends Component {
  render() {
    return (
      <div>
        <h2>About Page</h2>
        <h2>{this.props.data}</h2>
      </div>
    );
  }
}

index.propTypes = {};

export default index;

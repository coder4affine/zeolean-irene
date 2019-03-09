import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const index = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

index.propTypes = {};

export default index;

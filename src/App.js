import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import loadable from "@loadable/component";

const AsyncHome = loadable(() => import("./screens/Home"), {
  fallback: <div>Loading...</div>
});
const AsyncUsers = loadable(() => import("./screens/Users"), {
  fallback: <div>Loading...</div>
});
const AsyncAbout = loadable(() => import("./screens/About"), {
  fallback: <div>Loading...</div>
});
const AsyncNoMatch = loadable(() => import("./screens/NoMatch"), {
  fallback: <div>Loading...</div>
});

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <NavLink
                activeStyle={{
                  color: "red"
                }}
                exact
                to="/"
              >
                Home
              </NavLink>
            </ul>
            <ul>
              <NavLink
                activeStyle={{
                  color: "red"
                }}
                to="/users"
              >
                Users
              </NavLink>
            </ul>
            <ul>
              <NavLink
                activeStyle={{
                  color: "red"
                }}
                to="/about"
              >
                About
              </NavLink>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact render={() => <AsyncHome />} />
            <PrivateRoute
              path="/users"
              isAuthenticated={true}
              component={AsyncUsers}
            />
            <Route path="/about" render={() => <AsyncAbout />} />
            <Route render={() => <AsyncNoMatch />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {};

export default App;

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import LocaleContext from './context/localeContext';
import ThemeContext from './context/themeContext';
// import PrivateRoute from './component/PrivateRoute';

const AsyncHome = loadable(() => import('./screens/Home'), {
  fallback: <div>Loading...</div>,
});
const AsyncUsers = loadable(() => import('./screens/Users'), {
  fallback: <div>Loading...</div>,
});
const AsyncAbout = loadable(() => import('./screens/About'), {
  fallback: <div>Loading...</div>,
});
const AsyncNoMatch = loadable(() => import('./screens/NoMatch'), {
  fallback: <div>Loading...</div>,
});

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <NavLink
                activeStyle={{
                  color: 'red',
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
                  color: 'red',
                }}
                to="/users"
              >
                Users
              </NavLink>
            </ul>
            <ul>
              <NavLink
                activeStyle={{
                  color: 'red',
                }}
                to="/about"
              >
                About
              </NavLink>
            </ul>
          </nav>
          <ThemeContext>
            <LocaleContext>
              <Switch>
                <Route path="/" exact render={props => <AsyncHome {...props} />} />
                <Route path="/users" render={props => <AsyncUsers {...props} />} />
                <Route path="/about" render={props => <AsyncAbout {...props} />} />
                <Route render={() => <AsyncNoMatch />} />
              </Switch>
            </LocaleContext>
          </ThemeContext>
        </div>
      </Router>
    );
  }
}

App.propTypes = {};

export default App;

import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Switch, Route, withRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { auth } from './firebase';

import {
  LANDING,
  HOME,
  SIGN_IN,
  SIGN_UP,

} from './constants/routes';

// Components
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { Navigation } from './components/Navigation';
import { Landing } from './screens/landing';
import { Home } from './screens/home';
import { ProtectedRoute } from './common/ProtectedRoute';
import { withAuthentication } from "./components/withAuthentication";

const { getCurrentlySignedInUser } = auth;

// import { createUserWithEmailAndPassword } from './firebase/auth';

// @inject('appStore')
// @observer
const App = ({ isAuthenticated }) => {
  return <div className="App">
      <Navigation />
      App@
      <Switch>
        <Route exact path={LANDING} component={Landing} />
        <ProtectedRoute exact path={HOME} component={Home} isAuthenticated={isAuthenticated} />
        <Route exact path={SIGN_UP} component={RegisterForm} />
        <Route exact path={SIGN_IN} component={LoginForm} />
        <Route component={Landing} />
      </Switch>
    </div>;
}

export default withRouter(withAuthentication(App));

import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { SIGN_IN } from './../constants/routes';

export const ProtectedRoute = ({ component: Component, isAuthenticated , ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return isAuthenticated ? (
        <Component {...props} /> ) :
        <Redirect 
          to={{
            pathname: SIGN_IN,
            state: { from: props.location }
          }}
        />
      }}
    >
    </Route>
  )
};

import React, { Fragment } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

import { Form } from './../common/Form';
import { SignupLink } from './SignupLink';

import { auth } from "./../firebase";

const { signInWithEmailAndPassword } = auth;

export const LoginForm = ({ history, location }) => {
  let fields = [
    {
      name: "email",
      type: "text"
    },
    {
      name: "password",
      type: "password"
    }
  ];

  const onLoginHandler = async (formData) => {
    const { email, password } = formData;
    try {
      let serverResponse = await signInWithEmailAndPassword(email, password);
      let { user } = serverResponse;
      let { from } = location.state || { from: { pathname: "/home" } };

      // console.log('successfull login, userData -> ', user);

      history.replace(from);
      
      return null

    } catch (err) {
      // console.log('failed to login! -> ', err);
      return err
    }

  }

  return (
    <Fragment>
      <h2>@loginForm</h2>
      
      <Form 
        fields={fields} 
        submitHandler={ onLoginHandler } 
        SignupLink={ SignupLink }
      />

    </Fragment>
  )
}

withRouter(LoginForm);

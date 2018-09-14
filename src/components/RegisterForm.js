import React, { Fragment } from 'react';

import { Form } from './../common/Form';
import { auth } from './../firebase';
import { withRouter } from 'react-router-dom';

const { createUserWithEmailAndPassword } = auth;

export const RegisterForm = ({ history, location }) => {
  let fields = [
    {
      name: "email",
      type: "text",
      value: "",
    },
    {
      name: "password",
      type: "password",
      value: "",
    },
  ];

  const onRegisterHandler = async (formData) => {
    const { email, password } = formData;

    try {
      let serverResponse = await createUserWithEmailAndPassword(email, password);
      let { user } = serverResponse;
      let { from } = location.state || { from: { pathname: "/home" } };

      console.log('created new User -> ', user);

      history.replace(from);

      return null
    } catch (err) {
      return err
    }
  }

  return (
    <Fragment>
      <h2>@RegisterForm</h2>
      <Form 
        fields={ fields } 
        submitHandler={ onRegisterHandler } 
      />
    </Fragment>
  )
}

withRouter(RegisterForm);

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { SIGN_UP } from './../constants/routes';

export const SignupLink = () => {
  return (
    <Fragment>
      <div className="signupLink">
        Still don't have account ? Proceed to 
        <Link 
          to={ SIGN_UP }
        >
          SIGNUP
        </Link>
      </div>
    </Fragment>
  )
};

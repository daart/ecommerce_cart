import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';

import {
  LANDING,
  HOME,
  SIGN_IN,
  SIGN_UP,
  FORGET_PASSWORD,
} from './../constants/routes';
import { auth } from './../firebase'; 
import { SignoutBtn } from './SignoutBtn';

const { signOut } = auth;

export class Header extends Component {

  async signOutHandler() {
    try {
      let isSignedOut = await signOut();
      console.log('signed Out SUCESS --> ', isSignedOut);
    } catch(err) {
      console.log("failed TO SIGN OUT --> ", err);
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <ul>
            <li>
              <NavLink
                to={LANDING}
              >
                LANDING
              </NavLink>
            </li>
            <li>
              <NavLink
                to={HOME}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to={SIGN_IN}
              >
                SIGNIN
              </NavLink>
            </li>
            <li>
              <NavLink
                to={SIGN_UP}
              >
                SIGNUP
              </NavLink>
            </li>
            <li>
              <SignoutBtn signOutHandler={ this.signOutHandler } />
            </li>
          </ul>
              
        </div>
      </Fragment>
    )
  }
}

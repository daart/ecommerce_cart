import React, { Fragment, Component } from "react";
import { NavLink } from "react-router-dom";
import { inject, observer } from "mobx-react";

import {
  LANDING,
  HOME,
  SIGN_IN,
  SIGN_UP,
  FORGET_PASSWORD
} from "../constants/routes";

import { SignoutBtn } from "./SignoutBtn";
import { AuthUserContext } from "./AuthUserContext";

const NavigationAuth = () => {
  return (
    <Fragment>
      <div>
        <ul>
          <li>
            <NavLink to={LANDING}>LANDING</NavLink>
          </li>
          <li>
            <NavLink to={HOME}>HOME</NavLink>
          </li>

          <li>
            <SignoutBtn />
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

const NavigationNonAuth = () => {
  return (
    <Fragment>
      <div>
        <ul>
          <li>
            <NavLink to={SIGN_IN}>SIGNIN</NavLink>
          </li>
          <li>
            <NavLink to={LANDING}>LANDING</NavLink>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

@inject("sessionStore")
@observer
export class Navigation extends Component {
  render() {
    return (
      <AuthUserContext.Consumer>
        {isAuthenticated =>
          isAuthenticated ? <NavigationAuth /> : <NavigationNonAuth />
        }
      </AuthUserContext.Consumer>
    );
  }
}

import React, { Component, Fragment } from "react";
import * as firebase from "firebase";
import { inject } from "mobx-react";

// import { auth, firebase } from "./../firebase";
import { AuthUserContext } from "./AuthUserContext";

// const { getCurrentlySignedInUser } = auth;

export const withAuthentication = Comp => {
  @inject("sessionStore")
  class WithAuthentication extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isAuthenticated: null
      };
    }

    async componentDidMount() {
      firebase.auth().onAuthStateChanged(isAuthenticated => {
        if (isAuthenticated) {
          console.log("isAuthenticated --> ", isAuthenticated);

          this.setState({ isAuthenticated: true });
        } else {
          console.log("isAuthenticated ERR--> ", isAuthenticated);

          this.setState({ isAuthenticated: null });
        }
      });
    }

    render() {
      const { isAuthenticated } = this.state;

      return (
        <AuthUserContext.Provider value={isAuthenticated}>
          <Comp {...this.props} isAuthenticated={isAuthenticated} />
        </AuthUserContext.Provider>
      );
    }
  }

  return WithAuthentication;
};

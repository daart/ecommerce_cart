import React, { Component, Fragment } from 'react';

export const withAuthentication = (Comp) => {
  class WithAuthentication extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isAuthenticated: false
      }
    }

    async componentDidMount() {
      let signedInUser = await getCurrentlySignedInUser();
      let isAuthenticated = false;

      if (signedInUser) {
        isAuthenticated = true;
      }

      this.setState({
        isAuthenticated: isAuthenticated
      });

    }

    render() {
      return (
        <Comp />
      )
    }
  }

  return WithAuthentication;
};
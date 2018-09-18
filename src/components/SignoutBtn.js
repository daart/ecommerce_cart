import React from 'react';

import { auth } from './../firebase';

const { signOut } = auth;

const signOutHandler = () => {
  
}

export const SignoutBtn = () => {
  return (
    <div className="btn signout">
      <button
        type="button"
        onClick={ signOut }
      >
        SignOut
      </button>
    </div>
  )
}

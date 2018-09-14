import React from 'react';

export const SignoutBtn = ({ signOutHandler }) => {
  return (
    <div className="btn signout">
      <button
        type="button"
        onClick={ signOutHandler }
      >
        SignOut
      </button>
    </div>
  )
}

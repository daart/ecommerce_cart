import React from 'react';

export const FormErrors = ({ errors }) => {
  console.log('errory=> ', errors);

  return Object.keys(errors).map(err => (
    <div className="errors" key={ err }>{errors[err]}</div>
  ));
};

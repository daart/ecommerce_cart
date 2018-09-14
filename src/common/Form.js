import React, { Component, Fragment } from 'react';

import { FormErrors } from './FormErrors';

const defaultFormState = {};

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        email: '',
        password: '',
      },
      errors: {}
    }
  }

  inputHandler = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    })
  }

  formHandler = async(e) => {
    e.preventDefault();
    const { submitHandler } = this.props;
    const { formData } = this.state;

    let hasErrors = await submitHandler(formData);

    console.log("hasErrors -> ", hasErrors);

    if (hasErrors) {
      const { message, code } = hasErrors;

      this.setState({
        errors: {
          ...this.state.errors,
          [code]: message
        },
        formData: {}
      });
    }
  }

  clearForm = () => {
    this.setState({
      formData: {}
    })
  }

  renderField = (field) => {
    const { name, type } = field;

    return (
      <fieldset key={name}>
        <label htmlFor={name}>
          {name}: 
          <input type={type} name={name} 
            onChange={this.inputHandler}
            value={this.state.formData[name]}
          />
        </label>
      </fieldset>
    )
  }

  render() {
    let { formData, errors } = this.state;
    const { fields, SignupLink } = this.props;

    return <Fragment>
        <div id="authForm">
          {Object.keys(errors).length > 0 && <FormErrors errors={errors} />}
          <form action="" onSubmit={this.formHandler}>
            {fields.map(field => this.renderField(field))}
            <button type="submit">Login</button>
          </form>

          { SignupLink && <SignupLink /> }

        </div>
      </Fragment>;
  }
}

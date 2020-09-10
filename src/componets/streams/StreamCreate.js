import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  state = {};

  renderError = ({ touched, error }) => {
    console.log(touched, error);
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ label, input, meta }) => {
    console.log(meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  handleSubmit = (values) => {
    console.log(values);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.handleSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter descrption"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Cannot be empty";
  }

  if (!values.description) {
    errors.description = "Cannot be empty";
  }

  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate: validate,
})(StreamCreate);

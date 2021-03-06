import React from "react";
import PropTypes from "prop-types";

//import { InlineError } from "../common";
import "./login.css";

const SignInForm = ({
  fieldErrors,
  formFields,

  handleSignIn,
  handleFieldChange
}) => (
  <form className="login" style={{marginTop: 200, 
    height: 300}}>
    <h3 as="h2" style={{marginLeft: 100, marginTop: 26}}>Sign In</h3>
      {/* {fieldErrors.email && <InlineError text={fieldErrors.email} />} */}
      <input
        id="email"
        type="text"
        name="email"
        className=""
        placeholder="Email"
        size="large"
      />
      {/* {fieldErrors.password && <InlineError text={fieldErrors.password} />} */}
      <input
        id="password"
        type="password"
        name="password"
        className="validate"
        onChange={handleFieldChange}
        placeholder="Password"
        size="large"
      />
    <button
        style={{
            width: 240,
            height: 35,
            marginTop: 26,
            marginBottom: 26,
            marginLeft: 26,
            alignSelf: 'center',
            backgroundColor: 'green',
            color: 'white'
        }}
        color= 'success'
    >
      Log In
    </button>
  </form>
);

SignInForm.propTypes = {
  formFields: PropTypes.object.isRequired,
  fieldErrors: PropTypes.object.isRequired,

  handleSignIn: PropTypes.func.isRequired,
  handleFieldChange: PropTypes.func.isRequired
};

export default SignInForm;

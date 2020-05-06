import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (

    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
        type="text"
        name="name"
        placeholder="Whats your name" />
        <input 
        type="text"
        name="bio"
        placeholder="tell us about yourself" />
        <input
        type="text"
        name="projects"
        placeholder="Show us some projects!" /> 
        <input
        type="text"
        name="skills"
        placeholder="Tell us your skill set" />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
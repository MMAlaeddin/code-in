import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewProfileForm(props) {
  function handleNewProfileFormSubmission(event) {
    event.preventDefault();
    props.onNewProfileCreation({
      name: event.target.name.value,
      bio: event.target.bio.value,
      projects: event.target.projects.value,
      skills: event.target.skills.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      {/* <ReusableForm
      formSubmissionHandler = {handleNewProfileFormSubmission}
      buttonText = "Create Profile!" /> */}
    </React.Fragment>
  );
}

NewProfileForm.propTypes = {
  onNewProfileCreation: PropTypes.func
}

export default NewProfileForm;
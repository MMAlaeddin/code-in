import React from 'react';
import PropTypes from 'prop-types';

function NewProfileForm(props) {
  function handleNewProfileFormSubmission(event) {
    event.preventDefault();
    props.onNewProfileCreation({
      name: event.target.name.value,
      bio: event.target.bio.value,
      projects: event.target.projects.value,
      skills: event.target.skills.value
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler = {handleNewProfileFormSubmission}
      buttonText = "Create Profile!" />
    </React.Fragment>
  );
}

NewProfileForm.propTypes = {
  onNewProfileCreation: PropTypes.func
}

export default NewProfileForm;
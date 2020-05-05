import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function EditProfileForm(props) {
  const { profile } = props;

  function handleEditProfileFormSubmission(event) {
    event.preventDefault();
    props.onEditProfile({
      name: event.target.name.value,
      bio: event.target.bio.value,
      projects:event.target.projects.value,
      skills: event.target.skills.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={ handleEditProfileFormSubmission }
      buttonText="Update Profile" />
    </React.Fragment>
  );
}

EditProfileForm.propTypes = {
  onEditProfile: PropTypes.func
}

export default EditProfileForm;

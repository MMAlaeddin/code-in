import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
// import { v4 } from 'uuid';
import { useFirestore } from 'react-redux-firebase';

function EditProfileForm(props) {

  const firestore = useFirestore();
  const { profile } = props;

  function handleEditProfileFormSubmission(event) {
    event.preventDefault();
    props.onEditProfile();
    const propertiesToUpdate = {
      name: event.target.name.value,
      bio: event.target.bio.value,
      projects: event.target.bio.value,
      skills: event.target.skills.value
    }
    return firestore.update({ collection: 'profiles', doc: profile.id }, propertiesToUpdate)
  }
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler = { handleEditProfileFormSubmission }
      buttonText="Update Profile" />
    </React.Fragment>
  );
}

EditProfileForm.propTypes = {
  onEditProfile: PropTypes.func
}

export default EditProfileForm;

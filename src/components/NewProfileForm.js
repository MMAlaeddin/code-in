import React from 'react';
import PropTypes from 'prop-types';
// import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';

function NewProfileForm(props) {

  const firestore = useFirestore();

  function addProfileToFirestore(event) {
    event.preventDefault();
    props.onNewProfileCreation();

    return firestore.collection('profiles').add(
      {
        name: event.target.name.value,
        bio: event.target.bio.value, 
        projects: event.target.projects.value,
        skills: event.target.skills.value
      });
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler = {addProfileToFirestore}
      buttonText = "Create Profile!" />
    </React.Fragment>
  );
}

NewProfileForm.propTypes = {
  onNewProfileCreation: PropTypes.func
}

export default NewProfileForm;
import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';


function ProfileDetail(props) {
  const { profile, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h3>Name:<strong>{profile.name}</strong></h3>
      <hr/>
      <p>Bio:</p> 
      <p><strong>{profile.bio}</strong></p>
      <p>Skills:</p>
      <p><strong>${profile.skills}</strong></p>
      <p>Projects:</p>
      <p><strong>{profile.projects}</strong></p>
      <Button onClick={()=> onClickingDelete(profile.id)} variant="info">Delete Profile</Button>
      <Button onClick={ props.onClickingEdit }>Update Profile</Button>
    </React.Fragment>
  )
}

ProfileDetail.propTypes = {
  profile: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ProfileDetail;
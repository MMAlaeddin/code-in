import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';


function ProfileDetail(props) {
  const { profile, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h3>Name:<strong>{profile.name}</strong></h3>
      <hr/>
      <p><strong>Bio:</strong></p> 
      <p>{profile.bio}</p>
      <p><strong>Skills:</strong></p>
      <p>{profile.skills}</p>
      <p><strong>Projects:</strong></p>
      <p>profile.projects}</p>
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
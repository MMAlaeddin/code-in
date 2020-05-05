import React from "react";
import PropTypes from "prop-types";

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
    </React.Fragment>
  )
}

ProfileDetail.propTypes = {
  profile: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ProfileDetail;
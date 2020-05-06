import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenProfileClicked(props.id)}>
      <h2>{props.name}</h2>
      <h5>{props.bio}</h5>
      <hr/>
      {/* <h3>Projects: </h3> */}
      <h5><ul>{props.projects}</ul></h5>
      {/* <h3> Skills: </h3> */}
      <h5><ul>{props.skills}</ul></h5>
      </div>
    </React.Fragment>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  projects: PropTypes.string,
  skills: PropTypes.string,
  id: PropTypes.string,
  whenProfileClicked: PropTypes.func
};

export default Profile;
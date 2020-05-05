import React from "react";
import PropTypes from "prop-types";
import Profile from "./Profile";
import Card from 'react-bootstrap/Card';
// import { useSelector } from 'react-redux';

function ProfileList(props) {
  return (
    <React.Fragment>
      <Card>
        {Object.values(props.profileList).map((profile) => {
          return <Profile
          whenProfileClicked = {props.onProfileSelection}
          name = {profile.name}
          bio = {profile.bio} />
        })}
      </Card>
    </React.Fragment>
  );
}

ProfileList.propTypes = {
  profileList: PropTypes.object,
  onProfileSelection: PropTypes.func,
};

export default ProfileList; 


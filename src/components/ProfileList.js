import React from "react";
import PropTypes from "prop-types";
import Profile from "./Profile";
// import { Card } from 'react-bootstrap';

function ProfileList(props) {
  return (
    <React.Fragment>
      {/* <Card> */}
        {Object.values(props.profileList).map((profile) => {
          return <Profile
          whenProfileClicked = {props.onProfileSelection}
          name = {profile.name}
          bio = {profile.bio} 
          key={profile.id}
          id={profile.id} />
        })}
      {/* </Card> */}
    </React.Fragment>
  );
}

ProfileList.propTypes = {
  profileList: PropTypes.object,
  onProfileSelection: PropTypes.func,
};

export default ProfileList; 


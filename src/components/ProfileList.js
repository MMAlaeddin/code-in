import React from "react";
import PropTypes from "prop-types";
import Profile from "./Profile";
import { Card } from 'react-bootstrap';

function ProfileList(props) {
  return (
    <React.Fragment>
      <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title><h1> {props.name} </h1></Card.Title>
        <Card.Text>
        {Object.values(props.profileList).map((profile) => {
          return <Profile
          whenProfileClicked = {props.onProfileSelection}
          name = {profile.name}
          bio = {profile.bio} 
          key={profile.id}
          id={profile.id} />
        })}

      </Card.Text>
      </Card.Body>
      </Card>
    </React.Fragment>
  );
}

ProfileList.propTypes = {
  profileList: PropTypes.object,
  onProfileSelection: PropTypes.func,
};

export default ProfileList; 


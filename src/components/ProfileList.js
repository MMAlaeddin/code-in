import React from "react";
import PropTypes from "prop-types";
import Profile from "./Profile";
import { Card, Row, Col } from 'react-bootstrap';

function ProfileList(props) {
  return (
    <React.Fragment>
      <Card>
        <Row>
          <Col>
        {Object.values(props.profileList).map((profile) => {
          return <Profile
          whenProfileClicked = {props.onProfileSelection}
          name = {profile.name}
          bio = {profile.bio} 
          key={profile.id}
          id={profile.id} />
        })}
         </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
}

ProfileList.propTypes = {
  profileList: PropTypes.object,
  onProfileSelection: PropTypes.func,
};

export default ProfileList; 


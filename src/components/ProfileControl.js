import React from "react";
import NewProfileForm from './NewProfileForm';
import ProfileList from './ProfileList';
import ProfileDetail from './ProfileDetail';
// import EditProfileForm from './EditProfileForm';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
// import * as a from './../actions';
// import { withFirestore } from 'react-redux-firebase';
// import { withFirestore, isLoaded } from 'react-redux-firebase';



class ProfileControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterProfileList: [], //??
      selectedProfile: null,
      // editing: false
    };
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    currentlyVisibleState = <ProfileList profileList={this.props.masterProfileList} onProfileSelection={this.handleChangingSelectedProfile} />;
    buttonText = "Add Profile";


    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}

export default ProfileControl;


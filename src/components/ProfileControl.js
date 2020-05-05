import React from "react";
import CreateNewProfileForm from './CreateNewProfileForm';
import ProfileList from './ProfileList';
import ProfileDetail from './ProfileDetail';
import EditProfileForm from './EditProfileForm';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import * as a from './../actions';
// import { withFirestore } from 'react-redux-firebase';
// import { withFirestore, isLoaded } from 'react-redux-firebase';



class ProfileControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterProfileList: [], //??
      selectedProfile: null,
      editing: false
    };
  }


  render(){

    return (
      <React.Fragment>
      </React.Fragment>
    )
  }
}

export default ProfileControl;


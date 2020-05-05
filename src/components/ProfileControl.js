import React from "react";
import CreateNewProfileForm from './CreateNewProfileForm';
import ProfileList from './ProfileList';
import ProfileDetail from './ProfileDetail';
import EditProfileForm from './EditProfileForm';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import * as a from './../actions';



class ProfileControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

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


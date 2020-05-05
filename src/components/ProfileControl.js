import React from "react";
import NewProfileForm from './NewProfileForm';
import ProfileList from './ProfileList';
import ProfileDetail from './ProfileDetail';
import EditProfileForm from './EditProfileForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';
import Button from 'react-bootstrap/Button';
// import { withFirestore } from 'react-redux-firebase';
// import { withFirestore, isLoaded } from 'react-redux-firebase';

class ProfileControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProfile: null,
      editing: false
    };
  }

  handleClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
    this.setState({selectedProfile: null});
  }

  handleAddingNewProfileToList = (newProfile) => {
    const { dispatch } = this.props;
    const action = a.addProfile(newProfile);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedProfile = (id) => {
    const selectedProfile = this.props.masterProfileList[id]
      this.setState({selectedProfile: selectedProfile});
  }

  handleDeletingProfile = (id) => {
      const { dispatch } = this.props;
      const action = a.deleteProfile(id);
      dispatch(action);
      this.setState({selectedProfile: null});
    
  }
  
  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingProfileInList = (profileToEdit) => {
    const { dispatch } = this.props;
    const action = a.addProfile(profileToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedProfile: null
    });
  }
  


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditProfileForm 
        profile = {this.state.selectedProfile}
        onEditProfile = {this.handleEditingProfileInList} />
      buttonText = "Return to Profiles";
    } else if (this.state.selectedProfile != null) {
      currentlyVisibleState = <ProfileDetail 
        profile = {this.state.selectedProfile} 
        onClickingDelete = {this.handleDeletingProfile}
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Profiles";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewProfileForm 
        onNewProfileCreation={this.handleAddingNewProfileToList}/>
      buttonText = "Return to Profiles";
    } else {
      currentlyVisibleState = <ProfileList 
        profileList={this.props.masterProfileList} 
        onProfileSelection={this.handleChangingSelectedProfile}PraddProfile />
      buttonText = "Add a Profile";
    }


    return (
      <React.Fragment> 
        {currentlyVisibleState}
        <Button onClick={this.handleClick} variant="info">{buttonText}</Button>
      </React.Fragment>
    );
  }
}

ProfileControl.propTypes = {
  masterProfileList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterProfileList: state.masterProfileList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
ProfileControl = connect(mapStateToProps)(ProfileControl);

export default ProfileControl;
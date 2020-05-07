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
import { withFirestore, isLoaded } from 'react-redux-firebase';

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

  handleAddingNewProfileToList = () => {
    const { dispatch } = this.props;
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedProfile = (id) => {
    this.props.firestore.get({collection: 'profiles', doc: id}).then((profile) => {
      const firestoreProfile = {
        name: profile.get("name"),
        bio: profile.get("bio"),
        projects: profile.get("projects"),
        skills: profile.get("skills"),
        id: profile.id
      }
      this.setState({selectedProfile: firestoreProfile });
    });
  }

  handleDeletingProfile = (id) => {
    this.props.firestore.delete({collection: 'profiles', doc: id});
    this.setState({selectedProfile: null});
  }
  
  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingProfileInList = () => {
    this.setState({
      editing: false,
      selectedProfile: null
    });
  }
  
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the queue.</h1>
        </React.Fragment>
      )
    } 
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
    } else if (this.state.editing) {
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
        onProfileSelection={this.handleChangingSelectedProfile} />
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

export default withFirestore(ProfileControl);
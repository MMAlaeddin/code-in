import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenProfileClicked(props.id)}>
      <h2>{props.name}</h2>
      <h5>{props.bio}</h5>
      <hr/>
      <h3>Projects: </h3>
      <h5>{props.projects}</h5>
      <h3>Skills: </h3>
      <h5>{props.skills}</h5>
      </div>
    </React.Fragment>
  )
}
import React from "react";
import PropTypes from "prop-types";
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Form, FormControl } from 'react-bootstrap';


function ReusableForm(props) {
  return (

    <React.Fragment>
      <Form onSubmit = { props.fromSubmissionHandler }>
       
          <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="name">What's your name?</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"/>
          </InputGroup>

          <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="bio">Tell us about yourself:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"/>
          </InputGroup>

          <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="projects">Show us some of your projects!</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"/>
          </InputGroup>

          <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="skills">What kind of skills do you flex?</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"/>
          </InputGroup>

          <Button type='submit' variant="info">{props.buttonText}</Button>

      </Form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  fromSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
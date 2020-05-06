import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from "react-router-dom";


function Header() {
  return (
    <React.Fragment>
      <Jumbotron>
      <h1>CodeIn</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
      </Jumbotron>
    </React.Fragment>
  );
}

export default Header;
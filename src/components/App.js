import React from 'react';
import Header from "./Header.js";
import ProfileControl from "./ProfileControl";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
  return ( 
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <ProfileControl />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
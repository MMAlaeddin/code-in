import React from 'react';
import Header from "./Header.js";
import ProfileControl from "./ProfileControl";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ProfileControl />
      <Footer />
    </React.Fragment>
  );
}

export default App;
import React from "react";
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import Navbar from './navbar/navbar_container';
import { Route } from 'react-router-dom'

const App = () => (
   <div>
      <Navbar />
      <h1>Jamcamp is cool</h1>
      <Route path="/signup" component={SignupContainer} />
      <Route path="/login" component={LoginContainer} />
   </div>
);
export default App;
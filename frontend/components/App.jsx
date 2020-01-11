import React from "react";
import Navbar from './navbar/navbar_container';
import Modal from './modal/modal';
import { Route } from 'react-router-dom'

const App = () => (
   <div>
      <Modal />
      <header>
         <Navbar />
      </header>
      
      {/* <h1>Jamcamp is cool</h1> */}
      <Route path="/" />
      {/* <Route path="/signup" component={SignupContainer} /> */}
      {/* <Route path="/login" component={LoginContainer} /> */}
      
      {/* <Switch>
         <Route path="/artist/id" />
         <Splash />
      </Switch>
      <Switch>
         <Route path="/jazz" />
         <Route path="/blues" />         
         <Route path="/" />         
      </Switch> */}
   </div>
);
export default App;
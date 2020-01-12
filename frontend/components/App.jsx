import React from "react";
import Navbar from './navbar/navbar_container';
import Modal from './modal/modal';
import { Route } from 'react-router-dom';
import Footer from './footer/footer';
import HomeContainer from './home/home_container';

const App = () => (
   <div>
      <Modal />
      <header>
         <Navbar />
      </header>
      
      {/* <h1>Jamcamp is cool</h1> */}
      <Route path="/" component={HomeContainer}/>
      <Footer />

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
import React from "react";
import Navbar from './navbar/navbar_container';
import Modal from './modal/modal';
import { Route, Switch } from 'react-router-dom';
import Footer from './footer/footer';
import HomeContainer from './home/home_container';
import AlbumPageContainer from './album_page/album_page_container';

const App = () => (
   <div>
      <Modal />
      <header>
         <Navbar />
      </header>

      <Switch>
         <Route path="/albums/:albumId" component={AlbumPageContainer} />
         <Route path="/" component={HomeContainer} />
      </Switch>

      <Footer />

      
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
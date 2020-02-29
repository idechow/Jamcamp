import React from "react";
import Navbar from './navbar/navbar_container';
import Modal from './modal/modal';
import { Route, Switch } from 'react-router-dom';
import Footer from './footer/footer';
import HomeContainer from './home/home_container';
import AlbumPageContainer from './album_page/album_page_container';
import Redirect404 from './error_pages/redirect_404'
import UserProfileContainer from './profile_page/profile_container';
import { AuthRoute } from '../utils/route_util';

const App = () => (
   <div className="root-sub">
      <Modal />
      <header>
         <Navbar />
      </header>

      <Switch>
         <Route path="/user/:userId" component={UserProfileContainer}/>
         <Route path="/artist/:bandId/album/:albumId" component={AlbumPageContainer} />
         <Route exact path="/" component={HomeContainer} />
         <Route path="*" component={Redirect404} />
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
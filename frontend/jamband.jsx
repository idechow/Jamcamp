import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';
import { fetchAlbum, fetchAlbums, fetchArtistAlbums } from './actions/album_actions';
import {fetchTracks} from './actions/track_actions';

document.addEventListener("DOMContentLoaded", () => {
   let store;
   if (window.currentUser) {
      const preloadedState = {
         session: { id: window.currentUser.id },
         entities: {
            users: { [window.currentUser.id]: window.currentUser }
         }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
   } else {
      store = configureStore();
   }
   const root = document.getElementById('root');

   window.getState = store.getState;
   window.dispatch = store.dispatch;
   window.fetchAlbum = fetchAlbum;
   window.fetchAlbums = fetchAlbums;
   window.fetchArtistAlbums = fetchArtistAlbums;
   window.fetchTracks = fetchTracks;

   ReactDOM.render(<Root store={store} />, root);
});

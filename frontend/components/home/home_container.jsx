import React from 'react';
import { connect } from 'react-redux';
import HomePage from './home';
import { fetchAlbums, clearAlbums } from '../../actions/album_actions';

const mSTP = state => {
   return {
      albums: state.entities.albums
   };
};

const mDTP = dispatch => {
   return {
      clearAlbums: () => dispatch(clearAlbums()),
      fetchAlbums: () => dispatch(fetchAlbums())
   };
};

export default connect(mSTP, mDTP)(HomePage);
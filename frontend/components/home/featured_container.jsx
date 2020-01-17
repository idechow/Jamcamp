import React from 'react';
import { connect } from 'react-redux';
import FeaturedAlbums from './featured';
import { fetchAlbums } from '../../actions/album_actions';


const mSTP = state => {
   return {
      albums: state.entities.albums
   };
};

const mDTP = dispatch => {
   return {
      fetchAlbums: () => dispatch(fetchAlbums())
   };
};

export default connect(mSTP, mDTP)(FeaturedAlbums);
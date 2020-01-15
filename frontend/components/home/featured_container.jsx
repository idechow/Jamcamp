import React from 'react';
import { connect } from 'react-redux';
import FeaturedAlbums from './featured';
import { fetchAlbums } from '../../utils/album_api_util';


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
import React from 'react';
import { connect } from 'react-redux';
import NotableAlbums from './notable';


const mSTP = (state) => {
   return {
      // albums: state.entities.albums
   };
};

const mDTP = (dispatch) => {
   return {};
};

export default connect(mSTP, mDTP)(NotableAlbums);
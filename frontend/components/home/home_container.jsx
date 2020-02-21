import React from 'react';
import { connect } from 'react-redux';
import HomePage from './home';
import { clearAlbums } from '../../actions/album_actions';

const mSTP = state => {
   return {};
};

const mDTP = dispatch => {
   return {
      clearAlbums: () => dispatch(clearAlbums()),
   };
};

export default connect(mSTP, mDTP)(HomePage);
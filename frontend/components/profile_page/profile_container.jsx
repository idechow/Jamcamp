import React from 'react';
import { connect } from 'react-redux';
import ProfilePage from './profile';


const mSTP = (state, ownProps) => {
   return {
      // user
      // collection
      // followers
      // discog
   };
};

const mDTP = (dispatch) => {
   return {
   };
};

export default connect(mSTP, mDTP)(ProfilePage);
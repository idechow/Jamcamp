import React from 'react';

import { connect } from 'react-redux';
import ProfilePage from './profile';

import { fetchArtist } from '../../actions/artist_actions';
import { fetchProfile } from '../../actions/user_actions';
import { toggleDropdown } from '../../actions/dropdown_actions';


const mSTP = (state, ownProps) => {
   return {
      currentUser: state.entities.users[state.session.id],
      user: state.entities.artists[ownProps.match.params.userId],
      userEdit: state.ui.dropdown.userEdit,
      // profile: state.entities.profile[ownProps.match.params.userId]
      profile: state.entities.profiles
      // collection
      // followers
      // discog
   };
};

const mDTP = (dispatch) => {
   return {
      fetchUser: userId => dispatch(fetchArtist(userId)),
      fetchProfile: userId => dispatch(fetchProfile(userId)),
      toggleUserEdit: () => dispatch(toggleDropdown('userEdit')),
   };
};

export default connect(mSTP, mDTP)(ProfilePage);
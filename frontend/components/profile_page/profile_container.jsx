import React from 'react';

import { connect } from 'react-redux';
import ProfilePage from './profile';

import { fetchArtist } from '../../actions/artist_actions';
import { fetchProfile } from '../../actions/user_actions';
import { toggleDropdown } from '../../actions/dropdown_actions';
import { openModal } from '../../actions/modal_actions';


const mSTP = (state, ownProps) => {
   return {
      currentUser: state.entities.users[state.session.id],
      user: state.entities.artists[ownProps.match.params.userId],
      userEdit: state.ui.dropdown.userEdit,
      profile: state.entities.profiles,
   };
};

const mDTP = (dispatch) => {
   return {
      fetchUser: userId => dispatch(fetchArtist(userId)),
      fetchProfile: userId => dispatch(fetchProfile(userId)),
      toggleUserEdit: () => dispatch(toggleDropdown('userEdit')),
      openModal: modal => dispatch(openModal(modal)),
   };
};

export default connect(mSTP, mDTP)(ProfilePage);
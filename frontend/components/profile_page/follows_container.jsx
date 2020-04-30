import { connect } from 'react-redux';

import FollowsItem from './follows_item';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
   currentUser: state.entities.users[state.session.id],
});

const mDTP = (dispatch) => ({
   addFollow: data => dispatch(createFollow(data)),
   removeFollow: bandId => dispatch(deleteFollow(bandId)),
   openModal: modal => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(FollowsItem);
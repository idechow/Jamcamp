import { connect } from 'react-redux';

import UserInfo from './user_info';
import { openModal } from '../../actions/modal_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import { toggleDropdown } from '../../actions/dropdown_actions';

const mSTP = (state, ownProps) => ({
   // user: ownProps.user,
   // currentUser: ownProps.currentUser,
   follow: ownProps.currentUser ? !!ownProps.currentUser.followees[ownProps.user.id] : false,
   // userId: ownProps.match.params.userId,
});

const mDTP = (dispatch) => ({
   openModal: modal => dispatch(openModal(modal)),
   addFollow: data => dispatch(createFollow(data)),
   removeFollow: bandId => dispatch(deleteFollow(bandId)),
   toggleUserEdit: () => dispatch(toggleDropdown('userEdit')),
});

export default connect(mSTP, mDTP)(UserInfo);
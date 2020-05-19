import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateArtist } from '../../actions/artist_actions';
import { toggleDropdown } from '../../actions/dropdown_actions';

import ProfileEditForm from './profile_edit_form';

const mSTP = (state, ownProps) => ({
   // user: ownProps.user,
   // currentUser: state.entities.users[state.session.id],
   // toggleUserEdit: ownProps.toggleUserEdit,
   userId: ownProps.match.params.userId, //uses withRouter
});

const mDTP = (dispatch) => ({
   updateProfile: (userId, data) => dispatch(updateArtist(userId, data)),
   toggleUserEdit: () => dispatch(toggleDropdown('userEdit')),
});

export default withRouter(connect(mSTP, mDTP)(ProfileEditForm));
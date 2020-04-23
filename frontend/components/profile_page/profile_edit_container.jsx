import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateArtist } from '../../actions/artist_actions';

import ProfileEditForm from './profile_edit_form';

const mSTP = (state, ownProps) => ({
   user:ownProps.user,
   toggleUserEdit: ownProps.toggleUserEdit,
   userId: ownProps.match.params.userId,
});

const mDTP = (dispatch) => ({
   updateProfile: (userId, data) => dispatch(updateArtist(userId, data)),
});

export default withRouter(connect(mSTP, mDTP)(ProfileEditForm));
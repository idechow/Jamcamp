import { connect } from 'react-redux';

import ProfileIndex from './profile_index';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

const mSTP = (state, ownProps) => ({
   type: 'follows',
   users: state.entities.profiles.followers || {},
});

const mDTP = (dispatch) => ({
   addFollow: data => dispatch(createFollow(data)),
   removeFollow: bandId => dispatch(deleteFollow(bandId)),
});

export default connect(mSTP, mDTP)(ProfileIndex);
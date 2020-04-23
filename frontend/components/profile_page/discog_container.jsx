import { connect } from 'react-redux';

import ProfileIndex from './profile_index';

const mSTP = (state, ownProps) => ({
   type: 'discog',
   albums: state.entities.profiles.discog || {},
});

const mDTP = (dispatch) => ({
   // edit/update album
});

export default connect(mSTP, mDTP)(ProfileIndex);
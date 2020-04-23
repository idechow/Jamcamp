import { connect } from 'react-redux';

import ProfileIndex from './profile_index';
import { createCollect, deleteCollect } from '../../actions/collect_actions';

const mSTP = (state, ownProps) => ({
   type: 'collection',
   // albumIds: Object.keys(state.entities.profiles.collectors) || [],
   // albums: state.entities.profiles.collectors || {},
   what: state.entities.profiles.what || [],
});

const mDTP = (dispatch) => ({
   addCollect: data => dispatch(createCollect(data)),
   removeCollect: albumId => dispatch(deleteCollect(albumId)),
});

export default connect(mSTP, mDTP)(ProfileIndex);
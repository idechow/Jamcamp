import { connect } from 'react-redux';

import DiscogItem from './discog_item';
import { createCollect, deleteCollect } from '../../actions/collect_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
   currentUser: state.entities.users[state.session.id],
});

const mDTP = (dispatch) => ({
   // edit/delete album buttons
   addCollect: data => dispatch(createCollect(data)),
   removeCollect: albumId => dispatch(deleteCollect(albumId)),
   openModal: modal => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(DiscogItem);
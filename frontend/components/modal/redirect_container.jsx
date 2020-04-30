import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Redirect from './redirect';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
   formType: 'REDIRECT',
});

const mDTP = dispatch => ({
   openModal: modal => dispatch(openModal(modal)),
   closeModal: () => dispatch(closeModal()),
   demoLogin: (demoUser) => dispatch(login(demoUser)).then(dispatch(closeModal())),
});

export default connect(mSTP, mDTP)(Redirect);
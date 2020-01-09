import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => ({
   errors: errors.sessionErrors,
   formType: 'LOGIN',
   
});

const mDTP = dispatch => ({
   processForm: (user) => dispatch(login(user)),
   openModal: modal => dispatch(openModal(modal)),
   closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SessionForm);
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => ({
   errors: errors.sessionErrors,
   formType: 'ARTIST_SIGNUP',
});

const mDTP = dispatch => ({
   processForm: (user) => dispatch(signup(user)),
   openModal: modal => dispatch(openModal(modal)),
   closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SessionForm);


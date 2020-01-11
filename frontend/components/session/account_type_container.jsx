import { connect } from 'react-redux';
import AccountType from './account_type';
import { openModal, closeModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';

const mDTP = dispatch => ({
   openModal: modal => dispatch(openModal(modal)),
   closeModal: () => dispatch(closeModal()),
   demoLogin: (demoUser) => dispatch(login(demoUser)).then(dispatch(closeModal()))
})

export default connect(null, mDTP)(AccountType);
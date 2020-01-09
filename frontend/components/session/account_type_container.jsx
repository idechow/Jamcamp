import { connect } from 'react-redux';
import AccountType from './account_type';
import { openModal, closeModal } from '../../actions/modal_actions';

const mDTP = dispatch => ({
   openModal: modal => dispatch(openModal(modal)),
   closeModal: () => dispatch(closeModal())
})

export default connect(null, mDTP)(AccountType);
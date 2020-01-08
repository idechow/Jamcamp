import { connect } from 'react-redux';
import AccountType from './account_type';
import { openModal } from '../../actions/modal_actions';

const mDTP = dispatch => ({
   openModal: modal => dispatch(openModal(modal))
})

export default connect(null, mDTP)(AccountType);
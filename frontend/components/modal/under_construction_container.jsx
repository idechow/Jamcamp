import { connect } from 'react-redux';
import UnderCon from './under_construction';
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
   // formType: 'UNDER_CON',
});

const mDTP = dispatch => ({
   closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(UnderCon);
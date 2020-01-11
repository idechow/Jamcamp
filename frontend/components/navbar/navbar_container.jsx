import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import Navbar from './navbar'
import { openModal } from '../../actions/modal_actions';


const mSTP = ({ session, entities: { users } }) => {
   return {
      currentUser: users[session.id],
   };
};

const mDTP = dispatch => ({
   logout: () => dispatch(logout()),
   openModal: modal => dispatch(openModal(modal)),
   demoLogin: (demoUser) => dispatch(login(demoUser))
});

export default connect(mSTP, mDTP)(Navbar);
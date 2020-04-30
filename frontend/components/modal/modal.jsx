import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ArtistSignupContainer from '../session/artist_signup_container';
import FanSignupContainer from '../session/fan_signup_container';
import LoginContainer from '../session/login_container';
import AccountTypeContainer from '../session/account_type_container';
import RedirectContainer from './redirect_container';
// import Draggable from 'react-draggable';

function Modal({ modal, closeModal }) {
   if (!modal) {
      return null;
   }
   let component;
   switch (modal) {
      case 'LOGIN':
         component = <LoginContainer />;
         break;
      case 'SIGNUP':
         component = <AccountTypeContainer />;
         break;
      case 'FAN_SIGNUP':
         component = <FanSignupContainer />;
         break;
      case 'ARTIST_SIGNUP':
         component = <ArtistSignupContainer />;
         break;
      case 'REDIRECT':
         component = <RedirectContainer />;
         break;
      default:
         return null;
   }
   return (
      <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
               {component}
            </div>
      </div>
   );
}

const mSTP = state => {
   return {
      modal: state.ui.modal
   };
};

const mDTP = dispatch => {
   return {
      closeModal: () => dispatch(closeModal())
   };
};

export default connect(mSTP, mDTP)(Modal);
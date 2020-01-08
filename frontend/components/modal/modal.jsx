import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ArtistSignupContainer from './session/artist_signup_container';
import FanSignupContainer from './session/fan_signup_container';
import LoginContainer from './session/login_container';

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
         component = <AccountType />;
         break;
      case 'FAN_SIGNUP':
         component = <FanSignupContainer />;
         break;
      case 'ARTIST_SIGNUP':
         component = <ArtistSignupContainer />;
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

const mapStateToProps = state => {
   return {
      modal: state.ui.modal
   };
};

const mapDispatchToProps = dispatch => {
   return {
      closeModal: () => dispatch(closeModal())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import React from 'react';

const mSTP = ({ errors }) => ({
   errors: errors.session,
   formType: 'signup',
   navLink: <Link to="/login">log in</Link>,
});

const mDTP = dispatch => ({
   processForm: (user) => dispatch(signup(user)),
})

export default connect(mSTP, mDTP)(SessionForm);
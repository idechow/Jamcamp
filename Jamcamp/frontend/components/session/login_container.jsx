import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import React from 'react';

const mSTP = ({ errors }) => ({
   errors: errors.session,
   formType: 'login',
   navLink: <Link to="/signup">sign up instead</Link>,
});

const mDTP = dispatch => ({
   processForm: (user) => dispatch(login(user)),
});

export default connect(mSTP, mDTP)(SessionForm);
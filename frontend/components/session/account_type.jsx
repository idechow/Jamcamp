import React from 'react';
import { Link } from 'react-router-dom';
import ArtistContainer from './artist_signup_container';
import FanContainer from './fan_signup_container';

const AccountType = (props) => (
   <div>
      <button onClick={this.props.openModal('FAN_SIGNUP')}>Sign up as a fan</button>
      <button onClick={this.props.openModal('ARTIST_SIGNUP')}>Sign up as an artist</button>
      <Link to='/' onClick={} />
   </div>
);

export default AccountType
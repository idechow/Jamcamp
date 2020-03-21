import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = ({ user, toggleUserEdit }) => {


   return (
      <div className='user-info'>
         <div className='info-top-line'>
            {user.username}
            {follow}
         </div>
      </div>
   )
}


export default UserInfo;
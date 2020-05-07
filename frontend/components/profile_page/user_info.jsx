import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = ({ user, toggleUserEdit }) => {


   return (
      <div className='user-info'>
         <div className='info-top-line'>
            <span className='user-name'>{user.username}</span>
            <button 
               className='user-edit-btn' 
               onClick={toggleUserEdit}>
                  <i className="far fa-edit edit-icon"></i>
                  <span>EDIT PROFILE</span>
            </button>
         </div>
         {/* {user.location}
         {user.about}
         {user.website} */}
         {/* {follow} */}
      </div>
   )
}


export default UserInfo;
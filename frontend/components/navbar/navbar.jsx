import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, logout, openModal }) => {
   const display = currentUser ? (
      <div>
         <p>Hello, {currentUser.username}</p>
         <button onClick={logout}>Logout</button>
      </div>
   ) : (
         <div>
            <button className="nav-btn" onClick={() => openModal('SIGNUP')}>Sign up</button>
            <br/>
            <button className="nav-btn" onClick={() => openModal('LOGIN')}>Log in</button>
         </div>
      );

   return (
      <header className="nav-bar">
         <h1 className="logo">Jamcamp</h1>
         <div>
            {display}
         </div>
      </header>
   );
};

export default Navbar;
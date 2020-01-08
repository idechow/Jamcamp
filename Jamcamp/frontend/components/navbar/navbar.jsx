import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {
   const display = currentUser ? (
      <div>
         <p>Hello, {currentUser.username}</p>
         <button onClick={logout}>Logout</button>
      </div>
   ) : (
         <div>
            <Link className="btn" to="/signup">Sign Up</Link>
            <br/>
            <Link className="btn" to="/login">Log In</Link>
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
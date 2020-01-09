import React from 'react';

const AccountType = ({ openModal, closeModal }) => (
   <div className="session-form">
      <h1>Sign up for a Jamcamp account</h1>
      <button className="close-form" type="button" onClick={closeModal}>×</button>
      <div className="account-form">
         <div className="signup-row">
            <i className="fas fa-headphones"></i>
            <div className="signup-option">
               <button 
                  className="signup-link fan-link"
                  type="button" 
                  onClick={() => openModal('FAN_SIGNUP')}>
                     Sign up as a fan
               </button>
               <p className="signup-text">
                  Follow your favorite artists, keep a wishlist, get 
                  instant streaming of your purchases, showcase your 
                  collection, and explore the music of like-minded fans.
               </p>
            </div>
         </div>
         <div className="signup-row">
            <i className="fas fa-guitar"></i>
            <div className="signup-option">
               <button
                  className="signup-link artist-link"
                  type="button" 
                  onClick={() => openModal('ARTIST_SIGNUP')}>
                     Sign up as an artist
               </button>
               <p className="signup-text">
                  Sell directly to your fans with total control over your 
                  music and pricing. Easy access to your customers’ data, 
                  real-time stats, music chart reporting, and more.
               </p>
            </div>
         </div>
      </div>
      <p className="session-footer">
         Can't commit? Explore our site with a &nbsp;
         <button 
            className="session-footer-button"
            type="button"
            // onClick={}
            >
               demo login
         </button>.
      </p>
   </div>
);

export default AccountType
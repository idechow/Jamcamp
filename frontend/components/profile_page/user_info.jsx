import React from 'react';
import { Link } from 'react-router-dom';

class UserInfo extends React.Component {
   constructor(props) {
      super(props);
      this.handleFollow = this.handleFollow.bind(this);
   }

   handleFollow(e) {
      e.preventDefault();
      const followData = {
         user_id: this.props.currentUser.id,
         band_id: this.props.user.id,
      };
      if (this.props.follow) {
         this.props.removeFollow(this.props.user.id)
            .then(() => {
               this.setState({ follow: false })
            });
      } else {
         this.props.addFollow(followData)
            .then(() => {
               this.setState({ follow: true })
            });
      }
   }

   followButton() {
      if (!!this.props.currentUser) {
         if (this.props.currentUser.id === this.props.user.id) {
            return null;
         } else if (this.props.follow) {
            return (
               <button
                  className="profile-flw-btn p-unfollow"
                  onClick={(e) => this.handleFollow(e)}>
                  <i className="fas fa-check check"></i>
                  <span>Following</span>
               </button>
            );
         } else {
            return (
               <button
                  className="profile-flw-btn p-follow"
                  onClick={(e) => this.handleFollow(e)}>
                  <i className="fas fa-plus plus"></i>
                  <span>Follow</span>
               </button>
            );
         }
      } else {
         return (
            <button
               className="profile-flw-btn p-follow"
               onClick={() => this.props.openModal('REDIRECT')}>
               <i className="fas fa-plus plus"></i>
               <span>Follow</span>
            </button>
         );
      }
   }

   editButton() {
      if (!!this.props.currentUser && 
         this.props.currentUser.id === this.props.user.id) {
         return(
            <button
               className='user-edit-btn'
               onClick={this.props.toggleUserEdit}>
               <i className="far fa-edit edit-icon"></i>
               <span>EDIT PROFILE</span>
            </button>
         );
      } else {
         return null;
      }
   }

   render() {
      const {user} = this.props;

      return (
         <>
            <div className='user-info'>
               <div className='info-top-line'>
                  <h1 className='user-name'>
                     <span>{user.username}</span>
                  </h1>
                  <div className='user-btn-wrap'>
                     {this.editButton()}
                  </div>
                  <div className='user-btn-wrap'>
                     {this.followButton()}
                  </div>
               </div>
               <div className='info-location'>
                  <span>{user.location}</span>
               </div>
               <div className='info-about wide'>
                  <div>{user.about}</div>
               </div>
               <div className='info-website wide'>
                  <a href={user.weblink}>
                     {user.weblink}
                  </a>
               </div>
            </div>
            <div className='info-about skinny'>
               <div>{user.about}</div>
            </div>
            <div className='info-website skinny'>
               <a href={user.weblink}>
                  {user.weblink}
               </a>
            </div>
         </>
      )
   }
}


export default UserInfo;
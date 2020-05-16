import React from 'react';
import { Link } from 'react-router-dom';


class FollowsItem extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         follow: this.props.currentUser ? !!this.props.currentUser.followees[this.props.user.id] : false,
      }
      this.handleFollow = this.handleFollow.bind(this);
      // this.toggleState = this.toggleState.bind(this);
   }

   componentDidUpdate(prevProps) {
      if (this.props.currentUser !== prevProps.currentUser) {
         let newState = this.props.currentUser ? !!this.props.currentUser.followees[this.props.user.id] : false;
         this.setState({ follow: newState });
      }
   }

   // toggleState(){
   //    setTimeout(() => this.setState({ follow: !this.state.follow }), 200);
   // }

   handleFollow(e) {
      e.preventDefault();
      const followData = {
         user_id: this.props.currentUser.id,
         band_id: this.props.user.id,
      };
      if (this.state.follow) {
         this.props.removeFollow(this.props.user.id)
            .then(() => {
               // asychonous
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
            return (
               <div className="profile-flw-btn thats-you">
                  <span>That's you!</span>
               </div>
            );
         } else if (this.state.follow) {
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
                  className="profile-flw-btn"
                  onClick={(e) => this.handleFollow(e)}>
                  <i className="fas fa-plus plus"></i>
                  <span>Follow</span>
               </button>
            );
         }
      } else {
         return (
            <button
               className="profile-flw-btn"
               onClick={() => this.props.openModal('REDIRECT')}>
               <i className="fas fa-plus plus"></i>
               <span>Follow</span>
            </button>
         );
      }
   }


   render() {
      const { user } = this.props;
      // console.log(this.state.follow)
      return (
         <li className='follow-li'>
            <div className='follow-img'>
               <Link to={`/user/${user.id}`}>
                  <img src={user.profilePhotoUrl} />
               </Link>
            </div>
            <div className='follow-info'>
               <div className='follow-info-top'>
                  <Link className='follow-username' to={`/user/${user.id}`}>
                     {user.username}
                  </Link>
                  <p className='follow-location'>
                     {user.location || 'San Francisco, California'}
                  </p>
               </div>
               <div className='follow-info-btn'>
                  {this.followButton()}
               </div>
            </div>
         </li>
      );
   }
}

export default FollowsItem;
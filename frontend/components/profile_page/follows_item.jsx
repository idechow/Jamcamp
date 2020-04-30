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

   // toggleState(){
   //    setTimeout(() => this.setState({ follow: !this.state.follow }), 200);
   // }

   handleFollow(userId, e) {
      e.preventDefault();
      const followData = {
         user_id: this.props.currentUser.id,
         band_id: userId,
      };
      if (this.state.follow) {
         this.props.removeFollow(userId)
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

   followButton(userId) {
      if (!!this.props.currentUser) {
         if (this.state.follow) {
            return (
               <button
                  className="artist-flw-btn unfollow"
                  onClick={(e) => this.handleFollow(userId, e)}>
                  <span>Following</span>
               </button>
            );
         } else {
            return (
               <button
                  className="artist-flw-btn follow"
                  onClick={(e) => this.handleFollow(userId, e)}>
                  <span>Follow</span>
               </button>
            );
         }
      } else {
         return (
            <button
               className="artist-flw-btn follow"
               onClick={() => this.props.openModal('REDIRECT')}>
               <span>Follow</span>
            </button>
         );
      }
   }


   render() {
      const { user } = this.props;
      // console.log(this.state.follow)
      return (
         <li>
            <div>
               <Link to={`/user/${user.id}`}>
                  <img src={user.profilePhotoUrl} />
               </Link>
            </div>
            <div>
               <div>
                  <Link to={`/user/${user.id}`}>
                     {user.username}
                  </Link>
                  <p>
                     {user.location || 'location?'}
                  </p>
               </div>
               <div>
                  {this.followButton(user.id)}
               </div>
            </div>
         </li>
      );
   }
}

export default FollowsItem;
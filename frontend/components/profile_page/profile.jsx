import React from 'react';
import { NavLink, Route, Link } from 'react-router-dom';

import UserInfo from './user_info';
import ProfileEditContainer from './profile_edit_container';
import DiscogContainer from './discog_container';
import CollectionContainer from './collection_container';
import FollowsContainer from './follows_container';

class ProfilePage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         loaded: false,
      }
   }

   componentDidMount() {
      const loadUser = this.props.fetchUser(this.props.match.params.userId);
      const loadProfile = this.props.fetchProfile(this.props.match.params.userId);
      Promise.all([loadUser, loadProfile]).then(() => this.setState({ loaded: true }));
   }

   componentDidUpdate(prevProps) {
      if (this.props.match.params.userId !== prevProps.match.params.userId) {
         const resetUser = this.props.fetchUser(this.props.match.params.userId);
         const resetProfile = this.props.fetchProfile(this.props.match.params.userId);
         Promise.all([resetUser, resetProfile]).then(() => this.setState({ loaded: true }));
      }
   }

   profileIndex() {
      let grid;

      if (this.props.profile.collectors.length > 0){
         grid = this.props.profile.collectors.map(album => {
            return <CollectionContainer key={album.id} album={album} />
         });
      } else if (this.props.profile.discog.length > 0) {
         grid = this.props.profile.discog.map(album => {
            return <DiscogContainer key={album.id} album={album} />
         });
      } else if (this.props.profile.followers.length > 0) {
         grid = this.props.profile.followers.map(user => {
            return <FollowsContainer key={user.id} user={user} />
         });
      } else if (this.props.profile.followees.length > 0) {
         grid = this.props.profile.followees.map(user => {
            return <FollowsContainer key={user.id} user={user} />
         });
      } else {
         grid = null;
      }

      return grid;
   }
   
   emptyCollection() {
      return (
         <div>
            <p>You don't have a collection – yet! Start digging:</p>
            <Link to='/'>Find cool music on Jamcamp</Link>
         </div>
      )
   }

   render() {
      if (this.state.loaded && this.props.user) {
         const { userEdit, profile, user, currentUser } = this.props;
         const profileUrl = `/user/${this.props.match.params.userId}`;

         let userInfo = <UserInfo
            user={this.props.user}
            toggleUserEdit={this.props.toggleUserEdit}
            
         />;

         if (userEdit) {
            userInfo = <ProfileEditContainer
               user={this.props.user}
               toggleUserEdit={this.props.toggleUserEdit}
            />;
         }

         return(
            <main className='profile-main'>
               <figure className='profile-banner'
                  style={ { backgroundImage: `url(${this.props.user.bandPhotoUrl})`} }>
               </figure>

               <section className='profile-content'>
                  <div className='user-about'>
                     <div className='user-image'
                        style={{ backgroundImage: `url(${this.props.user.profilePhotoUrl})` }}>
                     </div>
                     { userInfo }
                  </div>

                  <ul className='user-tabs'>
                     <li className={profile.collectors.length > 0 ? '' 
                        : !currentUser ? 'hide-link' 
                        : currentUser.id === user.id ? '' 
                        : 'hide-link'}>
                        <NavLink to={profileUrl} exact>
                           collection
                           <span className='total'>{profile.collectors.length}</span>
                        </NavLink>
                     </li>
                     <li className={profile.discog.length < 1 ? 'hide-link' : ''}>
                        <NavLink to={profileUrl + '/discography'}>
                           discography
                           <span className='total'>{profile.discog.length}</span>
                        </NavLink>
                     </li>
                     <li className={profile.followers.length < 1 ? 'hide-link' : ''}>
                        <NavLink to={profileUrl + '/followers'}>
                           followers
                           <span className='total'>{profile.followers.length}</span>
                        </NavLink>
                     </li>
                     <li className={profile.followees.length < 1 ? 'hide-link' : ''}>
                        <NavLink to={profileUrl + '/following'}>
                           following
                           <span className='total'>{profile.followees.length}</span>
                        </NavLink>
                     </li>
                  </ul>

                  <div className='user-content-wrap'>
                     <div className='user-content'>
                        <ul>
                           <Route path='/user/:userId' exact
                              render={profile.collectors.length < 1 && currentUser && currentUser.id === user.id ?
                                 () => this.emptyCollection() : () => this.profileIndex()
                              } />
                           <Route path='/user/:userId/discography'
                              render={() =>
                                 profile.discog.map(album => {
                                    return <DiscogContainer key={album.id} album={album} />
                                 })
                              } />
                           <Route path='/user/:userId/followers' 
                              render={() =>
                                 profile.followers.map(user => {
                                    return <FollowsContainer key={user.id} user={user} />
                                 })
                              } />
                           <Route path='/user/:userId/following' 
                              render={() =>
                                 profile.followees.map(user => {
                                    return <FollowsContainer key={user.id} user={user} />
                                 })
                              } />
                        </ul>
                     </div>
                  </div>
               </section>
            </main>
         );
      } else { return <div></div> }
   }
}

export default ProfilePage;
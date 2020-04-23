import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import UserInfo from './user_info';
import ProfileEditContainer from './profile_edit_container';
import DiscogContainer from './discog_container';
import CollectionContainer from './collection_container';
import FollowersContainer from './followers_container';
import FollowingContainer from './following_container';

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

   render() {
      if (this.state.loaded && this.props.user) {
         const { userEdit, profile } = this.props;
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
                     <li>
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
                        <Route path='/user/:userId' exact component={CollectionContainer} />
                        {/* inside collection if collets count is 0 then have tag line and a link to the discovery section */}
                        {/* classname={profile.counts.collectedCount < 1 ? 'hide-link' : ''} */}  
                        <Route path='/user/:userId/discography' component={DiscogContainer} />
                        <Route path='/user/:userId/followers' component={FollowersContainer} />
                        <Route path='/user/:userId/following' component={FollowingContainer} />
                     </div>
                  </div>
               </section>
            </main>
         );
      } else { return <div></div> }
   }
}

export default ProfilePage;
import React from 'react';
import { NavLink, Route, Link, Switch, Redirect } from 'react-router-dom';

import UserInfoContainer from './user_info_container';
import ProfileEditContainer from './profile_edit_container';
import DiscogContainer from './discog_container';
import CollectionContainer from './collection_container';
import FollowsContainer from './follows_container';
import NarrowFooter from '../footer/narrow_footer';

class ProfilePage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         loaded: false,
      }
      this.activePath = this.activePath.bind(this);
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
      // if (this.props.currentUser !== prevProps.currentUser) {}
   }

   profileIndex() {
      let grid;

      if (this.props.profile.collects.length > 0){
         grid = this.props.profile.collects.map(album => {
            return <CollectionContainer key={album.id} album={album} 
               pathId ={this.props.user.id}/>
         });
      } else if (this.props.profile.discog.length > 0) {
         grid = this.props.profile.discog.map(album => {
            return <DiscogContainer key={album.id} album={album} />
         });
      } else if (this.props.profile.followers.length > 0) {
         grid = this.props.profile.followers.map(follow => {
            return <FollowsContainer key={follow.id} user={follow} />
         });
      } else if (this.props.profile.followees.length > 0) {
         grid = this.props.profile.followees.map(follow => {
            return <FollowsContainer key={follow.id} user={follow} />
         });
      } else {
         grid = <div className='empty-grid'></div>;
      }

      return grid;
   }

   activePath(path) {
      const paths = new RegExp(/discography|followers|followees/);
      // const paths = ['discog', 'followers', 'followees'];
      if (this.props.profile.collects.length < 1 && 
         (!this.props.currentUser || this.props.user.id !== this.props.currentUser.id) &&
         !paths.test(this.props.location.pathname)){
         // !paths.some(str => this.props.location.pathname.includes(str))){
         if (path === 'discog' && 
            this.props.profile.discog.length > 0) {
            return 'active';
         } else if (path === 'followers' &&
            this.props.profile.discog.length < 1 &&
            this.props.profile.followers.length > 0) {
            return 'active';
         } else if (path === 'followees' &&
            this.props.profile.discog.length < 1 &&
            this.props.profile.followers.length < 1 &&
            this.props.profile.followees.length > 0) {
            return 'active';
         } else {
            return '';
         }
      } else {
         return '';
      }
   }

   emptyGrid() {
      // return <div className='empty-grid'></div>;
      return <Redirect to={`/user/${this.props.user.id}`} />
   }
   
   emptyCollection() {
      return (
         <div className='empty-grid'>
            <p>You don't have a collection — yet! Start digging:</p>
            <Link to='/'>Find cool music on Jamcamp</Link>
         </div>
      );
   }

   render() {
      if (this.state.loaded && this.props.user) {
         const { userEdit, profile, user, currentUser } = this.props;
         const profileUrl = `/user/${this.props.match.params.userId}`;

         let userInfo = <UserInfoContainer 
            user={this.props.user}
            currentUser={this.props.currentUser}
         />;

         if (userEdit) {
            userInfo = <ProfileEditContainer
               user={this.props.user}
               currentUser={this.props.currentUser}
            />;
         }
         
         return(
            <div className='profile-main-wrap'>
               <main className='profile-main'>
                  <figure className='profile-banner'
                     style={Boolean(this.props.user.bandPhotoUrl)
                        ? { backgroundImage: `url(${this.props.user.bandPhotoUrl})`}
                        : { backgroundImage: `url(${window.DefaultBackground})` } }>
                  </figure>
                  <section className={userEdit ? 'edit-top' : 'top'}>
                     <div className='user-about'>
                        <div className='user-image'
                           style={Boolean(this.props.user.photoUrl)
                              ? { backgroundImage: `url(${this.props.user.photoUrl})` }
                              : { backgroundImage: `url(${window.TerrapinProfile})` }}>
                        </div>
                        { userInfo }
                     </div>
                  </section>
                  <section className={userEdit ? 'disabled' : 'profile-content'}>
                     <div className='user-tabs-wrap'>
                        <ol className='user-tabs'>
                           <li className={profile.collects.length > 0 ? '' 
                              : !currentUser ? 'hide-link' 
                              : currentUser.id === user.id ? '' 
                              : 'hide-link'}>
                              <NavLink to={profileUrl} exact>
                                 collection
                                 <span className='total'>{profile.collects.length}</span>
                              </NavLink>
                           </li>
                           <li className={profile.discog.length < 1 ? 'hide-link' : ''}>
                              <NavLink to={profileUrl + '/discography'} 
                                 className={this.activePath('discog')}>
                                 discography
                                 <span className='total'>{profile.discog.length}</span>
                              </NavLink>
                           </li>
                           <li className={profile.followers.length < 1 ? 'hide-link' : ''}>
                              <NavLink to={profileUrl + '/followers'} 
                                 className={this.activePath('followers')}>
                                 followers
                                 <span className='total'>{profile.followers.length}</span>
                              </NavLink>
                           </li>
                           <li className={profile.followees.length < 1 ? 'hide-link' : ''}>
                              <NavLink to={profileUrl + '/following'} 
                                 className={this.activePath('followees')}>
                                 following
                                 <span className='total'>{profile.followees.length}</span>
                              </NavLink>
                           </li>
                        </ol>
                     </div>
                     <div className='user-grid-wrap'>
                        <ol className='user-grid'>
                           <Switch>
                              <Route exact path='/user/:userId'
                                 render={profile.collects.length < 1 && currentUser && currentUser.id === user.id ?
                                    () => this.emptyCollection() : () => this.profileIndex()
                                 } />
                              <Route path='/user/:userId/discography'
                                 render={profile.discog.length < 1 ? () => this.emptyGrid() :
                                    () => profile.discog.map(album => {
                                       return <DiscogContainer key={album.id} album={album} />
                                    })
                                 } />
                              <Route path='/user/:userId/followers' 
                                 render={profile.followers.length < 1 ? () => this.emptyGrid() :
                                    () => profile.followers.map(follow => {
                                       return <FollowsContainer key={follow.id} user={follow} />
                                    })
                                 } />
                              <Route path='/user/:userId/following' 
                                 render={profile.followees.length < 1 ? () => this.emptyGrid() :
                                    () => profile.followees.map(follow => {
                                       return <FollowsContainer key={follow.id} user={follow} />
                                    })
                                 } />
                              <Route path='/user/:userId/*'><Redirect to={`/user/${user.id}`} /></Route>
                           </Switch>
                        </ol>
                     </div>
                  </section>
               </main>
               <NarrowFooter />
            </div>
         );
      } else { return <div></div> }
   }
}

export default ProfilePage;
import React from 'react';
import UserInfo from './user_info';

class ProfilePage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         loaded: false,
      }
   }

   componentDidMount() {
      const a = this.props.fetchUser(this.props.match.params.userId);
      Promise.all([a]).then(() => this.setState({ loaded: true }));
   }

   render() {
      if (this.state.loaded) {
         const { userEdit } = this.props;

         let userInfo = <UserInfo
            user={this.props.user}
            toggleUserEdit={this.props.toggleUserEdit}
            
         />;

         // if (userEdit) {
         //    userInfo = <UserEditFormContainer
         //       toggleUserEdit={this.props.toggleUserEdit}
         //    />;
         // }

         return(
            <main className='profile-main'>
               <figure className='profile-banner'
                  style={ { backgroundImage: `url(${this.props.user.bandPhotoUrl})`} }>
               </figure>

               <section className='profile-content'>
                  <div className='user-about'>
                     <div className='user-image'
                        style={{ backgroundImage: `url(${this.props.user.photoUrl})` }}>
                     </div>
                     { userInfo }
                  </div>

                  <ul className='user-tabs'>

                  </ul>

                  <div className='user-content-wrap'>
                     <div className='user-content'>

                     </div>
                  </div>
               </section>
            </main>
         );
      } else { return <div></div> }
   }
}

export default ProfilePage;
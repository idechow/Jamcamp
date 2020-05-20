import React from 'react';

class ProfileEditForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         username: this.props.user.username || '',
         location: this.props.user.location || '',
         weblink: this.props.user.weblink || '',
         about: this.props.user.about || '',
      }
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(e) {
      e.preventDefault();
      const userData = new FormData();

      Object.keys(this.state).forEach(key => {
         userData.append(`user[${key}]`, this.state[key]);
      });

      // this.props.updateUser(this.props.userId, formData).then(
      //    this.props.toggleEditForm
      // );
   }

   update(field) {
      return e => this.setState({
         [field]: e.currentTarget.value
      });
   }

   render() {
      return (
         <form className='profile-edit-form' onSubmit={this.handleSubmit}>
            {/* <div className='profile-photo-edit'></div> */}
            <div className='profile-input-area'>
               <div className='edit-name edit-focus'>
                  <label className='hint'>your name</label>
                  <input 
                     className='profile-input-field'
                     type='text'
                     value={this.state.username}
                     onChange={this.update('username')}
                  />
               </div>
               <div className='edit-info'>
                  <div className='edit-location edit-focus'>
                     <label className='hint'>location</label>
                     <input
                        className='profile-input-field'
                        type='text'
                        value={this.state.location}
                        onChange={this.update('location')}
                     />
                  </div>
                  <div className='edit-website edit-focus'>
                     <label className='hint'>
                        link to your website or blog
                     </label>
                     <input
                        className='profile-input-field'
                        type='text'
                        value={this.state.wenlink}
                        onChange={this.update('weblink')}
                     />
                  </div>
               </div>
               <div className='edit-about edit-focus'>
                  <label className='hint'>about you</label>
                  <textarea
                     maxLength="400"
                     value={this.state.about}
                     onChange={this.update('about')}
                  />
                  <p>(max length: 400 characters)</p>
               </div>
               <div className='edit-submit'>
                  <button className='edit-submit-btn'
                     type='submit'>
                        SAVE CHANGES
                  </button>
                  <button className='edit-cancel-btn' 
                     onClick={this.props.toggleUserEdit}>
                        CANCEL
                  </button>
               </div>
            </div>
         </form>
         
      );
   }
}

export default ProfileEditForm;
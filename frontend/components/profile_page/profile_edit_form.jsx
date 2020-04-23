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
   }

   update(field) {
      return e => this.setState({ [feild]: e.target.value });
   }

   render() {
      return (
         <form className='profile-edit-form' onSubmit={this.handleSubmit}>
            <div className='profile-input-area'>

               <div className='profile-field-wrap'>
                  <label>your name</label>
                  <input 
                     className='profile-input-field'
                     type='text'
                     value={this.state.username}
                     onChange={this.update('username')}
                  />
               </div>

               <div className='profile-field-wrap'>
                  <label>location</label>
                  <input
                     className='profile-input-field'
                     type='text'
                     value={this.state.location}
                     onChange={this.update('location')}
                  />
               </div>

               <div className='profile-field-wrap'>
                  <label>link to your website or blog</label>
                  <input
                     className='profile-input-field'
                     type='text'
                     value={this.state.wenlink}
                     onChange={this.update('weblink')}
                  />
               </div>

               <div className='profile-textarea-wrap'>
                  <label>about you</label>
                  <textarea
                     className='profile-input-textarea'
                     value={this.state.about}
                     onChange={this.update('about')}
                  />
               </div>

               <div className='profile-submit-wrap'>
                  <button className='submit-edit-btn'
                     type='submit'>
                        SAVE CHANGES
                  </button>
                  <a className='cancel-edit-btn' 
                     onClick={this.props.toggleUserEdit}>
                        CANCEL
                  </a>
               </div>
            </div>
         </form>
         
      );
   }
}

export default ProfileEditForm;
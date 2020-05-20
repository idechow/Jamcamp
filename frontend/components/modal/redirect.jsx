import React from 'react';
import Draggable from 'react-draggable';

class Redirect extends React.Component {
   constructor(props) {
      super(props);
      this.demo = this.demo.bind(this);
   }

   demo(e) {
      e.preventDefault();
      this.props.demoLogin({
         username: "Robert Hunter",
         password: "terrapin"
      });
   }

   render() {
      let { openModal, closeModal } = this.props;
      return (
         <Draggable handle="section">
            <div className="redirect-form">
               <section className='redirect-top'>
                  <h1>&nbsp;</h1>
                  <input 
                     className="re-close-form" 
                     type="button" 
                     onClick={closeModal}
                     value='×' />
               </section>
               <div className='redirect-main'>
                  <div className='redirect-text'>
                     To continue, please&nbsp;
                     <span><input
                        className='text-btn'
                        type='button'
                        onClick={() => openModal('SIGNUP')}
                        value='sign up' />&nbsp;</span>
                     for a free Jampcamp account (or&nbsp;
                     <span><input
                        className='text-btn'
                        type='button'
                        onClick={() => openModal('LOGIN')}
                        value='log in' />&nbsp;</span>
                     if you already have one). To explore try our&nbsp;
                     <span><input
                        className="text-btn"
                        type="button"
                        onClick={(e) => this.demo(e)}
                        value='demo login' />:</span>
                  </div>
                  <div className='redirect-btns'>
                     <input
                        className='re-big-btn white'
                        type='button'
                        onClick={() => openModal('SIGNUP')}
                        value='Sign up' />
                     <input
                        className='re-big-btn white'
                        type='button'
                        onClick={() => openModal('LOGIN')}
                        value='Log in' />
                     <input
                        className='re-big-btn blue'
                        type='button'
                        onClick={(e) => this.demo(e)}
                        value='Demo Login' />
                  </div>
               </div>  
            </div>
         </Draggable>
      )
   }
}

export default Redirect;

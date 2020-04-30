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
         <Draggable handle="h1">
            <div className="session-form">
               <h1></h1>
               <input 
                  className="close-form" 
                  type="button" 
                  onClick={closeModal}
                  value='×' />
               <div className=''>
                  To continue, please &nbsp;
                  <span><input
                     className='text-btn'
                     type='button'
                     onClick={() => openModal('SIGNUP')}
                     value='sign up ' /></span>
                  for a free Jampcamp account (or
                  <input
                     className='text-btn'
                     type='button'
                     onClick={() => openModal('LOGIN')}
                     value='log in ' /> 
                  if you already have one). To explore try our
                  <input
                     className="text-btn"
                     type="button"
                     onClick={(e) => this.demo(e)}
                     value='demo login' />:
               </div>
               <div>
                  <input
                     className='big-btn blue'
                     type='button'
                     onClick={() => openModal('SIGNUP')}
                     value='Sign up' />
                  <button
                     className='big-btn white'
                     type='button'
                     onClick={() => openModal('LOGIN')}
                     value='Log in' />
                  <button
                     className='big-btn green'
                     type='button'
                     onClick={(e) => this.demo(e)}
                     value='Demo Login' />
               </div>    
            </div>
         </Draggable>
      )
   }
}

export default Redirect;

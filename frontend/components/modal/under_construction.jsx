import React from 'react';
import Draggable from 'react-draggable';

class UnderCon extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      let { closeModal } = this.props;
      return (
         <Draggable handle="section">
            <div className="under-con-form">
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
                     This element is under construction.
                  </div>
               </div>
            </div>
         </Draggable>
      )
   }
}

export default UnderCon;
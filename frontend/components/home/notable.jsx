import React from 'react';

class NotableAlbums extends React.Component {

   constructor(props) {
      super(props);
   }

   
   render() {
      return (
         <section className="notable-container">
            <div className="notable-title">NOTABLE SETS</div>
            <ul className="notable-albums">

            </ul>
         </section>
      );
   }
}

export default NotableAlbums;
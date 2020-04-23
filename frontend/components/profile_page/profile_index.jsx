import React from 'react';

class ProfileIndex extends React.Component {
   constructor(props) {
      super(props);
   }

   collectionItem(album){

      return(
         <div key={album.id}>yup{album.id}</div>
      );
   }

   discogItem(album){

      return (
         <div></div>
      );
   }

   followsItem(user){

      return (
         <div></div>
      );
   }


   render() {
      const {type, albumIds, albums, users, what} = this.props;
      let grid;

      switch (type) {
         case 'collection':
            grid = what.map(album => {
               return this.collectionItem(album);
            });

            // grid = Object.keys(albums).map(id => {
            //    return this.collectionItem(albums[id]);
            // });

            // for (const id in albums) {
            //    return this.collectionItem(albums[id]);
            // }
            break;

         case 'discog':
            // grid = albums.map(album => {
            //    return this.discogItem(album);
            // })
            break;

         case 'follows':

         default:
            break;
      }

      return(
         <div className='album-index-container'>
            <ul className='album-index-grid'>
               { grid }
            </ul>
         </div>
      );
   }
}

export default ProfileIndex;
